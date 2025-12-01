import React from 'react';
import Button from '@/components/shared/Button';

export default function EventsPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Event Ticketing Simplified
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Launch an event online in under a minute with software that lightens your workload. Automatically generate tax-deductible receipts and manage attendees with ease.
                    </p>
                    <Button variant="primary" href="/signup">Create Your First Event</Button>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🎫</div>
                            <h3 className="text-xl font-bold mb-3">Unlimited Tickets</h3>
                            <p className="text-gray-600">Create as many ticket types as you need</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">📧</div>
                            <h3 className="text-xl font-bold mb-3">Auto Receipts</h3>
                            <p className="text-gray-600">Tax receipts sent automatically</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                            <p className="text-gray-600">Track sales and attendance live</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
