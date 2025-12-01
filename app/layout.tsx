import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/shared/Footer";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "DonorHub - #1 Donation Software & Nonprofit Fundraising Suite",
    description: "Our all-in-one donation software powers online fundraising & donor relationship management with AI-powered CRM. Free online platform to create donate button & pages and receive donations with ease.",
    keywords: ["donation software", "nonprofit fundraising", "donor management", "CRM", "online donations"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans">
                <LanguageProvider>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
