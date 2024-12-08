import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/chat/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melvin Chipimo | Full Stack Developer',
  description: 'Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer',
  openGraph: {
    title: 'Melvin Chipimo | Full Stack Developer',
    description: 'Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer',
    url: 'https://www.melvinchips.com',
    images: [
      {
        url: '/melvinchips_ui.png', // Replace with your thumbnail URL
        width: 1200,
        height: 630,
        alt: 'Melvin Chipimo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melvin Chipimo | Full Stack Developer',
    description: 'Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer',
    images: ['/melvinchips_ui.png','/melvinchipimo.jpg'], // Replace with your thumbnail URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta property="og:title" content="Melvin Chipimo | Full Stack Developer" />
        <meta property="og:description" content="Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer" />
        <meta property="og:image" content="/melvinchips_ui.png" />
        <meta property="og:url" content="https://www.melvinchips.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Melvin Chipimo | Full Stack Developer" />
        <meta name="twitter:description" content="Professional portfolio of Melvin Chipimo - Full Stack Developer and Freelancer" />
        <meta name="twitter:image" content="/melvinchips_ui.png" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}