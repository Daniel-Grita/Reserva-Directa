'use client';

import { bookingSystem, solucaoPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import ServiceIcon from '../ui/ServiceIcon';

export default function SolucaoFeatures() {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">
        <div className="reveal-up text-label font-body uppercase tracking-label text-orange-text mb-4">
          {solucaoPage.features.label}
        </div>
        <h2 className="reveal-up text-display-md lg:text-display-lg font-display text-navy mb-12">
          {bookingSystem.features.heading}
        </h2>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookingSystem.features.cards.map((card, i) => (
            <article
              key={i}
              className="bg-light-blue rounded-card-lg p-7 transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="w-11 h-11 rounded-card bg-white text-orange-text flex items-center justify-center mb-5">
                <ServiceIcon name={solucaoPage.features.icons[i]} className="w-6 h-6" />
              </div>
              <h3 className="text-display-xs font-display text-navy mb-2">{card.title}</h3>
              <p className="text-body-sm font-body text-n-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
