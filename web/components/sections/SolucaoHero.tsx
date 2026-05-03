'use client';

import { solucaoPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';

export default function SolucaoHero() {
  const [ref, inView] = useInView<HTMLElement>();
  const { heading, image, tagline, intro } = solucaoPage.hero;

  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue pt-[112px] pb-section-y">
      <div className="section-container">
        <div className="reveal-up max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
            {heading}
          </h1>

          <div className="aspect-[2/1] w-full rounded-card-lg overflow-hidden bg-n-300 shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} loading="eager" className="w-full h-full object-cover" />
          </div>

          <p className="text-display-xs font-display text-orange-text">{tagline}</p>

          <p className="text-body-base font-body text-n-600 max-w-2xl mx-auto">{intro}</p>
        </div>
      </div>
    </section>
  );
}
