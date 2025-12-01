import React from 'react';
import Button from '@/components/shared/Button';

export default function IntegrationsPage() {
    const integrations = [
        { name: 'Salesforce', category: 'CRM', logo: '☁️' },
        { name: 'Mailchimp', category: 'Email', logo: '📧' },
        { name: 'QuickBooks', category: 'Accounting', logo: '💰' },
        { name: 'Zapier', category: 'Automation', logo: '⚡' },
        { name: 'Slack', category: 'Communication', logo: '💬' },
        { name: 'WordPress', category: 'Website', logo: '🌐' },
        { name: 'Google Analytics', category: 'Analytics', logo: '📊' },
        { name: 'Stripe', category: 'Payment', logo: '💳' },
    ];

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Integrations
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Connect DonorHub with your favorite apps and tools. Seamlessly integrate with the platforms you already use.
                    </p>
                    <Button variant="primary" href="/signup">Explore Integrations</Button>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-6">
                        {integrations.map((integration, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary-500 hover:shadow-lg transition-all">
                                <div className="text-5xl mb-3">{integration.logo}</div>
                                <h3 className="font-bold text-lg mb-1">{integration.name}</h3>
                                <p className="text-sm text-gray-500">{integration.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
