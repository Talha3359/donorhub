'use client';

import React, { useState } from 'react';

interface CheckoutButtonProps {
    priceId?: string;
    planName: string;
    amount?: number;
    mode?: 'subscription' | 'donation';
    className?: string;
    children: React.ReactNode;
}

export default function CheckoutButton({
    priceId,
    planName,
    amount,
    mode = 'subscription',
    className = '',
    children,
}: CheckoutButtonProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const endpoint = mode === 'donation'
                ? '/api/stripe/create-donation-session'
                : '/api/stripe/create-checkout-session';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId,
                    planName,
                    amount,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create checkout session');
            }

            // Redirect to Stripe Checkout using the URL
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (err: any) {
            console.error('Checkout error:', err);
            setError(err.message || 'Something went wrong');
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleCheckout}
                disabled={loading}
                className={`${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span>
                ) : (
                    children
                )}
            </button>
            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
