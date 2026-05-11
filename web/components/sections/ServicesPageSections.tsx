'use client';

import { useState } from 'react';
import { servicesPage, serviceDetails, type ServiceSlug } from '@/lib/constants';
import { LinkButton } from '../ui/Button';
import ServiceIcon from '../ui/ServiceIcon';
import { useInView } from '@/lib/useInView';

const brandingPortfolio = servicesPage.cards.find((c) => c.slug === 'branding')?.link;

const sections = (Object.keys(serviceDetails) as ServiceSlug[]).map((slug) => ({
  slug,
  detail: serviceDetails[slug],
}));

export default function ServicesPageSections() {
  return (
    <>
      {sections.map((s, idx) => (
        <ServiceSection key={s.slug} {...s} isAlt={idx % 2 === 1} />
      ))}
    </>
  );
}

function ServiceSection({
  slug,
  detail,
  isAlt,
}: {
  slug: ServiceSlug;
  detail: typeof serviceDetails[ServiceSlug];
  isAlt: boolean;
}) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal={inView}
      id={slug}
      className={`scroll-mt-24 py-section-y ${isAlt ? 'bg-light-blue' : 'bg-white'}`}
    >
      <div className="section-container">
        <div className="reveal-up max-w-3xl space-y-5">
          <p className="text-label font-body uppercase tracking-label text-orange-text">
            {detail.eyebrow}
          </p>
          <h2 className="text-display-sm lg:text-display-md font-display text-navy text-balance">
            {detail.heading}
          </h2>
          <p className="text-body-base font-body text-n-600">{detail.intro}</p>
        </div>

        <div className="reveal-up mt-10">
          <h3 className="text-card-title font-display text-navy mb-5">
            {detail.included.heading}
          </h3>
          <ul className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.included.items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-4 rounded-card-lg p-5 lg:p-6 transition-[transform,box-shadow] duration-slow hover:-translate-y-1 hover:shadow-card-hover ${
                  isAlt ? 'bg-white' : 'bg-light-blue'
                }`}
              >
                <span
                  aria-hidden
                  className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-card text-orange-text ${
                    isAlt ? 'bg-light-blue' : 'bg-white'
                  }`}
                >
                  <ServiceIcon name="check" className="w-5 h-5" />
                </span>
                <span className="text-body-base font-body text-navy leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {detail.faq.length > 0 && (
          <div className="reveal-up mt-12 max-w-3xl">
            <h3 className="text-card-title font-display text-navy mb-5">
              Perguntas frequentes
            </h3>
            <ServiceFaq slug={slug} items={detail.faq} />
          </div>
        )}

        {slug === 'branding' && brandingPortfolio && (
          <div className="reveal-up mt-10 max-w-3xl">
            <p className="text-body-base font-body text-n-600 mb-4">
              Curioso para ver exemplos? Dê uma vista de olhos ao portfólio do nosso parceiro de design.
            </p>
            <LinkButton
              href={brandingPortfolio.href}
              variant={isAlt ? 'dark' : 'primary'}
              external
            >
              {brandingPortfolio.label}
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceFaq({
  slug,
  items,
}: {
  slug: ServiceSlug;
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleOne = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="reveal-stagger space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndices.has(i);
        const buttonId = `service-faq-${slug}-trigger-${i}`;
        const panelId = `service-faq-${slug}-panel-${i}`;
        return (
          <div
            key={item.question}
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
              <h4 className="text-body-base font-display font-bold text-navy flex-1">
                {item.question}
              </h4>
              <span
                aria-hidden
                className="text-orange-text font-bold text-xl flex-shrink-0 ml-4"
              >
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
              <p className="text-body-sm font-body text-n-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
