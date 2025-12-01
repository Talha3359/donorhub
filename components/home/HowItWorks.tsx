import React from 'react';
import Button from '@/components/shared/Button';

const HowItWorks: React.FC = () => {
    return (
        <section className="section-padding gradient-bg">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Here&apos;s what it&apos;s like to use DonorHub
                    </h2>
                    <p className="text-xl text-gray-600">
                        From getting started to supercharging your fundraising
                    </p>
                </div>

                {/* Starting Out */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                            1
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Starting out</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">Looking to achieve growth and sustainability? It all starts here.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🎨</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Create your campaign</h4>
                            <p className="text-gray-600 mb-4">
                                Offer a highly enjoyable checkout experience for your donors. Simply sign up and you&apos;ll be walked through the process.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Launch your campaign</h4>
                            <p className="text-gray-600 mb-4">
                                Get your mission in front of more people. Copy and paste your form onto your website, emails, or social media.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">💰</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Receive your donations</h4>
                            <p className="text-gray-600 mb-4">
                                Securely receive online donations automatically. Connect PayPal or Stripe and accept donations directly.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Button variant="primary" href="/signup">
                            Get Started →
                        </Button>
                    </div>
                </div>

                {/* Stepping It Up */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-secondary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                            2
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Stepping it up</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">You&apos;re an established nonprofit looking to take it to the next level.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🔗</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Integrate your apps</h4>
                            <p className="text-gray-600 mb-4">
                                We&apos;re here to make transitioning to our platform as smooth and seamless as possible.
                            </p>
                            <a href="/features/integrations" className="text-primary-600 font-semibold hover:underline">
                                Learn more →
                            </a>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Connect with your donors</h4>
                            <p className="text-gray-600 mb-4">
                                Simplify your donor relationship management with our AI Powered CRM.
                            </p>
                            <a href="/features/donor-management" className="text-primary-600 font-semibold hover:underline">
                                Learn more →
                            </a>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🛠️</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Expand your toolkit</h4>
                            <p className="text-gray-600 mb-4">
                                Stand out from the crowd with nearly every advanced fundraising feature on one platform.
                            </p>
                            <a href="/features/all" className="text-primary-600 font-semibold hover:underline">
                                Learn more →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Supercharging */}
                <div>
                    <div className="flex items-center mb-8">
                        <div className="bg-accent-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                            3
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Supercharging your fundraising</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">Elevate your nonprofit to its ultimate potential.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">⚡</div>
                            <h4 className="text-xl font-bold mb-3">Premium Software</h4>
                            <p className="text-sm opacity-90">
                                Automate manual tasks, reach more supporters, and maximize your fundraising efforts.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">👤</div>
                            <h4 className="text-xl font-bold mb-3">Account Ambassador</h4>
                            <p className="text-sm opacity-90">
                                Enjoy dedicated customer support with highly personalized service.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🎓</div>
                            <h4 className="text-xl font-bold mb-3">Fundraising Coach</h4>
                            <p className="text-sm opacity-90">
                                Win the fight for sustainability with personalized coaching strategy.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🔧</div>
                            <h4 className="text-xl font-bold mb-3">Priority Tech Support</h4>
                            <p className="text-sm opacity-90">
                                Our tech wizards will guide you through setup with industry-leading speed.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Button variant="primary" href="/premium">
                            Unlock Premium Features
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
