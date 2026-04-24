import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuong Tran | Software Engineer - Frontend Developer",
  applicationName: "Cuong Tran Portfolio",
  description: "Portfolio of Cuong Tran (Trần Cường), a Software Engineer in Vietnam focusing on clean code, scalable architecture, and modern web experiences. UI/UX and Frontend Development specialist.",
  keywords: [
    "Cuong Tran", "Cường Trần", "Trần Cường", 
    "Cuong Tran Portfolio", "Software Engineer Vietnam", 
    "Frontend Developer", "Next.js Developer", "React Developer",
    "Lập trình viên Frontend", "Kỹ sư phần mềm"
  ],
  authors: [{ name: "Cuong Tran", url: "https://github.com/cuongtran392003" }],
  creator: "Cuong Tran",
  metadataBase: new URL('https://mynet.id.vn'),
  openGraph: {
    title: "Cuong Tran | Software Engineer",
    description: "Portfolio of Cuong Tran, building sophisticated digital systems.",
    url: "https://mynet.id.vn",
    siteName: "Cuong Tran Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuong Tran | Software Engineer",
    description: "Portfolio of Cuong Tran, building sophisticated digital systems.",
    creator: "@cuongtran",
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
    google: 'pMJBPlYTISfenPZgKYa_4fD65vLigk83lQRDixc74yc',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Google to recognize the entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cuong Tran",
    "alternateName": "Trần Cường",
    "url": "https://mynet.id.vn",
    "jobTitle": "Software Engineer",
    "sameAs": [
      "https://github.com/cuongtran392003",
      // "https://www.linkedin.com/in/your-linkedin"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <CustomCursor />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
