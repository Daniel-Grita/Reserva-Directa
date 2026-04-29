'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/lib/constants';
import { useActiveSection } from '@/lib/useActiveSection';
import { LinkButton } from './ui/Button';

export default function Navbar() {
  const sectionIds = navItems
    .map((item) => (item.href.startsWith('#') ? item.href.slice(1) : null))
    .filter((id): id is string => id !== null);
  const active = useActiveSection(sectionIds);

  return (
    <nav className="fixed top-0 inset-x-0 h-[72px] z-30 bg-white shadow-nav">
      <div className="h-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-16 lg:px-section-x flex items-center justify-between">
        <Link href="/" aria-label="Reserva Direta — Início" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Reserva Direta"
            width={295}
            height={102}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const id = item.href.startsWith('#') ? item.href.slice(1) : null;
            const isActive = id !== null && id === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-button font-body transition-colors duration-base ${
                  isActive ? 'text-navy' : 'text-n-900 hover:text-navy'
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] bg-orange rounded-full origin-center transition-transform duration-base motion-reduce:transition-none ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <LinkButton href="#contacto" variant="primary" className="hidden sm:inline-block">
          Agendar Reunião
        </LinkButton>
      </div>
    </nav>
  );
}
