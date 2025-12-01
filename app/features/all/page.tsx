import React from 'react';
import Button from '@/components/shared/Button';

export default function AllFeaturesPage() {
    const features = [
        {
            category: 'Fundraising Tools',
            items: [
                { name: 'Donation Forms', description: '4x faster checkout with UltraSwift™ technology', link: '/features/donation-forms' },
                { name: 'Donation Pages', description: 'Free, customizable, and powerful hosted pages', link: '/features/donation-pages' },
                { name: 'Recurring Donations', description: 'Build sustainable monthly giving programs', link: '/features/recurring-donations' },
                { name: 'Peer-to-Peer', description: 'Empower supporters to fundraise for you', link: '/features/peer-to-peer' },
                { name: 'Crowdfunding', description: 'Goal-driven community fundraising campaigns', link: '/features/crowdfunding' },
                { name: 'Events', description: 'Simplified event ticketing and management', link: '/features/events' },
                { name: 'Memberships', description: 'Build loyalty with membership programs', link: '/features/memberships' },
                { name: 'Text-to-Give', description: 'Fast, easy mobile giving', link: '/features/text-to-give' },
            ]
        },
        {
            category: 'Donor Management',
            items: [
                { name: 'CRM', description: 'AI-powered donor relationship management', link: '/features/crm' },
                { name: 'Donor Management', description: 'Comprehensive donor tracking and engagement', link: '/features/donor-management' },
                { name: 'QuickDonate™ Portal', description: 'Branded portal for easy repeat giving', link: '/features/quick-donate' },
                { name: 'Jay·AI', description: 'AI-powered data analysis and communications', link: '/features/jay-ai' },
            ]
        },
        {
            category: 'On-Site Fundraising',
            items: [
                { name: 'DonorHub Live™ Kiosk', description: 'Boost on-location donations', link: '/features/live-kiosk' },
                { name: 'Tap to Donate', description: 'Contactless giving made simple', link: '/features/tap-to-donate' },
            ]
        },
        {
            category: 'Integration & Tools',
            items: [
                { name: 'Integrations', description: 'Connect with your favorite apps', link: '/features/integrations' },
            ]
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        All Features
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Everything you need to raise more donations, manage donors, and grow your nonprofit - all in one powerful platform.
                    </p>
                    <Button variant="primary" href="/signup">
                        Start Free Trial
                    </Button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {features.map((category, idx) => (
                        <div key={idx} className="mb-16 last:mb-0">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary-200">
                                {category.category}
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={item.link}
                                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <span className="text-primary-600 font-semibold inline-flex items-center">
                                            Learn more
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to unlock all features?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Start your free trial today and see how DonorHub can transform your fundraising.
                    </p>
                    <Button variant="secondary" href="/signup">
                        Get Started Free
                    </Button>
                </div>
            </section>
        </div>
    );
}
