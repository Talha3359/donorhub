import React from 'react';
import Button from '@/components/shared/Button';

export default function WebinarsPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Webinars</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Learn from fundraising experts through our free webinar series
                    </p>
                    <Button variant="primary" href="/signup">Register for Upcoming Webinars</Button>
                </div>
            </section>
        </div>
    );
}
