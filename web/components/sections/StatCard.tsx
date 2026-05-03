import type { ReactNode } from 'react';

type Props = {
  stat: ReactNode;
  label: string;
  body: ReactNode;
  ariaLabel?: string;
};

export default function StatCard({ stat, label, body, ariaLabel }: Props) {
  return (
    <div className="reveal-up bg-white rounded-card-lg border border-n-200 shadow-card hover:shadow-card-hover transition-shadow duration-slow p-8 lg:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
      <div
        className="md:border-r md:border-n-200 md:pr-10"
        {...(ariaLabel ? { 'aria-label': ariaLabel, role: 'group' } : {})}
      >
        <p
          className="text-display-lg font-display text-navy leading-none tabular-nums"
          {...(ariaLabel ? { 'aria-hidden': true } : {})}
        >
          {stat}
        </p>
        <p
          className="text-label font-body uppercase tracking-label text-orange-text mt-3"
          {...(ariaLabel ? { 'aria-hidden': true } : {})}
        >
          {label}
        </p>
      </div>
      <p className="text-body-base font-body text-n-600 leading-relaxed">{body}</p>
    </div>
  );
}
