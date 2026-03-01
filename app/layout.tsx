import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VANTH — NFT Collection on Solana",
  description: "Vanth is a web3 focused project inspired by the best with an innovative and dynamic style. Anime + cyberpunk NFT collection on Solana.",
  openGraph: {
    title: "VANTH — NFT Collection on Solana",
    description: "Vanth is a web3 focused project inspired by the best with an innovative and dynamic style.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Banner background — subtle, fixed, behind everything */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            backgroundImage: "url('/images/gallery/banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.07,
          }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
