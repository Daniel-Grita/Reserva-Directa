import type { ReactNode } from 'react';

type Props = {
  label?: string;
  heading: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
};

export default function SectionHeader({
  label,
  heading,
  intro,
  align = 'left',
  onDark = false,
  className = '',
  as: HeadingTag = 'h2',
}: Props) {
  const alignCls = align === 'center' ? 'md:text-center md:mx-auto' : '';
  const headingColor = onDark ? 'text-white' : 'text-navy';
  const introColor = onDark ? 'text-white/70' : 'text-n-600';

  return (
    <div className={`max-w-3xl mb-16 ${alignCls} ${className}`}>
      {label && (
        <div className={`text-label font-body uppercase tracking-label mb-4 ${onDark ? 'text-orange' : 'text-orange-text'}`}>
          {label}
        </div>
      )}
      <HeadingTag
        className={`text-display-md lg:text-display-lg font-display ${headingColor} ${intro ? 'mb-6' : ''}`}
      >
        {heading}
      </HeadingTag>
      {intro && (
        <p className={`text-body-base font-body ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}
