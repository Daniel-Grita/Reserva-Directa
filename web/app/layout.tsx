import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import CookieBanner from "@/components/ui/CookieBanner";
import CloudflareAnalytics from "@/components/seo/CloudflareAnalytics";
import { safeJsonLd } from "@/lib/jsonLd";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reservadireta.pt"),
  title: "Reserva Direta — Reservas Diretas para Alojamentos",
  description: "Ajudamos alojamentos locais em Portugal a aumentar reservas diretas e reduzir comissões das OTAs.",
  openGraph: {
    title: "Reserva Direta — Mais reservas diretas. Menos comissões.",
    description: "Ajudamos alojamentos locais em Portugal a aumentar reservas diretas e reduzir comissões das OTAs.",
    url: "https://reservadireta.pt",
    siteName: "Reserva Direta",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserva Direta — Mais reservas diretas. Menos comissões.",
    description: "Ajudamos alojamentos locais em Portugal a aumentar reservas diretas e reduzir comissões das OTAs.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = safeJsonLd({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Reserva Direta",
  description:
    "Agência portuguesa que ajuda alojamentos locais e hotéis a aumentar reservas diretas e reduzir comissões das OTAs.",
  url: "https://reservadireta.pt",
  email: "agenciareservadireta@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisboa",
    addressCountry: "PT",
  },
  areaServed: { "@type": "Country", name: "Portugal" },
  sameAs: [
    "https://www.facebook.com/people/Reserva-Direta/pfbid0ZasfC5LRYg9uE3yFaMMLVFGYxnvnhqFthnoTsikP4Fqs9bYT3VAmFzufw1xThVzil/",
    "https://www.instagram.com/reservadireta_",
    "https://www.youtube.com/channel/UChBKw5hrLZsdDbply4KTrng",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${bricolage.variable} ${figtree.variable} h-full`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-n-900 font-body"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-btn focus:text-body-sm"
        >
          Saltar para o conteúdo
        </a>
        {children}
        <CookieBanner />
        <CloudflareAnalytics />
      </body>
    </html>
  );
}
