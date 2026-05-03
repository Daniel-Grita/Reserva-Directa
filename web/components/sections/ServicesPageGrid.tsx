'use client';

import Link from 'next/link';
import { servicesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';

export default function ServicesPageGrid() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="servicos" className="bg-white py-section-y">
      <div className="section-container">
        <div className="reveal-up text-label font-body uppercase tracking-label text-orange-text mb-8">
          {servicesPage.label}
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesPage.cards.map((card) => (
            <article
              key={card.slug}
              className="group bg-white rounded-card-lg overflow-hidden border border-n-150 transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="aspect-[16/10] bg-n-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="p-6 lg:p-7">
                <h2 className="text-display-xs font-display text-navy mb-3">
                  {card.title}
                </h2>
                <p className="text-body-sm font-body text-n-600">
                  {card.description}
                </p>
                {'link' in card && card.link && (
                  <Link
                    href={card.link.href}
                    {...(card.link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-1 text-body-sm font-body font-bold text-orange-text hover:gap-2 transition-all duration-base mt-4"
                  >
                    {card.link.label} <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
