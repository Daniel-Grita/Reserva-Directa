'use client';

import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon, { type IconName } from '../ui/ServiceIcon';

export default function AboutValues() {
  const [ref, inView] = useInView<HTMLElement>();
  const { label, heading, items } = aboutPage.values;

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">
        <SectionHeader label={label} heading={heading} />

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((v) => (
            <article
              key={v.title}
              className="bg-light-blue rounded-card-lg p-8 transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-card bg-orange/10 text-orange-text flex items-center justify-center mb-6">
                <ServiceIcon name={v.icon as IconName} className="w-6 h-6" />
              </div>
              <h3 className="text-display-xs font-display text-navy mb-3">
                {v.title}
              </h3>
              <p className="text-body-sm font-body text-n-600">{v.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
