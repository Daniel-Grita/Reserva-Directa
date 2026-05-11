import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'dark' | 'secondary' | 'accent' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-orange text-n-900 hover:shadow-cta',
  dark: 'bg-navy text-white hover:opacity-90',
  secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white',
  accent: 'bg-orange text-white hover:opacity-90',
  ghost: 'bg-transparent text-navy hover:underline px-0 py-0',
};

const baseClasses =
  'inline-flex items-center justify-center leading-none px-6 py-3.5 rounded-btn text-button font-body font-bold transition-all duration-base active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: () => void;
  external?: boolean;
};

type ButtonProps = CommonProps & {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

export function LinkButton({ variant = 'primary', className = '', href, onClick, external, children }: LinkButtonProps) {
  const externalProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};
  return (
    <Link
      href={href}
      onClick={onClick}
      {...externalProps}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
