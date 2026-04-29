'use client';

import { bookingSystem } from '@/lib/constants';
import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';
import { withHighlight, keepLastTwoTogether } from '@/lib/highlight';
import { useCountUp } from '@/lib/useCountUp';

type TrustBadge = (typeof bookingSystem.trustBadges)[number];

function StatTile({ stat, run, index }: { stat: TrustBadge; run: boolean; index: number }) {
  const value = useCountUp(stat.target, run, { duration: 1100, startDelay: 700 + index * 140 });
  const settled = value >= stat.target;
  const prefix = ('prefix' in stat && stat.prefix) || '';
  const suffix = ('suffix' in stat && stat.suffix) || '';
  const override = 'displayOverride' in stat ? stat.displayOverride : undefined;
  const display = settled ? (override ?? `${prefix}${stat.target}${suffix}`) : `${prefix}${value}${suffix}`;
  return (
    <div className="group text-center">
      <div className="relative inline-block mb-2">
        <div className="text-display-md font-display text-navy leading-none tabular-nums">
          {display}
        </div>
        <span
          aria-hidden
          className="absolute left-1/2 -bottom-1.5 h-[3px] w-10 -translate-x-1/2 origin-center scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        />
      </div>
      <p className="text-body-sm font-body text-n-600">{keepLastTwoTogether(stat.label)}</p>
    </div>
  );
}

export default function BookingSystem() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-stagger">
          <div className="max-w-3xl mb-10">
            <div className="text-label font-body uppercase tracking-label text-orange mb-4">
              {bookingSystem.label}
            </div>
            <h2 className="text-display-md lg:text-display-lg font-display text-navy mb-6">
              {bookingSystem.heading}
            </h2>
            <p className="text-body-base font-body text-n-600">
              {withHighlight(bookingSystem.intro, 'sem intermediários')}
            </p>
          </div>

          <BookingWidgetMockup />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 p-8 bg-white rounded-card-lg border border-n-200">
            {bookingSystem.trustBadges.map((badge, i) => (
              <StatTile key={i} stat={badge} run={inView} index={i} />
            ))}
          </div>

          <LinkButton href="#contacto" variant="primary">
            Falar connosco sobre reservas diretas
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function BookingWidgetMockup() {
  return (
    <div className="bg-booking-blue rounded-card-lg p-6 lg:p-8 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <DateField label="Check In" value="26 Sun 2026" />
        <DateField label="Check Out" value="26 Sun 2026" />
        <button
          type="button"
          className="bg-orange text-white text-button font-body font-bold px-10 py-3.5 rounded-input hover:opacity-90 transition-all duration-base"
        >
          Procurar
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4 text-white/90 text-body-sm font-body">
        <GiftIcon />
        <a href="#" className="underline hover:no-underline">
          Tem um código promocional?
        </a>
      </div>
    </div>
  );
}

function DateField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-body-sm font-body text-white mb-2">{label}</div>
      <div className="bg-white rounded-input px-4 py-3 flex items-center gap-3 text-n-900 text-body-sm font-body">
        <CalendarIcon />
        <span className="flex-1">{value}</span>
        <ChevronDown />
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-n-400 flex-shrink-0">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
