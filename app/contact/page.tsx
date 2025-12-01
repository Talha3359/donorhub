import React from 'react';
import Button from '@/components/shared/Button';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
                        <p className="text-xl text-gray-600 mb-12 text-center">
                            Have questions? We&apos;re here to help!
                        </p>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                                    <input type="text" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea rows={5} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"></textarea>
                                </div>
                                <Button variant="primary" className="w-full">Send Message</Button>
                            </form>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <div className="text-4xl mb-3">📧</div>
                                <h3 className="font-bold mb-2">Email</h3>
                                <p className="text-gray-600">support@donorhub.com</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">📞</div>
                                <h3 className="font-bold mb-2">Phone</h3>
                                <p className="text-gray-600">1-800-DONORHUB</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">💬</div>
                                <h3 className="font-bold mb-2">Live Chat</h3>
                                <p className="text-gray-600">Available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
