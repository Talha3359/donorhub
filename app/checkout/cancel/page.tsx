import React from 'react';
import Link from 'next/link';

export default function CheckoutCancelPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-8">
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                    {/* Cancel Icon */}
                    <div className="mb-6">
                        <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>

                    {/* Cancel Message */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Payment Cancelled
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Your payment was cancelled. No charges were made to your account.
                    </p>

                    {/* Actions */}
                    <div className="space-y-4">
                        <Link
                            href="/pricing"
                            className="block w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-all"
                        >
                            View Pricing Plans
                        </Link>
                        <Link
                            href="/"
                            className="block w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all"
                        >
                            Return to Home
                        </Link>
                    </div>

                    {/* Help Text */}
                    <p className="mt-8 text-sm text-gray-500">
                        Need help? <Link href="/contact" className="text-primary-600 hover:underline">Contact our support team</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
