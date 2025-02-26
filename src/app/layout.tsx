import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";

import Header from "@/components/Header";
import { ThemeProvider } from "@/feature/theme/theme-provider";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
	variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "投稿一覧",
    description: "投稿一覧のページです。",
    other: {
        "google-site-verification": "UDkFUsK-bY3rLdAZ_xvPBC9oyY9ZngUZNA94fgJ2bcc",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-base`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    // defaultTheme="system"
                    // enableSystem
                    disableTransitionOnChange
                    storageKey="acme-theme"
                >
                    <Header />
                    <main className="flex gap-8 pt-20 px-12  justify-between">
                        <div className="flex justify-center w-full">
                            {children}
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Sidebar/>
                        </Suspense>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
