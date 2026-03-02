import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Greenfield English School | Admissions Open 2026-27',
  description: 'Secure Your Child’s Bright Future Today at Greenfield English School. Premium English medium education, value-based curriculum, and modern facilities in Purbagool, Assam.',
  keywords: ['Greenfield English School', 'School Admissions', 'Purbagool School', 'English Medium School Assam', 'Best School in Anipur Road', 'Education'],
  openGraph: {
    title: 'Greenfield English School | Admissions Open',
    description: 'Premium English medium education, value-based curriculum, and modern facilities in Purbagool, Assam.',
    url: 'https://greenfieldenglishschool.edu',
    siteName: 'Greenfield English School',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Greenfield English School Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenfield English School | Admissions Open',
    description: 'Premium English medium education in Purbagool, Assam.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Greenfield English School",
  "description": "Premium English medium education, value-based curriculum, and modern facilities.",
  "url": "https://greenfieldenglishschool.edu",
  "logo": "https://greenfieldenglishschool.edu/logo.png",
  "telephone": "+91-7086404183",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anipur Road",
    "addressLocality": "Purbagool",
    "addressRegion": "Assam",
    "addressCountry": "IN"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#001a11] text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
