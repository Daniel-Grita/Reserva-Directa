'use client';

import { caseStudies } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';

export default function CaseStudies() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="casos-estudo" className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader
            label={caseStudies.label}
            heading={caseStudies.heading}
            intro={withHighlight(caseStudies.intro, 'por todo o país')}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.cases.map((caseItem, i) => (
            <article
              key={i}
              className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-n-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 inline-flex items-center bg-white/95 backdrop-blur-sm text-navy text-label font-body font-bold uppercase tracking-label px-3 py-1.5 rounded-full">
                  {caseItem.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-display-xs font-display font-bold text-navy mb-2 leading-tight">
                  {caseItem.title}
                </h3>
                <p className="text-body-sm font-body text-n-600 flex-1">
                  {caseItem.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
