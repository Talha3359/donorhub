import React from 'react';
import Button from '@/components/shared/Button';

export default function DonationFormsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Donation Forms with 4x Faster Checkout
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Over 50% of donors drop off traditional donation forms. UltraSwift™ checkout reduces drop-off by requiring less personal info, so they can speed through checkouts.
                            </p>
                            <Button variant="primary" href="/signup">Get Started Free</Button>
                        </div>
                        <div className="bg-white rounded-2xl shadow-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Quick Donation Form</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 px-4 border-2 border-primary-600 bg-primary-50 rounded-lg font-semibold text-primary-600">$25</button>
                                    <button className="flex-1 py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold">$50</button>
                                    <button className="flex-1 py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold">$100</button>
                                </div>
                                <input type="email" placeholder="Email" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
                                <input type="text" placeholder="Name" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
                                <button className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors">
                                    Donate Now →
                                </button>
                                <p className="text-sm text-gray-500 text-center">🔒 Secure payment • 256-bit SSL encryption</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-12">Why DonorHub Forms Convert Better</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-3">4x Faster</h3>
                            <p className="text-gray-600">UltraSwift™ checkout completes in seconds, not minutes</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-xl font-bold mb-3">Mobile Optimized</h3>
                            <p className="text-gray-600">Perfect experience on any device</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold mb-3">Fully Customizable</h3>
                            <p className="text-gray-600">Match your brand perfectly</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
