'use client';

import { solucaoPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import ServiceIcon from '../ui/ServiceIcon';

export default function SolucaoTrust() {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-up text-label font-body uppercase tracking-label text-orange-text mb-4">
          {solucaoPage.trust.label}
        </div>
        <h2 className="reveal-up text-display-md lg:text-display-lg font-display text-navy mb-10">
          {solucaoPage.trust.heading}
        </h2>

        <ul className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {solucaoPage.trust.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span aria-hidden className="flex-shrink-0 text-orange-text mt-0.5">
                <ServiceIcon name="check" className="w-5 h-5" />
              </span>
              <span className="text-body-base font-body text-n-900">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
