'use client';

import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';

export default function AboutHero() {
  const [ref, inView] = useInView<HTMLElement>();
  const { label, heading, paragraphs, image } = aboutPage.hero;

  return (
    <section ref={ref} data-reveal={inView} className="bg-white pt-[112px] pb-section-y">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        <div className="reveal-up space-y-6">
          <div className="text-label font-body uppercase tracking-label text-orange-text">
            {label}
          </div>
          <h1 className="text-display-md lg:text-display-lg font-display text-navy">
            {heading}
          </h1>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body-base font-body text-n-600">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="reveal-up w-full h-full min-h-[320px] aspect-[4/3] lg:aspect-auto rounded-card-lg overflow-hidden bg-n-300 shadow-card-hover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
