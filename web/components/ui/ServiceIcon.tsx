import type { ReactElement } from 'react';

type IconName = 'palette' | 'globe' | 'phone' | 'bolt' | 'tools' | 'handshake';

const paths: Record<IconName, ReactElement> = {
  palette: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <path d="M12 21c1.5 0 2-1.2 2-2.2 0-1-.8-1.3-.8-2.3 0-1 .8-1.5 1.8-1.5h1.2c1.6 0 2.8-1.3 2.8-2.9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  bolt: <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />,
  tools: (
    <>
      <path d="M14.7 6.3a3 3 0 1 0 3 3l3-3-2-2-3 3a3 3 0 0 0-1-1z" />
      <path d="M6 13l5 5-3 3-5-5z" />
      <path d="M11 13l3-3" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17l-2 2a1.5 1.5 0 0 1-2.1-2.1l3.5-3.5" />
      <path d="M14 16l2.5 2.5a1.5 1.5 0 0 0 2.1-2.1L16 14" />
      <path d="M3 10l4-4 4 2 4-2 6 4-3 3-3-2-3 2-2-2-3 3-2-2z" />
    </>
  ),
};

export default function ServiceIcon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
