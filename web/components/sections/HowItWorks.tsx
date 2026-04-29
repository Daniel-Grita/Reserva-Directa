'use client';

import { howItWorks } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from '@/lib/useInView';

export default function HowItWorks() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="como-funciona" className="bg-white py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader label={howItWorks.label} heading={howItWorks.heading} />
        </div>

        <ol className="reveal-stagger relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mt-4">
          <span
            aria-hidden
            className="hidden lg:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-orange via-orange/40 to-orange/0"
          />

          {howItWorks.steps.map((step, i) => (
            <li key={i} className="relative flex flex-col items-start text-left">
              <span
                aria-hidden
                className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-body-sm font-display font-bold shadow-card mb-5 ring-8 ring-white"
              >
                {step.number}
              </span>
              <h3 className="text-display-xs font-display font-bold text-navy mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-body-base font-body text-n-600 max-w-xs">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
