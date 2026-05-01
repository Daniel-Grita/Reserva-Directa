import Link from 'next/link';
import { footer } from '@/lib/constants';

type SocialIconName = 'facebook' | 'instagram' | 'youtube';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-section-y-sm">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12 mb-12">
          <div>
            <h3 className="text-display-xs font-display text-white mb-2">
              {footer.brand}
            </h3>
            <p className="text-body-sm font-body text-white/60 max-w-xs mb-6">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              {footer.socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center text-white/70 hover:text-white transition-colors duration-base"
                >
                  <SocialIcon name={s.icon as SocialIconName} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((column, i) => (
            <div key={i}>
              <h4 className="text-label font-body uppercase tracking-label text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-body-sm font-body text-white/60 hover:text-white transition-colors duration-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.text?.map((entry, j) => (
                  <li key={`t-${j}`} className="text-body-sm font-body text-white/60">
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-caption font-body text-white/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: SocialIconName }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true as const,
  };
  if (name === 'facebook') {
    return (
      <svg {...props}>
        <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.7V14h2.7v8h3.1z" />
      </svg>
    );
  }
  if (name === 'instagram') {
    return (
      <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2C.4 9.1.4 12 .4 12s0 2.9.6 4.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1c.6-1.9.6-4.8.6-4.8s0-2.9-.6-4.8zM9.7 15.5v-7l5.8 3.5-5.8 3.5z" />
    </svg>
  );
}
