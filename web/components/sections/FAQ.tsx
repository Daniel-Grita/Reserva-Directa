'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { faq } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';
import { safeJsonLd } from '@/lib/jsonLd';

type Item = { question: string; answer: string };

type Props = {
  items?: readonly Item[];
  label?: string;
  heading?: string;
  intro?: ReactNode;
  showToggleAll?: boolean;
  idPrefix?: string;
};

export default function FAQ({
  items = faq.items,
  label = faq.label,
  heading = faq.heading,
  intro = withHighlight(faq.intro, 'proprietários como você'),
  showToggleAll = true,
  idPrefix = 'faq',
}: Props) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const [ref, inView] = useInView<HTMLElement>();

  const allOpen = openIndices.size === items.length;

  const toggleOne = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleAll = () => {
    setOpenIndices(allOpen ? new Set() : new Set(items.map((_, i) => i)));
  };

  const faqJsonLd = useMemo(
    () =>
      safeJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    [items],
  );

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <div className="section-container max-w-3xl">
        <div className="reveal-up">
          <SectionHeader label={label} heading={heading} intro={intro} />
        </div>

        {showToggleAll && (
          <div className="reveal-up flex justify-end mb-4">
            <button
              type="button"
              onClick={toggleAll}
              aria-expanded={allOpen}
              className="text-body-sm font-body font-bold text-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-input px-2 py-1 -mr-2"
            >
              {allOpen ? 'Recolher todas' : 'Expandir todas'}
            </button>
          </div>
        )}

        <div className="reveal-stagger space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndices.has(i);
            const buttonId = `${idPrefix}-trigger-${i}`;
            const panelId = `${idPrefix}-panel-${i}`;
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
                  onClick={() => toggleOne(i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-n-100 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <h3 className="text-body-base font-display font-bold text-navy flex-1">
                    {item.question}
                  </h3>
                  <span aria-hidden className="text-orange-text font-bold text-xl flex-shrink-0 ml-4">
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
