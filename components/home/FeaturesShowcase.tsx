import React from 'react';
import Link from 'next/link';

const features = [
    {
        title: 'Donation Form',
        description: 'Raise more with a 4x faster checkout. UltraSwift™ checkout reduces drop-off by requiring less personal info.',
        icon: '💳',
        link: '/features/donation-forms',
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'CRM',
        description: 'Comprehensive CRM solutions - powered by AI. Maximize fundraising efficiency and boost donor engagement.',
        icon: '🤖',
        link: '/features/crm',
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'DonorHub Live™ Kiosk',
        description: 'Boost on-location donations. Ideal for events, churches, museums, and more.',
        icon: '🖥️',
        link: '/features/live-kiosk',
        color: 'from-green-500 to-green-600'
    },
    {
        title: 'Events',
        description: 'Event ticketing simplified. Launch an event online in under a minute with software that lightens your workload.',
        icon: '🎫',
        link: '/features/events',
        color: 'from-pink-500 to-pink-600'
    },
    {
        title: 'Jay·AI',
        description: 'Optimize your data analysis and communications. Pull donor data, craft targeted outreach materials.',
        icon: '✨',
        link: '/features/jay-ai',
        color: 'from-indigo-500 to-indigo-600'
    },
    {
        title: 'Donation Pages',
        description: 'Free. Customizable. Powerful. Create secure DonorHub-hosted donation pages tailored to your cause.',
        icon: '📄',
        link: '/features/donation-pages',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        title: 'Donor Portal with QuickDonate™',
        description: 'Make it easy for donors to give again. Get a branded Donor Portal automatically.',
        icon: '🚀',
        link: '/features/quick-donate',
        color: 'from-red-500 to-red-600'
    },
    {
        title: 'Membership',
        description: 'Build loyalty and long-term support. Enjoy more fruitful and meaningful relationships with donors.',
        icon: '👥',
        link: '/features/memberships',
        color: 'from-teal-500 to-teal-600'
    },
    {
        title: 'Crowdfunding',
        description: 'Community-focused, goal-driven, engaging fundraising. Create campaigns to drive donor engagement.',
        icon: '🎯',
        link: '/features/crowdfunding',
        color: 'from-orange-500 to-orange-600'
    },
    {
        title: 'Peer-to-Peer (P2P)',
        description: 'Let your supporters increase donations for you. Empower supporters to launch personalized campaign pages.',
        icon: '🤝',
        link: '/features/peer-to-peer',
        color: 'from-cyan-500 to-cyan-600'
    },
    {
        title: 'Donate Button',
        description: 'Make giving easy. Add a custom button to your site, emails, and social media.',
        icon: '🔘',
        link: '/features/donation-forms',
        color: 'from-lime-500 to-lime-600'
    },
    {
        title: 'Text-to-Give',
        description: 'Fast, easy, and repeatable giving. Text-to-Give lets supporters donate via simple text.',
        icon: '📱',
        link: '/features/text-to-give',
        color: 'from-violet-500 to-violet-600'
    },
];

const FeaturesShowcase: React.FC = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Powerful features made refreshingly easy to use
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to raise more donations, manage donors, and grow your nonprofit - all in one platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.link}
                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {feature.description}
                            </p>
                            <span className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                                Find out more
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesShowcase;
