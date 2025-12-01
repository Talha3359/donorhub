import React from 'react';
import Button from '@/components/shared/Button';

const pages = [
    { title: 'Donation Pages', desc: 'Free, customizable, and powerful donation pages tailored to your cause.' },
    { title: 'Recurring Donations', desc: 'Build sustainable monthly giving programs.' },
    { title: 'Peer-to-Peer', desc: 'Empower supporters to launch personalized campaign pages.' },
    { title: 'Donor Management', desc: 'Comprehensive donor tracking and engagement tools.' },
    { title: 'Memberships', desc: 'Build loyalty and long-term support with membership programs.' },
    { title: 'Text-to-Give', desc: 'Fast, easy, and repeatable mobile giving.' },
    { title: 'Crowdfunding', desc: 'Community-focused, goal-driven fundraising campaigns.' },
    { title: 'Tap to Donate', desc: 'Contactless giving made simple.' },
];

export default function FeaturePage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const pageData = pages.find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug) || pages[0];

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{pageData.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{pageData.desc}</p>
                    <Button variant="primary" href="/signup">Get Started Free</Button>
                </div>
            </section>
        </div>
    );
}
