import HeroSection from '@/components/home/HeroSection';
import FeaturesShowcase from '@/components/home/FeaturesShowcase';
import HowItWorks from '@/components/home/HowItWorks';
import IndustrySelector from '@/components/home/IndustrySelector';
import Button from '@/components/shared/Button';

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesShowcase />

            {/* Social Proof Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        100,000+ nonprofits worldwide have raised $3B with DonorHub
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Join thousands of organizations using DonorHub to power their fundraising
                    </p>

                    {/* Testimonial Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                &quot;DonorHub has transformed our fundraising. The ease of use and powerful features have helped us raise 3x more than before.&quot;
                            </p>
                            <p className="font-semibold text-gray-900">- Sarah Johnson</p>
                            <p className="text-sm text-gray-500">Hope Foundation</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                &quot;The AI-powered CRM is a game-changer. We can now manage our donors more effectively and see real results.&quot;
                            </p>
                            <p className="font-semibold text-gray-900">- Michael Chen</p>
                            <p className="text-sm text-gray-500">Community Outreach Center</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                &quot;Simple, powerful, and effective. DonorHub has everything we need to run successful campaigns.&quot;
                            </p>
                            <p className="font-semibold text-gray-900">- Emily Rodriguez</p>
                            <p className="text-sm text-gray-500">Wildlife Conservation Society</p>
                        </div>
                    </div>
                </div>
            </section>

            <HowItWorks />
            <IndustrySelector />

            {/* Security Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Security that never sleeps, so you can rest easy.
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                You shouldn&apos;t have to worry about scammers stealing your donors&apos; personally identifiable
                                information and credit card data. We&apos;ve got you covered with industry-leading security.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">PCI DSS Level 1 Certified</h4>
                                        <p className="text-gray-600">The highest level of payment security certification</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">256-bit SSL Encryption</h4>
                                        <p className="text-gray-600">Bank-level encryption for all transactions</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">99.99% Uptime</h4>
                                        <p className="text-gray-600">Always available when your donors want to give</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button variant="outline" href="/security">
                                    Learn More About Security
                                </Button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12 text-center">
                            <div className="text-8xl mb-6">🔒</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your data is safe with us</h3>
                            <p className="text-gray-600">
                                We use the same security standards as major financial institutions to protect your information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to amplify your impact?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join 100,000+ nonprofits using DonorHub to raise more donations and build lasting relationships with donors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" href="/signup" className="text-lg">
                            Start Free Trial
                        </Button>
                        <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border-2 border-white text-lg">
                            Schedule a Demo
                        </button>
                    </div>
                    <p className="mt-6 text-sm opacity-75">
                        No credit card required • Free forever • Cancel anytime
                    </p>
                </div>
            </section>
        </>
    );
}
