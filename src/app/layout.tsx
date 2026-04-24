import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Offshore Connections | Access Skilled Remote Talent from South Africa",
  description: "A powerful alternative to traditional hiring, giving UK businesses access to skilled remote talent from South Africa at a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}