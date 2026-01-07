import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ExpandableChat } from "@/components/ui/expandable-chat";
import { ExpandableChatDemo } from "@/components/AI";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vision and Path",
  description: "Vision and Path",
  keywords: ["vision", "path", "platform"],

  openGraph: {
    title: "Vision and Path",
    description: "Vision and Path",
    url: "https://visionandpath.com",
    siteName: "Vision and Path",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vision and Path Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <div className="h-150 relative">
        <ExpandableChatDemo />
        
        </div>
      </body>
    </html>
  );
}
