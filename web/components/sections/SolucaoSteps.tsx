'use client';

import { bookingSystem, solucaoPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { LinkButton } from '../ui/Button';

export default function SolucaoSteps() {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-up text-label font-body uppercase tracking-label text-orange-text mb-4">
          {solucaoPage.steps.label}
        </div>
        <h2 className="reveal-up text-display-md lg:text-display-lg font-display text-navy mb-12">
          {solucaoPage.steps.heading}
        </h2>

        <ol className="reveal-stagger space-y-6 mb-12">
          {bookingSystem.process.steps.map((step, i) => (
            <li key={i} className="flex gap-5 items-start">
              <span
                aria-hidden
                className="flex-shrink-0 w-12 h-12 rounded-card bg-orange text-white text-display-xs font-display flex items-center justify-center"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-display-xs font-display text-navy mb-2">{step.title}</h3>
                <p className="text-body-sm font-body text-n-600 max-w-3xl">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal-up">
          <LinkButton href={solucaoPage.primaryCta.href} variant="primary">
            {solucaoPage.primaryCta.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
