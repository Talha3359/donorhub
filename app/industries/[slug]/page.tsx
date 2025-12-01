import React from 'react';
import Button from '@/components/shared/Button';

const industries = [
    { slug: 'animal-welfare', title: 'Animal Welfare Fundraising', icon: '🐾', desc: 'Fundraising solutions for animal shelters, rescues, and wildlife conservation.' },
    { slug: 'arts-culture', title: 'Arts & Culture Fundraising', icon: '🎨', desc: 'Support for museums, theaters, and cultural organizations.' },
    { slug: 'education', title: 'Education Fundraising', icon: '🎓', desc: 'Tools for universities, schools, and educational nonprofits.' },
    { slug: 'islam', title: 'Islamic Charity Fundraising', icon: '🕌', desc: 'Fundraising for mosques and Islamic charitable organizations.' },
    { slug: 'judaism', title: 'Jewish Fundraising', icon: '✡️', desc: 'Solutions for synagogues and Jewish community organizations.' },
    { slug: 'journalism', title: 'Journalism Fundraising', icon: '📰', desc: 'Support independent journalism and news organizations.' },
    { slug: 'healthcare', title: 'Healthcare Fundraising', icon: '⚕️', desc: 'Fundraising for hospitals, medical research, and health nonprofits.' },
    { slug: 'politics', title: 'Political Fundraising', icon: '🗳️', desc: 'Campaign fundraising and political action committees.' },
    { slug: 'temples', title: 'Temple Fundraising', icon: '🛕', desc: 'Fundraising solutions for temples and religious organizations.' },
];

export default function IndustryPage({ params }: { params: { slug: string } }) {
    const industry = industries.find(i => i.slug === params.slug) || industries[0];

    return (
        <div className="min-h-screen">
            <section className="gradient-bg section-padding">
                <div className="container-custom text-center">
                    <div className="text-8xl mb-6">{industry.icon}</div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{industry.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{industry.desc}</p>
                    <Button variant="primary" href="/signup">Get Started Free</Button>
                </div>
            </section>
        </div>
    );
}
