import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/sections/AboutHero';
import AboutTeam from '@/components/sections/AboutTeam';
import AboutValues from '@/components/sections/AboutValues';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Quem Somos — Reserva Direta',
  description:
    'Conhece a equipa por trás da Reserva Direta. Ajudamos pequenos alojamentos em Portugal a ganhar independência das OTAs.',
};

export default function QuemSomosPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Navbar />
      <AboutHero />
      <AboutTeam />
      <AboutValues />
      <ContactCTA />
      <Footer />
    </main>
  );
}
