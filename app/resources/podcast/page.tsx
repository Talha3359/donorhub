import React from 'react';
import Button from '@/components/shared/Button';

export default function PodcastPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">The Nonprofit Podcast</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Conversations with nonprofit leaders and fundraising experts
                    </p>
                    <Button variant="primary" href="#">Listen Now</Button>
                </div>
            </section>
        </div>
    );
}
