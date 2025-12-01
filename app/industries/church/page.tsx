import React from 'react';
import Button from '@/components/shared/Button';

export default function ChurchFundraisingPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Church Fundraising & Donation Software
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Empower your congregation to give easily with online donations, text-to-give, and in-person kiosk options. Perfect for tithes, offerings, and special campaigns.
                            </p>
                            <Button variant="primary" href="/signup">Start Free Trial</Button>
                        </div>
                        <div className="text-6xl text-center">⛪</div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-12">Features for Churches</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">💳</div>
                            <h3 className="text-xl font-bold mb-3">Online Giving</h3>
                            <p className="text-gray-600">Accept tithes and offerings 24/7</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-xl font-bold mb-3">Text-to-Give</h3>
                            <p className="text-gray-600">Simple mobile donations</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🖥️</div>
                            <h3 className="text-xl font-bold mb-3">Kiosk Giving</h3>
                            <p className="text-gray-600">In-person donation stations</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
