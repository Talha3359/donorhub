import React from 'react';
import Button from '@/components/shared/Button';

export default function CRMPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        AI-Powered Nonprofit CRM
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Maximize fundraising efficiency and boost donor engagement with integrated email management, dynamic segmentation, action tracking, and much more.
                    </p>
                    <Button variant="primary" href="/signup">Start Free Trial</Button>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Contact Management', 'Email Campaigns', 'Donor Segmentation', 'Analytics & Reports', 'Task Automation', 'Jay·AI Integration', 'Custom Fields', 'Activity Tracking'].map((feature, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-100">
                                <h3 className="font-bold text-lg mb-2">{feature}</h3>
                                <p className="text-gray-600 text-sm">Powerful tools to manage your donor relationships</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
