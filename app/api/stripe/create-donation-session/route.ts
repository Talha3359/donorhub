import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured, formatAmountForStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
    try {
        // Check if Stripe is configured
        if (!isStripeConfigured() || !stripe) {
            return NextResponse.json(
                { error: 'Payment system is not configured. Please contact support.' },
                { status: 503 }
            );
        }

        const body = await request.json();
        const { amount, donorEmail, donorName, recurring } = body;

        if (!amount || amount <= 0) {
            return NextResponse.json(
                { error: 'Valid donation amount is required' },
                { status: 400 }
            );
        }

        if (!donorEmail) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Create Checkout Session for donation
        const sessionConfig: any = {
            payment_method_types: ['card'],
            customer_email: donorEmail,
            success_url: `${request.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}&type=donation`,
            cancel_url: `${request.headers.get('origin')}/checkout/cancel`,
            metadata: {
                donorName: donorName || '',
                type: 'donation',
            },
        };

        if (recurring) {
            // Recurring donation - create as subscription
            // Note: You need to create a product and price in Stripe Dashboard for recurring donations
            sessionConfig.mode = 'subscription';
            sessionConfig.line_items = [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Monthly Donation',
                            description: `Monthly donation of $${amount}`,
                        },
                        unit_amount: formatAmountForStripe(amount, 'usd'),
                        recurring: {
                            interval: 'month',
                        },
                    },
                    quantity: 1,
                },
            ];
        } else {
            // One-time donation
            sessionConfig.mode = 'payment';
            sessionConfig.line_items = [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Donation',
                            description: `One-time donation of $${amount}`,
                        },
                        unit_amount: formatAmountForStripe(amount, 'usd'),
                    },
                    quantity: 1,
                },
            ];
        }

        const session = await stripe.checkout.sessions.create(sessionConfig);

        return NextResponse.json({
            sessionId: session.id,
            url: session.url
        });
    } catch (error: any) {
        console.error('Donation session error:', error);
        return NextResponse.json(
            {
                error: error?.message || 'Failed to create donation session',
                type: error?.type || 'api_error'
            },
            { status: 500 }
        );
    }
}
