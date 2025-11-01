import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

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
  // Quick runtime check: log whether imported components are defined
  // This helps catch if any import is undefined and causing the React "Element type is invalid" error.
  // (Server-side log)
  // eslint-disable-next-line no-console
  console.log(
    'check: ThemeProvider',
    typeof ThemeProvider,
    'ActiveSectionProvider',
    typeof ActiveSectionProvider,
    'Toaster',
    typeof Toaster
  );

  // Structured Data for SEO (personalized for Koushal Sharma)
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
      addressCountry: 'United Kingdom',
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
        name: 'United Kingdom',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDKQ7JZ');
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5126308192729168"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDKQ7JZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "oi5p8b8wvn");
            `,
          }}
        />
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
