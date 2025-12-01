import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured, formatAmountForStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
    try {
        // Check if Stripe is configured
        if (!isStripeConfigured() || !stripe) {
            console.error('Stripe is not configured - missing STRIPE_SECRET_KEY');
            return NextResponse.json(
                { error: 'Payment system is not configured. Please contact support.' },
                { status: 503 }
            );
        }

        console.log('=== Checkout Session API Called ===');

        const body = await request.json();
        const { priceId, planName, email, amount } = body;

        console.log('Request body:', { priceId, planName, email, amount });

        // Determine line items based on plan name / amount only.
        // We ignore client-provided priceId to avoid "No such price" errors when using friendly ids.
        let planAmount: number | undefined = undefined;

        if (typeof amount === 'number' && amount > 0) {
            planAmount = amount;
        } else if (planName === 'Standard') {
            planAmount = 99; // $99/month as shown on pricing page
        } else if (planName === 'Premium') {
            planAmount = 199; // $199/month as shown on pricing page
        }

        if (!planAmount || planAmount <= 0) {
            return NextResponse.json(
                { error: 'Valid paid plan amount is required to create a checkout session.' },
                { status: 400 }
            );
        }

        const lineItems: any[] = [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `${planName || 'Standard'} Plan`,
                    },
                    unit_amount: formatAmountForStripe(planAmount, 'usd'),
                    recurring: {
                        interval: 'month',
                    },
                },
                quantity: 1,
            },
        ];

        // Create Checkout Session
        // If email is provided, pre-fill it; otherwise Stripe will collect it
        const sessionParams: any = {
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: lineItems,
            success_url: `${request.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.headers.get('origin')}/checkout/cancel`,
            metadata: {
                planName: planName || 'Standard',
            },
        };

        // Only add customer_email if provided
        if (email) {
            sessionParams.customer_email = email;
        }

        const checkoutSession = await stripe.checkout.sessions.create(sessionParams);

        console.log('Checkout session created:', checkoutSession.id);
        return NextResponse.json({
            sessionId: checkoutSession.id,
            url: checkoutSession.url,
        });
    } catch (error: any) {
        console.error('=== Checkout Session Error ===');
        console.error('Error name:', error?.name);
        console.error('Error message:', error?.message);
        console.error('Error type:', error?.type);

        // Return JSON error response
        return NextResponse.json(
            {
                error: error?.message || 'Failed to create checkout session',
                type: error?.type || 'api_error',
            },
            { status: 500 }
        );
    }
}
