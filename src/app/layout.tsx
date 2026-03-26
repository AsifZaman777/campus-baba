import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CampusBaba | All-in-One School Management System & ERP",
    description: "CampusBaba is a futuristic school management platform bridging the gap between parents, teachers, and administration. Features include real-time attendance, fee tracking, and automated academic reporting.",
    keywords: ["school management system", "ERP for schools", "parent-teacher communication app", "automated attendance tracking", "school fee management", "student performance analytics"],
    authors: [{ name: "CampusBaba Team" }],
    openGraph: {
        title: "CampusBaba | Revolutionizing School Management",
        description: "The most advanced digital ecosystem for modern educational institutions.",
        url: "https://campusbaba.com",
        siteName: "CampusBaba",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "CampusBaba Platform Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CampusBaba | Futuristic School Management",
        description: "Connecting parents, teachers, and admins through a unified digital ecosystem.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "your-google-verification-code", // Placeholder for user to fill
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${geist.variable} ${geistMono.variable} antialiased bg-white`}
            >
                {children}
            </body>
        </html>
    );
}
