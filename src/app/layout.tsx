import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://offshoreconnections.co.uk"), // Replace with actual domain when known
  title: {
    default: "Offshore Connections | Premium UK-to-SA Talent Pipeline",
    template: "%s | Offshore Connections",
  },
  description:
    "Connect with world-class, English-speaking professionals from South Africa. Save up to 70% on hiring costs without compromising on quality, reliability, or results.",
  keywords: [
    "Offshore Talent",
    "South Africa Remote Workers",
    "UK Offshore Hiring",
    "Remote Teams",
    "BPO South Africa",
    "Cost-effective Hiring",
    "Customer Support Talent",
    "Sales SDR Offshore",
  ],
  authors: [{ name: "Offshore Connections" }],
  creator: "Offshore Connections",
  publisher: "Offshore Connections",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Offshore Connections | Premium UK-to-SA Talent Pipeline",
    description:
      "A powerful alternative to traditional hiring. Give your UK business access to skilled remote talent from South Africa at a fraction of the cost.",
    url: "https://offshoreconnections.co.uk",
    siteName: "Offshore Connections",
    images: [
      {
        url: "/Hero-background-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Offshore Connections - World-Class Talent, Fraction of the Cost",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Connections | Premium UK-to-SA Talent Pipeline",
    description:
      "A powerful alternative to traditional hiring. Give your UK business access to skilled remote talent from South Africa at a fraction of the cost.",
    images: ["/Hero-background-1.jpeg"],
    creator: "@OffshoreConnections",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 relative`}>
        {/* Strip browser extension attributes (e.g. Bitdefender bis_skin_checked) before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.querySelectorAll('[bis_skin_checked]').forEach(function(e){e.removeAttribute('bis_skin_checked')});new MutationObserver(function(m){m.forEach(function(r){if(r.type==='attributes'&&r.attributeName==='bis_skin_checked'){r.target.removeAttribute('bis_skin_checked')}})}).observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['bis_skin_checked']})}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}