import React from 'react';
import Button from '@/components/shared/Button';

export default function BlogPage() {
    const posts = [
        { title: '10 Fundraising Tips for 2025', category: 'Fundraising', date: 'Nov 28, 2025' },
        { title: 'How to Build a Donor Retention Strategy', category: 'Donor Management', date: 'Nov 25, 2025' },
        { title: 'The Power of Recurring Donations', category: 'Best Practices', date: 'Nov 20, 2025' },
        { title: 'Event Fundraising Success Stories', category: 'Case Studies', date: 'Nov 15, 2025' },
        { title: 'AI in Nonprofit Fundraising', category: 'Technology', date: 'Nov 10, 2025' },
        { title: 'Mobile Giving Trends', category: 'Trends', date: 'Nov 5, 2025' },
    ];

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">DonorHub Blog</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Expert insights, tips, and strategies for nonprofit fundraising success
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <article key={idx} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{post.category}</span>
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                                    <a href="#" className="text-primary-600 font-semibold hover:underline">Read more →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
