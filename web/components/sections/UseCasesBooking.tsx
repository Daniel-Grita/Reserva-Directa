'use client';

import { useCasesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';
import { withHighlight } from '@/lib/highlight';
import SectionHeader from '../ui/SectionHeader';
import UseCaseCard from './UseCaseCard';
import StatCard from './StatCard';

const WEEKS_TARGET = 2;
const WEEKS_DISPLAY = '1–2';

export default function UseCasesBooking() {
  const [ref, inView] = useInView<HTMLElement>();
  const { booking, properties } = useCasesPage;
  const weeks = useCountUp(WEEKS_TARGET, inView, { duration: 1100, startDelay: 250 });

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">

        <div className="reveal-up">
          <SectionHeader label={booking.label} heading={booking.heading} intro={booking.intro} />
        </div>

        <div className="reveal-stagger flex flex-col gap-6 mb-12">
          {properties.map((p, i) => (
            <UseCaseCard
              key={p.label}
              label={p.label}
              image={p.bookingImage}
              imageAlt={`Motor de reservas — ${p.label}`}
              priority={i === 0}
            />
          ))}
        </div>

        <StatCard
          stat={weeks >= WEEKS_TARGET ? WEEKS_DISPLAY : weeks}
          label="semanas até estar online"
          ariaLabel={`${WEEKS_DISPLAY} semanas até estar online`}
          body={withHighlight(booking.callout, '1 a 2 semanas')}
        />

      </div>
    </section>
  );
}
