import React from 'react';

export default function SecurityPage() {
    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <div className="text-8xl mb-6">🔒</div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Security & Compliance</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your data security is our top priority. We use industry-leading security measures to protect your information.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🛡️ PCI DSS Level 1 Certified</h3>
                            <p className="text-gray-700">
                                The highest level of payment card industry security certification, ensuring your donors&apos; payment information is always protected.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔐 256-bit SSL Encryption</h3>
                            <p className="text-gray-700">
                                Bank-level encryption for all data transmission, protecting sensitive information from unauthorized access.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ 99.99% Uptime</h3>
                            <p className="text-gray-700">
                                Reliable infrastructure ensures your donation forms are always available when your donors want to give.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Regular Security Audits</h3>
                            <p className="text-gray-700">
                                Continuous monitoring and regular third-party security audits to maintain the highest security standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
