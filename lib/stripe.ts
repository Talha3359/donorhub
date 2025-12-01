import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

// Safely initialize Stripe - don't throw at module level
let stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

// In some dev setups on Windows, .env.local might not be loaded correctly by Next.
// As a fallback (dev only), try to read STRIPE_SECRET_KEY manually from .env.local
if (!stripeSecretKey && process.env.NODE_ENV !== 'production') {
    try {
        const envPath = path.join(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const raw = fs.readFileSync(envPath);

            // Try UTF-8 first
            let content = raw.toString('utf8');

            // If we don't see STRIPE_SECRET_KEY and the file looks like it has null bytes,
            // it might be UTF-16LE (common on Windows). In that case, decode as UTF-16LE.
            if (!content.includes('STRIPE_SECRET_KEY') && raw.includes(0)) {
                content = raw.toString('utf16le');
            }

            const line = content
                .split(/\r?\n/)
                .find((l) => l.trim().startsWith('STRIPE_SECRET_KEY='));

            if (line) {
                const value = line.split('=', 2)[1].trim();
                // Remove optional surrounding quotes
                stripeSecretKey = value.replace(/^"|"$/g, '');
            }
        }
    } catch (e) {
        // Silent fallback; we'll log below if still missing
    }
}

if (!stripeSecretKey) {
    console.error('WARNING: STRIPE_SECRET_KEY is not set in environment variables or .env.local');
}

// Initialize Stripe with secret key
// Let Stripe use the default API version configured for the account so we don't hard-code an invalid date.
export const stripe = stripeSecretKey
    ? new Stripe(stripeSecretKey, {
        typescript: true,
    })
    : null;

// Helper to check if Stripe is configured
export function isStripeConfigured(): boolean {
    return stripe !== null;
}

// Helper function to format amount for Stripe (convert to cents)
export function formatAmountForStripe(amount: number, currency: string): number {
    const numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    });
    const parts = numberFormat.formatToParts(amount);
    let zeroDecimalCurrency = true;
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false;
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

// Helper function to format amount from Stripe (convert from cents)
export function formatAmountFromStripe(amount: number, currency: string): number {
    const numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    });
    const parts = numberFormat.formatToParts(amount);
    let zeroDecimalCurrency = true;
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false;
        }
    }
    return zeroDecimalCurrency ? amount : amount / 100;
}
