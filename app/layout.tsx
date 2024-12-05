import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import { CheckeredBackground } from './components/background/CheckeredBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melvin Chipimo | Full Stack Developer',
  description: 'Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black`}>
        {/* <CheckeredBackground /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}