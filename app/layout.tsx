import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuong Tran | Software Engineer",
  description: "Portfolio of Cuong Tran, a Software Engineer focusing on clean code, scalable architecture, and modern web experiences. Bridging design with technical implementation.",
  keywords: ["Cuong Tran", "Software Engineer", "Frontend Developer", "Next.js", "React", "Portfolio", "Web Development"],
  authors: [{ name: "Cuong Tran", url: "https://github.com/cuongtran392003" }],
  creator: "Cuong Tran",
  metadataBase: new URL('https://portfolio-cuongtran.vercel.app'),
  openGraph: {
    title: "Cuong Tran | Software Engineer",
    description: "Portfolio of Cuong Tran, building sophisticated digital systems.",
    url: "https://portfolio-cuongtran.vercel.app",
    siteName: "Cuong Tran Portfolio",
    locale: "en_US",
    type: "website",
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
