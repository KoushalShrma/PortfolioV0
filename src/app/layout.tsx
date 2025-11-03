import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Koushal Sharma Portfolio',
    images: [
      {
        url: `${siteConfig.url}/images/metaimg.png`,
        width: 1200,
        height: 630,
        alt: 'Koushal Sharma - Java Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@KoushalSharma',
    images: [`${siteConfig.url}/images/metaimg.png`],
  },
  authors: [{ name: 'Koushal Sharma', url: '' }],
  creator: 'Koushal Sharma',
  publisher: 'Koushal Sharma',
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    author: 'Koushal Sharma',
    email: 'koushalshrma@gmail.com',
    copyright: 'Koushal Sharma 2025',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  // Structured Data for SEO (Koushal Sharma Portfolio)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Koushal Sharma',
    alternateName: 'Koushal Sharma',
    jobTitle: 'Java Developer (Fresher)',
    description:
      'Koushal Sharma is a fresher Java developer with training and certifications in Java and software engineering fundamentals.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    email: 'koushalshrma@gmail.com',
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    alumniOf: [],
    worksFor: [],
    knowsAbout: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Data Structures',
      'Algorithms',
      'SQL',
      'Git',
      'Unit Testing',
    ],
    offers: {
      '@type': 'Service',
      name: 'Software Development & Training',
      description:
        'Entry-level software development, internships, and project contributions.',
      provider: {
        '@type': 'Person',
        name: 'Koushal Sharma',
      },
      areaServed: 'Global',
      serviceType: 'Software Development',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Junior Software Developer',
      description:
        'Entry-level Java developer focused on backend services and APIs.',
      occupationLocation: {
        '@type': 'Country',
        name: 'India',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
