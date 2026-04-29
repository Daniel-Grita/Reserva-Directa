'use client';

import Link from 'next/link';
import { services } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon from '../ui/ServiceIcon';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';

type ServiceIconName = 'palette' | 'globe' | 'phone' | 'bolt' | 'tools' | 'handshake';

export default function Services() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="servicos" className="bg-cream py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader
            label={services.label}
            heading={services.heading}
            intro={withHighlight(services.intro, 'resultados máximos')}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-n-200 rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mb-4 text-navy">
                <ServiceIcon name={card.icon as ServiceIconName} className="w-5 h-5" />
              </div>
              <h3 className="text-display-xs font-display text-navy mb-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-body-sm font-body text-n-600 flex-1">
                {card.description}
              </p>
            </div>
          ))}

          <Link
            href="/servicos"
            className="group bg-navy rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow flex flex-col justify-between min-h-[180px]"
          >
            <div className="w-10 h-10 rounded-full bg-orange/15 flex items-center justify-center mb-4 text-orange">
              <ArrowRightIcon />
            </div>
            <div>
              <h3 className="text-display-xs font-display text-white mb-2 leading-tight">
                Descobre mais sobre os nossos serviços
              </h3>
              <span className="text-button font-body font-bold text-orange inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-[gap] duration-base">
                Ver todos
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
