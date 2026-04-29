import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import BookingSystem from '@/components/sections/BookingSystem';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import CaseStudies from '@/components/sections/CaseStudies';
import FAQ from '@/components/sections/FAQ';
import BlogPreview from '@/components/sections/BlogPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Problem />
      <BookingSystem />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <BlogPreview />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
