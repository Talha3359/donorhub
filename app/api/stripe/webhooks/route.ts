import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
    try {
        // Check if Stripe is configured
        if (!isStripeConfigured() || !stripe) {
            return NextResponse.json(
                { error: 'Webhook handler is not configured' },
                { status: 503 }
            );
        }

        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return NextResponse.json(
                { error: 'No signature provided' },
                { status: 400 }
            );
        }

        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!webhookSecret) {
            console.error('STRIPE_WEBHOOK_SECRET is not set');
            return NextResponse.json(
                { error: 'Webhook secret not configured' },
                { status: 500 }
            );
        }

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err: any) {
            console.error('Webhook signature verification failed:', err.message);
            return NextResponse.json(
                { error: `Webhook Error: ${err.message}` },
                { status: 400 }
            );
        }

        // Handle the event
        console.log('Received webhook event:', event.type);

        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session;
                console.log('Checkout session completed:', session.id);

                // TODO: Save subscription or donation to database
                // const { customer_email, metadata } = session;
                // await prisma.subscription.create({ ... });

                break;
            }

            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('PaymentIntent succeeded:', paymentIntent.id);

                // TODO: Update database with successful payment

                break;
            }

            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('PaymentIntent failed:', paymentIntent.id);

                // TODO: Handle failed payment

                break;
            }

            case 'customer.subscription.updated': {
                const subscription = event.data.object as Stripe.Subscription;
                console.log('Subscription updated:', subscription.id);

                // TODO: Update subscription in database

                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription;
                console.log('Subscription deleted:', subscription.id);

                // TODO: Mark subscription as cancelled in database

                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Webhook handler error:', error);
        return NextResponse.json(
            {
                error: error?.message || 'Webhook handler failed',
                type: error?.type || 'api_error'
            },
            { status: 500 }
        );
    }
}
