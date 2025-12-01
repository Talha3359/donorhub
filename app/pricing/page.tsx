'use client';

import React from 'react';
import CheckoutButton from '@/components/stripe/CheckoutButton';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function PricingPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('pricing_title')}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        {t('pricing_subtitle')}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Plan */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                            <h3 className="text-2xl font-bold mb-4">Free</h3>
                            <div className="text-4xl font-bold text-gray-900 mb-6">
                                $0<span className="text-lg text-gray-500">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-left">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Unlimited donation forms</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Basic CRM</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>1.5% platform fee</span>
                                </li>
                            </ul>
                            <Button
                                href="/login"
                                variant="outline"
                                className="w-full border-2 border-primary-600 text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-all duration-200"
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Standard Plan */}
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-2xl p-8 text-white transform scale-105 border-4 border-primary-400">
                            <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Standard</h3>
                            <div className="text-4xl font-bold mb-6">
                                $99<span className="text-lg opacity-75">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-left">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Everything in Free</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Advanced CRM with AI</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>0.99% platform fee</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Priority support</span>
                                </li>
                            </ul>
                            <CheckoutButton
                                priceId="price_standard_monthly"
                                planName="Standard"
                                className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-200"
                            >
                                Get Started
                            </CheckoutButton>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                            <h3 className="text-2xl font-bold mb-4">Premium</h3>
                            <div className="text-4xl font-bold text-gray-900 mb-6">
                                $199<span className="text-lg text-gray-500">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-left">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Everything in Standard</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Account Ambassador</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fundraising Coach</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Custom pricing</span>
                                </li>
                            </ul>
                            <CheckoutButton
                                priceId="price_premium_monthly"
                                planName="Premium"
                                className="w-full border-2 border-primary-600 text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-all duration-200"
                            >
                                Get Started
                            </CheckoutButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
