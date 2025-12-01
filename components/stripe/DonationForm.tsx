'use client';

import React, { useState } from 'react';

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

export default function DonationForm() {
    const [amount, setAmount] = useState<number>(50);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [recurring, setRecurring] = useState(false);
    const [donorEmail, setDonorEmail] = useState('');
    const [donorName, setDonorName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePresetClick = (presetAmount: number) => {
        setAmount(presetAmount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomAmount(value);
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue > 0) {
            setAmount(numValue);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!donorEmail) {
            setError('Please enter your email');
            setLoading(false);
            return;
        }

        if (amount <= 0) {
            setError('Please enter a valid donation amount');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/stripe/create-donation-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    donorEmail,
                    donorName,
                    recurring,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create donation session');
            }

            // Redirect to Stripe Checkout using the URL
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (err: any) {
            console.error('Donation error:', err);
            setError(err.message || 'Something went wrong');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Make a Donation</h2>

            {/* Preset Amounts */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount</label>
                <div className="grid grid-cols-3 gap-3">
                    {PRESET_AMOUNTS.map((presetAmount) => (
                        <button
                            key={presetAmount}
                            type="button"
                            onClick={() => handlePresetClick(presetAmount)}
                            className={`py-3 px-4 rounded-lg font-semibold transition-all ${amount === presetAmount && !customAmount
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            ${presetAmount}
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount</label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
                    <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter custom amount"
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
                        min="1"
                        step="0.01"
                    />
                </div>
            </div>

            {/* Recurring Option */}
            <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={recurring}
                        onChange={(e) => setRecurring(e.target.checked)}
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                        Make this a monthly recurring donation
                    </span>
                </label>
            </div>

            {/* Donor Information */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email *</label>
                <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="your@email.com"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name (Optional)</label>
                <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="John Doe"
                />
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 bg-primary-600 text-white font-bold rounded-lg text-lg transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'
                    }`}
            >
                {loading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span>
                ) : (
                    `Donate $${amount.toFixed(2)}${recurring ? '/month' : ''}`
                )}
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
                Secure payment powered by Stripe
            </p>
        </form>
    );
}
