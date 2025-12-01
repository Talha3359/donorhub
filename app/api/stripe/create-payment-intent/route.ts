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
        const { amount, currency = 'usd', description } = body;

        if (!amount || amount <= 0) {
            return NextResponse.json(
                { error: 'Valid amount is required' },
                { status: 400 }
            );
        }

        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: formatAmountForStripe(amount, currency),
            currency: currency,
            description: description || 'Payment',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (error: any) {
        console.error('Payment intent error:', error);
        return NextResponse.json(
            {
                error: error?.message || 'Failed to create payment intent',
                type: error?.type || 'api_error'
            },
            { status: 500 }
        );
    }
}
