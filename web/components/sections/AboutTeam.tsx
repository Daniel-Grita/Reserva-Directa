'use client';

import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';

export default function AboutTeam() {
  const [ref, inView] = useInView<HTMLElement>();
  const { label, heading, members } = aboutPage.team;

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream py-section-y">
      <div className="section-container">
        <SectionHeader label={label} heading={heading} />

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((m) => (
            <article
              key={m.name}
              className="bg-white rounded-card-lg p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-slow"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden bg-n-200 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.photo.src}
                  alt={m.photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-display-xs font-display text-navy mb-1">
                {m.name}
              </h3>
              <p className="text-body-sm font-body font-bold text-orange-text mb-3">
                {m.role}
              </p>
              <p className="text-body-sm font-body text-n-600">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
