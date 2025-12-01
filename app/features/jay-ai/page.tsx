import React from 'react';
import Button from '@/components/shared/Button';

export default function JayAIPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Jay·AI - Your AI Fundraising Assistant
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Optimize your data analysis and communications with AI. Pull donor data, craft targeted outreach materials, and refine fundraising strategies instantly.
                    </p>
                    <Button variant="primary" href="/signup">Try Jay·AI Free</Button>
                </div>
            </section>
        </div>
    );
}
