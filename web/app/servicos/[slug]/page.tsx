import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero';
import ServiceIncluded from '@/components/sections/ServiceIncluded';
import ServiceProcess from '@/components/sections/ServiceProcess';
import FAQ from '@/components/sections/FAQ';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { serviceDetails, servicesPage, type ServiceSlug } from '@/lib/constants';
import { safeJsonLd } from '@/lib/jsonLd';

const slugs = Object.keys(serviceDetails) as ServiceSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug as ServiceSlug];
  if (!detail) return { title: 'Serviço — Reserva Direta' };
  return {
    title: `${detail.heading} — Reserva Direta`,
    description: detail.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug as ServiceSlug];
  if (!detail) notFound();

  const card = servicesPage.cards.find((c) => c.slug === slug);

  const serviceJsonLd = safeJsonLd({
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.heading,
    description: detail.intro,
    serviceType: detail.eyebrow,
    provider: {
      "@type": "LocalBusiness",
      name: "Reserva Direta",
      url: "https://reservadireta.pt",
    },
    areaServed: { "@type": "Country", name: "Portugal" },
    url: `https://reservadireta.pt/servicos/${slug}`,
  });

  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs
        items={[
          { name: 'Serviços', url: '/servicos' },
          { name: detail.heading, url: `/servicos/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLd }}
      />
      <Navbar />
      <ServiceDetailHero detail={detail} image={card?.image} />
      <ServiceIncluded included={detail.included} />
      <ServiceProcess process={detail.process} />
      <FAQ
        items={detail.faq}
        label="PERGUNTAS FREQUENTES"
        heading="Perguntas frequentes"
        intro={undefined}
        showToggleAll={false}
        idPrefix={`service-faq-${slug}`}
      />
      <ContactCTA />
      <Footer />
    </main>
  );
}
