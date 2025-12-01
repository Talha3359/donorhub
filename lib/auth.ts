import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export interface SessionPayload {
    userId: string;
    email: string;
    role: string;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

// Verify password
export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// Create JWT token
export async function createToken(payload: SessionPayload): Promise<string> {
    return new SignJWT(payload as unknown as import('jose').JWTPayload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(JWT_SECRET);
}

// Verify JWT token
export async function verifyToken(token: string): Promise<SessionPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as SessionPayload;
    } catch (error) {
        return null;
    }
}

// Get session from cookies
export async function getSession(): Promise<SessionPayload | null> {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token');

    if (!token) {
        return null;
    }

    return verifyToken(token.value);
}

// Set auth cookie
export async function setAuthCookie(token: string) {
    const cookieStore = cookies();
    cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
    });
}

// Clear auth cookie
export async function clearAuthCookie() {
    const cookieStore = cookies();
    cookieStore.delete('auth-token');
}

// Validate email format
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength
export function isValidPassword(password: string): boolean {
    // At least 8 characters, contains uppercase, lowercase, number, and special character
    return password.length >= 8;
}
