import type { ReactNode } from 'react';

type Props = {
  label?: string;
  heading: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
};

export default function SectionHeader({
  label,
  heading,
  intro,
  align = 'left',
  onDark = false,
  className = '',
}: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : '';
  const headingColor = onDark ? 'text-white' : 'text-navy';
  const introColor = onDark ? 'text-white/70' : 'text-n-600';

  return (
    <div className={`max-w-3xl mb-16 ${alignCls} ${className}`}>
      {label && (
        <div className="text-label font-body uppercase tracking-label text-orange mb-4">
          {label}
        </div>
      )}
      <h2
        className={`text-display-md lg:text-display-lg font-display ${headingColor} ${intro ? 'mb-6' : ''}`}
      >
        {heading}
      </h2>
      {intro && (
        <p className={`text-body-base font-body ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}
