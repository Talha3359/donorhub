import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
    if (!stripePromise) {
        const key = process.env.NEXT_PUBLIC_STRIPE_PK;
        stripePromise = key ? loadStripe(key) : Promise.resolve(null);
    }
    return stripePromise;
};
