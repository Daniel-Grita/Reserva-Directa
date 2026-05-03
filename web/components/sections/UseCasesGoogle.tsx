'use client';

import { useCasesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';
import { withHighlight } from '@/lib/highlight';
import SectionHeader from '../ui/SectionHeader';
import UseCaseCard from './UseCaseCard';
import StatCard from './StatCard';

export default function UseCasesGoogle() {
  const [ref, inView] = useInView<HTMLElement>();
  const { google, properties } = useCasesPage;
  const savings = useCountUp(10, inView, { duration: 1100, startDelay: 250 });

  return (
    <section ref={ref} data-reveal={inView} className="bg-n-150 pt-page-top pb-section-y">
      <div className="section-container">

        <div className="reveal-up">
          <SectionHeader as="h1" label={google.label} heading={google.heading} intro={google.intro} />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((p, i) => (
            <UseCaseCard
              key={p.label}
              label={p.label}
              image={p.googleImage}
              imageAlt={`Comparação de preços no Google — ${p.label}`}
              priority={i === 0}
            />
          ))}
        </div>

        <StatCard
          stat={<><span className="text-orange-text">−</span>€{savings}</>}
          label="em média, por estadia"
          ariaLabel={`${savings} euros menos por estadia, em média`}
          body={withHighlight(google.callout, 'o seu preço ganha')}
        />

      </div>
    </section>
  );
}
