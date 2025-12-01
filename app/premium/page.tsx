import React from 'react';
import Button from '@/components/shared/Button';

export default function PremiumPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Premium Features</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Unlock the full potential of DonorHub with premium features designed for growing nonprofits
                    </p>
                    <Button variant="primary" href="/contact">Contact Sales</Button>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Premium Software', desc: 'Automate manual tasks and maximize fundraising efforts', icon: '⚡' },
                            { title: 'Account Ambassador', desc: 'Dedicated support to help you succeed', icon: '👤' },
                            { title: 'Fundraising Coach', desc: 'Personalized coaching and strategy', icon: '🎓' },
                            { title: 'Priority Tech Support', desc: 'Industry-leading support speed', icon: '🔧' },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="text-5xl">{feature.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
