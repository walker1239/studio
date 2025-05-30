import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar'; // Added Navbar import

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tres Mujeres',
  description: 'Experience the tradition and taste of Tres Mujeres winery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar /> {/* Added Navbar component */}
        <main className="flex-grow"> {/* Ensured main content takes up available space */}
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
