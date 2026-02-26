import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Sleepnet",
  description: "Sleepnet Corporation - Breathe Easier. Live Better.",
  icons: {
    icon: `/favicon.png`,
    shortcut: `/favicon.png`,
    apple: `/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <AOSInit />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
