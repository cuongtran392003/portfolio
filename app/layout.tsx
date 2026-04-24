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
  title: "Trần Mạnh Cường (Cuong Tran) | Fullstack Web & Mobile Developer",
  applicationName: "Cuong Tran Portfolio",
  description: "Portfolio of Trần Mạnh Cường (Cuong Tran) - A passionate Software Engineer in Vietnam specialized in Fullstack Web Development (React, Next.js, Node.js) and Mobile App Development (React Native). View my latest projects and technical expertise.",
  keywords: [
    "Trần Mạnh Cường", "Cuong Tran", "Cường Trần", "Cuong Tran Portfolio", 
    "Trần Mạnh Cường Portfolio", "Software Engineer Vietnam", 
    "Fullstack Developer", "Lập trình viên Fullstack", "Web Developer",
    "Mobile Developer", "Lập trình viên Mobile", "React Native Developer", 
    "Frontend Developer", "Next.js Developer", "React Developer",
    "Node.js", "NestJS", "TypeScript", "JavaScript", "PHP", "WordPress",
    "MySQL", "MongoDB", "Tailwind CSS", "Kỹ sư phần mềm Việt Nam"
  ],
  authors: [{ name: "Cuong Tran", url: "https://github.com/cuongtran392003" }],
  creator: "Cuong Tran",
  metadataBase: new URL('https://mynet.id.vn'),
  openGraph: {
    title: "Trần Mạnh Cường | Fullstack Web & Mobile Developer",
    description: "Portfolio of Trần Mạnh Cường (Cuong Tran) - Specialized in Fullstack Web & Mobile App Development.",
    url: "https://mynet.id.vn",
    siteName: "Cuong Tran Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://mynet.id.vn/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuong Tran - Fullstack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Mạnh Cường | Fullstack Web & Mobile Developer",
    description: "Portfolio of Trần Mạnh Cường (Cuong Tran) - Specialized in Fullstack Web & Mobile App Development.",
    creator: "@cuongtran",
    images: ["https://mynet.id.vn/og-image.jpg"],
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
