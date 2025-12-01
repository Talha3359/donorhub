'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const type = searchParams.get('type');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading session details
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                    <p className="mt-4 text-gray-600">Confirming your payment...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-8">
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                    {/* Success Icon */}
                    <div className="mb-6">
                        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {type === 'donation' ? 'Thank You for Your Donation!' : 'Payment Successful!'}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        {type === 'donation'
                            ? 'Your generous contribution helps us continue our mission. A receipt has been sent to your email.'
                            : 'Your subscription has been activated. Welcome to DonorHub Premium!'}
                    </p>

                    {/* Session ID */}
                    {sessionId && (
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Transaction ID</p>
                            <p className="text-sm font-mono text-gray-700">{sessionId}</p>
                        </div>
                    )}

                    {/* Next Steps */}
                    <div className="space-y-4">
                        {type === 'donation' ? (
                            <>
                                <Link
                                    href="/"
                                    className="block w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-all"
                                >
                                    Return to Home
                                </Link>
                                <Link
                                    href="/donate"
                                    className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    Make Another Donation
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/admin"
                                    className="block w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-all"
                                >
                                    Go to Dashboard
                                </Link>
                                <Link
                                    href="/"
                                    className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    Return to Home
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
