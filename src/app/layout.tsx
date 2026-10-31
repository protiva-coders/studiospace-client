import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "StudioSpace | Creative Studio Marketplace",
description:
"Discover, explore and book creative studios for photography, music, podcasts and production.",
};

export default function RootLayout({
children,
}: {
children: ReactNode;
}) {
return (
<html
lang="en"
suppressHydrationWarning
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> <body className="flex min-h-full flex-col"> <ThemeProvider> <Navbar /> <main className="flex-1">{children}</main> <Footer /> <Toaster richColors position="top-right" /> </ThemeProvider> </body> </html>
);
}
