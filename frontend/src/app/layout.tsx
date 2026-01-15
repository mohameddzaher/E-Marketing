import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://energize-sa.com"),
  title: {
    default: "Energize Your Business | Leading Marketing Agency in Saudi Arabia",
    template: "%s | Energize Your Business",
  },
  description:
    "Energize Your Business is a leading marketing agency in Saudi Arabia specializing in brand activation, event management, digital marketing, and merchandising. Transform your brand with innovative marketing solutions that drive real results.",
  keywords: [
    "marketing agency Saudi Arabia",
    "brand activation",
    "event management",
    "digital marketing",
    "merchandising",
    "marketing solutions",
    "branding agency",
    "marketing services Jeddah",
    "corporate events",
    "brand strategy",
    "marketing campaigns",
    "business growth",
  ],
  authors: [{ name: "Energize Your Business" }],
  creator: "Energize Your Business",
  publisher: "Energize Your Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://energize-sa.com",
    siteName: "Energize Your Business",
    title: "Energize Your Business | Leading Marketing Agency in Saudi Arabia",
    description:
      "Transform your brand with innovative marketing solutions. Leading marketing agency in Saudi Arabia specializing in brand activation, event management, and digital marketing.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Energize Your Business Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energize Your Business | Leading Marketing Agency in Saudi Arabia",
    description:
      "Transform your brand with innovative marketing solutions. Leading marketing agency in Saudi Arabia.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
  alternates: {
    canonical: "https://energize-sa.com",
  },
  category: "Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Energize Your Business",
              url: "https://energize-sa.com",
              logo: "https://energize-sa.com/images/logo.png",
              description:
                "Leading marketing agency in Saudi Arabia specializing in brand activation, event management, digital marketing, and merchandising.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Raihanat Al Jazirah, Al Faisaliyyah",
                addressLocality: "Jeddah",
                postalCode: "23442",
                addressCountry: "SA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966-12-682-5858",
                contactType: "Customer Service",
                email: "info@energize-sa.com",
                areaServed: "SA",
                availableLanguage: ["en", "ar"],
              },
              sameAs: [
                "https://www.linkedin.com/company/energize-your-business",
                "https://www.instagram.com/energizebusksa/",
                "https://www.facebook.com/EnergizeBusKSA",
                "https://www.youtube.com/@EnergizeBusKSA",
                "https://www.tiktok.com/@energizebusksa",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Energize Your Business",
              image: "https://energize-sa.com/images/logo.png",
              "@id": "https://energize-sa.com",
              url: "https://energize-sa.com",
              telephone: "+966-12-682-5858",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Raihanat Al Jazirah, Al Faisaliyyah",
                addressLocality: "Jeddah",
                postalCode: "23442",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.4858,
                longitude: 39.1925,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
