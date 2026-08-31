import type { Metadata } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import '@/app/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theara-portfolio.vercel.app'),
  title: {
    default: 'Theara Chim | Full Stack Developer & UI/UX Designer',
    template: '%s | Theara Chim Portfolio',
  },
  description:
    'Passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive, and scalable web applications with exceptional user experiences.',
  keywords: [
    'Theara Chim',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'UI/UX Designer',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
    'Freelance Developer',
    'Web Development',
    'Mobile Development',
    'Responsive Design',
    'Tailwind CSS',
    'MongoDB',
    'MySQL',
    'AWS',
    'Docker',
    'Git',
    'Figma',
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
    url: 'https://theara-portfolio.vercel.app',
    title: 'Theara Chim | Full Stack Developer & UI/UX Designer',
    description:
      'Passionate Full Stack Developer creating modern, responsive, and scalable web applications. Specializing in React, Next.js, TypeScript, and exceptional user experiences.',
    siteName: 'Theara Chim Portfolio',
    images: [
      {
        url: '/portfolio_preview.png',
        width: 1200,
        height: 630,
        alt: 'Theara Chim - Full Stack Developer Portfolio Preview',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thearachim24',
    creator: '@thearachim24',
    title: 'Theara Chim | Full Stack Developer & UI/UX Designer',
    description:
      'Passionate Full Stack Developer creating modern web applications with React, Next.js, and TypeScript.',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://theara-portfolio.vercel.app',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'msapplication-TileColor': '#2d89ef',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
