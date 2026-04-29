import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
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
  title: "Reserva Direta — Reservas Diretas para Alojamentos",
  description: "Ajudamos alojamentos locais em Portugal a aumentar reservas diretas e reduzir comissões das OTAs.",
  openGraph: {
    title: "Reserva Direta",
    description: "Mais reservas diretas. Menos comissões.",
    url: "https://reservadireta.pt",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${bricolage.variable} ${figtree.variable}`}
      style={{ height: "100%" }}
    >
      <body suppressHydrationWarning style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} className="bg-white text-n-900 font-body">
        {children}
      </body>
    </html>
  );
}
