'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const industries = [
    { name: 'Churches', icon: '⛪', link: '/industries/church', color: 'bg-blue-500' },
    { name: 'Universities', icon: '🎓', link: '/industries/education', color: 'bg-purple-500' },
    { name: 'Animals', icon: '🐾', link: '/industries/animal-welfare', color: 'bg-green-500' },
    { name: 'Nonprofits', icon: '🤲', link: '/industries/nonprofits', color: 'bg-pink-500' },
    { name: 'Journalism', icon: '📰', link: '/industries/journalism', color: 'bg-yellow-500' },
    { name: 'Arts', icon: '🎨', link: '/industries/arts-culture', color: 'bg-red-500' },
    { name: 'Political', icon: '🗳️', link: '/industries/politics', color: 'bg-indigo-500' },
    { name: 'Medical', icon: '⚕️', link: '/industries/healthcare', color: 'bg-teal-500' },
];

const IndustrySelector: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Click on your industry
                    </h2>
                    <p className="text-xl text-gray-600">
                        Tailored solutions for every sector
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            href={industry.link}
                            className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${activeIndustry === index ? 'ring-4 ring-primary-500' : ''
                                }`}
                            onMouseEnter={() => setActiveIndustry(index)}
                        >
                            <div className={`absolute inset-0 ${industry.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                            <div className="relative">
                                <div className="text-6xl mb-4">{industry.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                                    {industry.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        Trusted by organizations of all sizes across every industry
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                            ✓ Houses of Worship
                        </div>
                        <div className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                            ✓ Educational Institutions
                        </div>
                        <div className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                            ✓ Social Services
                        </div>
                        <div className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                            ✓ Cultural Organizations
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySelector;
