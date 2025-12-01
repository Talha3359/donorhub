'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/admin/users');

                if (response.status === 401) {
                    router.push('/admin/login');
                    return;
                }

                if (response.status === 403) {
                    setError('Access denied. Admin privileges required.');
                    setLoading(false);
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                setUsers(data.users);
                setLoading(false);
            } catch (err) {
                setError('Failed to load user data');
                setLoading(false);
            }
        };

        fetchUsers();
    }, [router]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                        {error}
                    </div>
                    <Link href="/" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
                        Return to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/admin-logo.png"
                                alt="Admin"
                                width={50}
                                height={50}
                                className="rounded-lg"
                            />
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                                <p className="mt-1 text-sm text-gray-600">Manage users and monitor activity</p>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Users</p>
                                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Regular Users</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {users.filter(u => u.role === 'USER').length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3">
                                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Admins</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {users.filter(u => u.role === 'ADMIN').length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">User Records</h2>
                        <p className="mt-1 text-sm text-gray-600">A list of all registered users</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Registered
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <span className="text-primary-600 font-medium text-sm">
                                                        {user.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'ADMIN'
                                                ? 'bg-purple-100 text-purple-800'
                                                : 'bg-green-100 text-green-800'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(user.createdAt)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {users.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No users</h3>
                            <p className="mt-1 text-sm text-gray-500">Get started by creating a new user account.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
