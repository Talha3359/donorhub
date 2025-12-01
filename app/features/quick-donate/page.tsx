import React from 'react';
import Button from '@/components/shared/Button';

export default function QuickDonatePage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">QuickDonate™ Donor Portal</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Make it easy for donors to give again. Get a branded Donor Portal automatically where supporters can manage donations, view history, and give with QuickDonate™.
                    </p>
                    <Button variant="primary" href="/signup">Get Started</Button>
                </div>
            </section>
        </div>
    );
}
