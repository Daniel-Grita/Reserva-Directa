'use client';

import { bookingSystem } from '@/lib/constants';
import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';
import StatTile from '../ui/StatTile';

export default function BookingSystem() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-stagger">
          <div className="mb-10">
            <div className="text-label font-body uppercase tracking-label text-orange-text mb-4">
              {bookingSystem.label}
            </div>
            <h2 className="text-display-md lg:text-display-lg font-display text-navy mb-6 text-balance">
              {bookingSystem.heading}
            </h2>
            <p className="text-body-base font-body text-n-600">
              {withHighlight(bookingSystem.intro, 'sem intermediários')}
            </p>
          </div>

          <BookingWidgetMockup />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 p-8 bg-white rounded-card-lg">
            {bookingSystem.trustBadges.map((badge, i) => (
              <StatTile key={i} stat={badge} run={inView} index={i} />
            ))}
          </div>

          <LinkButton href="/a-nossa-solucao#contacto" variant="primary">
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
        <DateField label="Check In" value="26 Sex 2026" />
        <DateField label="Check Out" value="30 Ter 2026" />
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-text flex-shrink-0">
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
