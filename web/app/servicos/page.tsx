import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesPageHero from '@/components/sections/ServicesPageHero';
import ServicesPageGrid from '@/components/sections/ServicesPageGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Serviços — Reserva Direta',
  description:
    'Branding, website, marketing digital, tecnologia para reservas e consultoria. Tudo o que o seu alojamento precisa para crescer online.',
};

export default function ServicosPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Navbar />
      <ServicesPageHero />
      <ServicesPageGrid />
      <ContactCTA />
      <Footer />
    </main>
  );
}
