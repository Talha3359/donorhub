'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/components/i18n/LanguageProvider';

interface UserSession {
    userId: string;
    email: string;
    role: string;
}


const Navbar: React.FC = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [user, setUser] = useState<UserSession | null>(null);
    const [loading, setLoading] = useState(true);
    const { language, setLanguage, languages } = useLanguage();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/session');
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            setUser(null);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const currentLanguage = languages.find((l) => l.code === language) || languages[0];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Banner */}
            <div className="bg-primary-600 text-white text-center py-2 px-4 text-sm">
                See for yourself how easy fundraising can be with DonorHub.{' '}
                <a href="#demo" className="underline font-semibold hover:text-primary-100">
                    Watch the Demo now
                </a>
            </div>

            {/* Main Navigation */}
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/logo.png"
                            alt="DonorHub Logo"
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Platform Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                                onMouseEnter={() => setActiveDropdown('platform')}
                            >
                                <span>Platform</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeDropdown === 'platform' && (
                                <div
                                    className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6"
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Fundraising Features</h3>
                                        <ul className="space-y-2">
                                            <li><Link href="/features/all" className="block text-gray-700 hover:text-primary-600 transition-colors">All features</Link></li>
                                            <li><Link href="/features/quick-donate" className="block text-gray-700 hover:text-primary-600 transition-colors">QuickDonate™ Donor Portal</Link></li>
                                            <li><Link href="/features/donation-forms" className="block text-gray-700 hover:text-primary-600 transition-colors">Donation Forms</Link></li>
                                            <li><Link href="/features/events" className="block text-gray-700 hover:text-primary-600 transition-colors">Events</Link></li>
                                            <li><Link href="/features/donation-pages" className="block text-gray-700 hover:text-primary-600 transition-colors">Donation Pages</Link></li>
                                            <li><Link href="/features/recurring-donations" className="block text-gray-700 hover:text-primary-600 transition-colors">Recurring Donations</Link></li>
                                            <li><Link href="/features/peer-to-peer" className="block text-gray-700 hover:text-primary-600 transition-colors">Peer-to-Peer</Link></li>
                                            <li><Link href="/features/donor-management" className="block text-gray-700 hover:text-primary-600 transition-colors">Donor Management</Link></li>
                                            <li><Link href="/features/memberships" className="block text-gray-700 hover:text-primary-600 transition-colors">Memberships</Link></li>
                                            <li><Link href="/features/text-to-give" className="block text-gray-700 hover:text-primary-600 transition-colors">Text-to-Give</Link></li>
                                            <li><Link href="/features/crowdfunding" className="block text-gray-700 hover:text-primary-600 transition-colors">Crowdfunding</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Product</h3>
                                        <ul className="space-y-2">
                                            <li><Link href="/features/crm" className="block text-gray-700 hover:text-primary-600 transition-colors">CRM</Link></li>
                                            <li><Link href="/features/live-kiosk" className="block text-gray-700 hover:text-primary-600 transition-colors">DonorHub Live™ Kiosk</Link></li>
                                            <li><Link href="/features/tap-to-donate" className="block text-gray-700 hover:text-primary-600 transition-colors">Tap to Donate</Link></li>
                                            <li><Link href="/features/jay-ai" className="block text-gray-700 hover:text-primary-600 transition-colors">Jay·AI</Link></li>
                                            <li><Link href="/features/integrations" className="block text-gray-700 hover:text-primary-600 transition-colors">Integrations</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                                onMouseEnter={() => setActiveDropdown('resources')}
                            >
                                <span>Resources</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeDropdown === 'resources' && (
                                <div
                                    className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6"
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Learn</h3>
                                        <ul className="space-y-2">
                                            <li><Link href="/resources/blog" className="block text-gray-700 hover:text-primary-600 transition-colors">Blog</Link></li>
                                            <li><Link href="/resources/guides" className="block text-gray-700 hover:text-primary-600 transition-colors">Guides & Templates</Link></li>
                                            <li><Link href="/resources/webinars" className="block text-gray-700 hover:text-primary-600 transition-colors">Webinars</Link></li>
                                            <li><Link href="/resources/case-studies" className="block text-gray-700 hover:text-primary-600 transition-colors">Case Studies</Link></li>
                                            <li><Link href="/resources/podcast" className="block text-gray-700 hover:text-primary-600 transition-colors">Podcast</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">DonorHub for</h3>
                                        <ul className="space-y-2">
                                            <li><Link href="/industries/animal-welfare" className="block text-gray-700 hover:text-primary-600 transition-colors">Animal Welfare</Link></li>
                                            <li><Link href="/industries/arts-culture" className="block text-gray-700 hover:text-primary-600 transition-colors">Arts & Culture</Link></li>
                                            <li><Link href="/industries/church" className="block text-gray-700 hover:text-primary-600 transition-colors">Christianity</Link></li>
                                            <li><Link href="/industries/education" className="block text-gray-700 hover:text-primary-600 transition-colors">Education</Link></li>
                                            <li><Link href="/industries/islam" className="block text-gray-700 hover:text-primary-600 transition-colors">Islam</Link></li>
                                            <li><Link href="/industries/judaism" className="block text-gray-700 hover:text-primary-600 transition-colors">Judaism</Link></li>
                                            <li><Link href="/industries/journalism" className="block text-gray-700 hover:text-primary-600 transition-colors">Journalism</Link></li>
                                            <li><Link href="/industries/healthcare" className="block text-gray-700 hover:text-primary-600 transition-colors">Healthcare</Link></li>
                                            <li><Link href="/industries/politics" className="block text-gray-700 hover:text-primary-600 transition-colors">Politics</Link></li>
                                            <li><Link href="/industries/temples" className="block text-gray-700 hover:text-primary-600 transition-colors">Temples</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pricing Link */}
                        <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Pricing
                        </Link>

                        {/* Admin Portal Link */}
                        <Link href="/admin/login" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Admin</span>
                        </Link>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Language selector */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => toggleDropdown('language')}
                                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                            >
                                <span className="text-sm">{currentLanguage.label}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'language' && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            type="button"
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setActiveDropdown(null);
                                            }}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${lang.code === language ? 'text-primary-600 font-semibold' : 'text-gray-700'
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {!loading && (
                            <>
                                {user ? (
                                    <>
                                        <span className="text-gray-600 text-sm">
                                            {user.email}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                            Login
                                        </Link>
                                        <Button href="/signup" variant="primary">
                                            Sign Up Free
                                        </Button>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-primary-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <div className="space-y-4">
                            {/* Language selector (mobile) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Language</label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as any)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Platform Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown('platform')}
                                    className="flex items-center justify-between w-full text-gray-700 font-medium"
                                >
                                    <span>Platform</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {activeDropdown === 'platform' && (
                                    <div className="mt-2 ml-4 space-y-2">
                                        <Link href="/features/all" className="block text-gray-600 hover:text-primary-600">All features</Link>
                                        <Link href="/features/donation-forms" className="block text-gray-600 hover:text-primary-600">Donation Forms</Link>
                                        <Link href="/features/crm" className="block text-gray-600 hover:text-primary-600">CRM</Link>
                                        <Link href="/features/events" className="block text-gray-600 hover:text-primary-600">Events</Link>
                                    </div>
                                )}
                            </div>

                            {/* Resources Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown('resources')}
                                    className="flex items-center justify-between w-full text-gray-700 font-medium"
                                >
                                    <span>Resources</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {activeDropdown === 'resources' && (
                                    <div className="mt-2 ml-4 space-y-2">
                                        <Link href="/resources/blog" className="block text-gray-600 hover:text-primary-600">Blog</Link>
                                        <Link href="/resources/guides" className="block text-gray-600 hover:text-primary-600">Guides & Templates</Link>
                                        <Link href="/resources/webinars" className="block text-gray-600 hover:text-primary-600">Webinars</Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/pricing" className="block text-gray-700 font-medium">Pricing</Link>
                            <Link href="/admin/login" className="block text-gray-700 font-medium flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Admin Portal</span>
                            </Link>

                            {!loading && (
                                <>
                                    {user ? (
                                        <>
                                            <div className="pt-2 border-t border-gray-200">
                                                <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full text-left text-gray-700 font-medium"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login" className="block text-gray-700 font-medium">Login</Link>
                                            <Button href="/signup" variant="primary" className="w-full">Sign Up Free</Button>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
