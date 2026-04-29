'use client';

import { useState } from 'react';
import { faq } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container max-w-3xl">
        <div className="reveal-up">
          <SectionHeader
            label={faq.label}
            heading={faq.heading}
            intro={withHighlight(faq.intro, 'proprietários como você')}
          />
        </div>

        <div className="reveal-stagger space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div
                key={i}
                className="border border-n-200 rounded-faq overflow-hidden bg-white"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-n-100 transition-colors duration-base"
                >
                  <h3 className="text-body-base font-display font-bold text-navy flex-1">
                    {item.question}
                  </h3>
                  <span aria-hidden className="text-orange font-bold text-xl flex-shrink-0 ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 py-4 bg-n-150 border-t border-n-200"
                >
                  <p className="text-body-sm font-body text-n-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
