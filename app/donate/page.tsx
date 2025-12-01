'use client';

import React from 'react';
import DonationForm from '@/components/stripe/DonationForm';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function DonatePage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('donate_title')}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        {t('donate_subtitle')}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <DonationForm />

                    {/* Impact Section */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl mb-3">💝</div>
                            <h3 className="font-bold text-lg mb-2">Make an Impact</h3>
                            <p className="text-gray-600 text-sm">
                                Your donation directly supports our programs and initiatives
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🔒</div>
                            <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                            <p className="text-gray-600 text-sm">
                                All transactions are encrypted and secure via Stripe
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">📧</div>
                            <h3 className="font-bold text-lg mb-2">Tax Receipt</h3>
                            <p className="text-gray-600 text-sm">
                                Receive an email receipt for your tax-deductible donation
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
