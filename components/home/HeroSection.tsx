'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const HeroSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="gradient-bg section-padding">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            {t('hero_title')}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {t('hero_subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" href="/signup" className="text-lg">
                                Get Started Free →
                            </Button>
                            <Button variant="outline" href="#demo" className="text-lg">
                                Watch Demo
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            ✓ No credit card required  ✓ Free forever  ✓ Set up in minutes
                        </p>
                    </div>

                    {/* Right Content - Hero Image/Illustration */}
                    <div className="animate-fade-in animation-delay-200">
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                                <div className="space-y-4">
                                    {/* Mock Dashboard */}
                                    <div className="flex items-center justify-between pb-4 border-b">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Total Raised</p>
                                                <p className="text-2xl font-bold text-gray-900">$127,450</p>
                                            </div>
                                        </div>
                                        <div className="text-green-600 text-sm font-semibold">↑ 23%</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">Active Donors</p>
                                            <p className="text-2xl font-bold text-primary-700">1,247</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">Campaigns</p>
                                            <p className="text-2xl font-bold text-secondary-700">12</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-600">Campaign Progress</span>
                                            <span className="text-sm font-semibold text-primary-600">78%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full" style={{ width: '78%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-bounce">
                                🎉 New Donation!
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="animate-fade-in animation-delay-200">
                            <p className="text-4xl font-bold text-primary-600 mb-2">100,000+</p>
                            <p className="text-gray-600">Nonprofits Worldwide</p>
                        </div>
                        <div className="animate-fade-in animation-delay-400">
                            <p className="text-4xl font-bold text-primary-600 mb-2">$3B+</p>
                            <p className="text-gray-600">Raised on Platform</p>
                        </div>
                        <div className="animate-fade-in animation-delay-600">
                            <p className="text-4xl font-bold text-primary-600 mb-2">99.99%</p>
                            <p className="text-gray-600">Uptime</p>
                        </div>
                        <div className="animate-fade-in animation-delay-600">
                            <p className="text-4xl font-bold text-primary-600 mb-2">4x</p>
                            <p className="text-gray-600">Faster Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
