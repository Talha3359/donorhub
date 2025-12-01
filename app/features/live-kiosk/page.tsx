import React from 'react';
import Button from '@/components/shared/Button';

export default function LiveKioskPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        DonorHub Live™ Kiosk
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Boost on-location donations at events, churches, museums, and more. Provide a user-friendly, autonomous giving experience that encourages spontaneous donations.
                    </p>
                    <Button variant="primary" href="/signup">Get Started</Button>
                </div>
            </section>
        </div>
    );
}
