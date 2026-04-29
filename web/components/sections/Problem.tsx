'use client';

import { problem } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';
import { useCountUp } from '@/lib/useCountUp';

const PARAGRAPH_HIGHLIGHTS = [
  '15-25% de cada reserva',
  'dependência perigosa',
  'controlo total',
];

export default function Problem() {
  const [ref, inView] = useInView<HTMLElement>();
  const negativeCount = useCountUp(25, inView);
  const settled = negativeCount >= 25;

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="reveal-up space-y-6">
          <div className="text-label font-body uppercase tracking-label text-orange">
            {problem.label}
          </div>
          <h2 className="text-display-md lg:text-display-lg font-display text-navy">
            {problem.heading}
          </h2>

          <div className="space-y-4">
            {problem.paragraphs.map((para, i) => (
              <p key={i} className="text-body-base font-body text-n-600">
                {withHighlight(para, PARAGRAPH_HIGHLIGHTS[i] ?? '')}
              </p>
            ))}
          </div>
        </div>

        <div className="reveal-stagger">
          <ComparisonPanel
            tone="muted"
            label="Com OTAs"
            number={settled ? '−15-25%' : `−${negativeCount}%`}
            caption="em comissões por reserva"
            note="Booking.com, Airbnb e outras plataformas ficam com uma fatia significativa de cada reserva."
          />

          <div className="my-3 h-px bg-n-200" aria-hidden />

          <ComparisonPanel
            tone="brand"
            label="Reservas Diretas"
            number="0%"
            caption="comissão. Controlo total."
            note="Mantém o controlo sobre preços, comunicação e a relação com o hóspede."
          />
        </div>
      </div>
    </section>
  );
}

const PANEL_STYLES = {
  brand: {
    wrapper: 'bg-navy text-white',
    label: 'text-white/60',
    number: 'text-orange',
    caption: 'text-white',
    note: 'text-white/60',
  },
  muted: {
    wrapper: 'bg-light-blue text-navy',
    label: 'text-n-600',
    number: 'text-navy',
    caption: 'text-n-900',
    note: 'text-n-600',
  },
} as const;

function ComparisonPanel({
  tone,
  label,
  number,
  caption,
  note,
}: {
  tone: keyof typeof PANEL_STYLES;
  label: string;
  number: string;
  caption: string;
  note: string;
}) {
  const s = PANEL_STYLES[tone];

  return (
    <div
      className={`group rounded-card-lg p-6 transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover ${s.wrapper}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <ToneIcon positive={tone === 'brand'} />
        <span className={`text-label font-body uppercase tracking-label ${s.label}`}>
          {label}
        </span>
      </div>
      <div className={`text-display-md font-display leading-none mb-3 whitespace-nowrap tabular-nums ${s.number}`}>
        {number}
      </div>
      <div className={`text-body-base font-body mb-2 ${s.caption}`}>{caption}</div>
      <p className={`text-body-sm font-body ${s.note}`}>{note}</p>
    </div>
  );
}

function ToneIcon({ positive }: { positive: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-base group-hover:-translate-y-px"
      aria-hidden
    >
      {positive ? (
        <>
          <polyline points="4 17 10 11 13 14 20 7" />
          <polyline points="14 7 20 7 20 13" />
        </>
      ) : (
        <>
          <polyline points="4 7 10 13 13 10 20 17" />
          <polyline points="14 17 20 17 20 11" />
        </>
      )}
    </svg>
  );
}
