import React from 'react';
import Button from '@/components/shared/Button';

export default function GuidesPage() {
    const guides = [
        { title: 'Complete Fundraising Guide', type: 'PDF', pages: '45 pages' },
        { title: 'Donor Retention Checklist', type: 'Checklist', pages: '1 page' },
        { title: 'Email Campaign Templates', type: 'Templates', pages: '10 templates' },
        { title: 'Social Media Strategy Guide', type: 'PDF', pages: '30 pages' },
        { title: 'Event Planning Workbook', type: 'Workbook', pages: '25 pages' },
        { title: 'Grant Writing Templates', type: 'Templates', pages: '5 templates' },
    ];

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Guides & Templates</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Free resources to help you succeed in your fundraising efforts
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guides.map((guide, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
                                <div className="text-4xl mb-4">📄</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span>{guide.type}</span>
                                    <span>•</span>
                                    <span>{guide.pages}</span>
                                </div>
                                <Button variant="outline" className="w-full">Download Free</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
