import type { Metadata, Viewport } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import SmoothScroll from '@/app/components/SmoothScroll';
import ScrollProgress from '@/app/components/ScrollProgress';
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
    default: 'Theara Chim | Software Developer & Full-Stack Engineer',
    template: '%s | Theara Chim',
  },
  description:
    'Portfolio of Theara Chim, a versatile Software Developer specializing in Frontend, Backend, and Full-Stack development. Building responsive web applications, robust APIs, and scalable software systems with TypeScript, React, Next.js, Node.js, Express.js, and PostgreSQL.',
  keywords: [
    'Theara Chim',
    'Software Developer',
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js Developer',
    'Express.js',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'Docker',
    'Web Development',
    'API Development',
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
    title: 'Theara Chim | Software Developer & Full-Stack Engineer',
    description:
      'Versatile Software Developer specializing in Frontend, Backend, and Full-Stack development with TypeScript, React, Next.js, Node.js, Express.js, and PostgreSQL.',
    images: [
      {
        url: '/portfolio_preview.png',
        width: 1200,
        height: 630,
        alt: 'Theara Chim - Software Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theara Chim | Software Developer & Full-Stack Engineer',
    description:
      'Versatile Software Developer building responsive frontend apps, scalable backend APIs, and distributed systems with TypeScript, React, Next.js, and Node.js.',
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
  jobTitle: 'Software Developer',
  knowsAbout: [
    'Software Development',
    'Full-Stack Development',
    'Frontend Development',
    'Backend Development',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
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
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
