import type { Metadata, Viewport } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import SmoothScroll from '@/app/components/SmoothScroll';
import '@/app/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

const SITE_URL = 'https://theara-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Theara Chim | Backend-Focused Full-Stack Developer',
    template: '%s | Theara Chim',
  },
  description:
    'Portfolio of Theara Chim, a Backend-Focused Full-Stack Developer in Cambodia. I build scalable APIs, backend services, and distributed systems with TypeScript, Node.js, Express.js, PostgreSQL, Redis, and RabbitMQ.',
  keywords: [
    'Theara Chim',
    'Backend Developer',
    'Full Stack Developer',
    'Node.js Developer',
    'TypeScript',
    'Express.js',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'Docker',
    'API Development',
    'Software Engineer',
    'Backend Engineer',
    'Distributed Systems',
    'Microservices',
    'Cambodia Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Theara Chim', url: 'https://github.com/theara24' }],
  creator: 'Theara Chim',
  publisher: 'Theara Chim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Theara Chim Portfolio',
    title: 'Theara Chim | Backend-Focused Full-Stack Developer',
    description:
      'Backend-focused Full-Stack Developer specializing in scalable APIs, backend services, and distributed systems with TypeScript, Node.js, Express.js, PostgreSQL, Redis, and RabbitMQ.',
    images: [
      {
        url: '/portfolio_preview.png',
        width: 1200,
        height: 630,
        alt: 'Theara Chim - Backend-Focused Full-Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theara Chim | Backend-Focused Full-Stack Developer',
    description:
      'Backend-focused Full-Stack Developer building scalable APIs and distributed systems with TypeScript, Node.js, PostgreSQL, Redis, and RabbitMQ.',
    images: ['/portfolio_preview.png'],
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
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
  classification: 'Portfolio Website',
  icons: {
    icon: '/my_logo.png',
    apple: '/my_logo.png',
  },
  other: {
    'msapplication-TileColor': '#2d89ef',
  },
};

export const viewport: Viewport = {
  themeColor: '#04081a',
  width: 'device-width',
  initialScale: 1,
};

/* JSON-LD structured data for search-engine rich results. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Theara Chim',
  url: SITE_URL,
  image: `${SITE_URL}/portfolio_preview.png`,
  jobTitle: 'Backend-Focused Full-Stack Developer',
  knowsAbout: [
    'TypeScript',
    'Node.js',
    'Express.js',
    'Backend Development',
    'API Development',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'Docker',
    'Distributed Systems',
  ],
  sameAs: [
    'https://github.com/theara24',
    'https://www.linkedin.com/in/theara-chim-971845341/',
    'https://t.me/chim_theara',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
