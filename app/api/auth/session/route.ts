import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET() {
    try {
        const session = await getSession();

        if (!session) {
            return NextResponse.json(
                { user: null },
                { status: 401 }
            );
        }

        return NextResponse.json(
            {
                user: {
                    userId: session.userId,
                    email: session.email,
                    role: session.role,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Session check error:', error);
        return NextResponse.json(
            { user: null },
            { status: 500 }
        );
    }
}
