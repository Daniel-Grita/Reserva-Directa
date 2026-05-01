'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/constants';
import { useActiveSection } from '@/lib/useActiveSection';
import { LinkButton } from './ui/Button';

function getAnchorId(href: string): string | null {
  if (href.startsWith('#')) return href.slice(1);
  if (href.startsWith('/#')) return href.slice(2);
  return null;
}

export default function Navbar() {
  const sectionIds = navItems
    .map((item) => getAnchorId(item.href))
    .filter((id): id is string => id !== null);
  const active = useActiveSection(sectionIds);

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

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

        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => {
            const id = getAnchorId(item.href);
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

        <LinkButton href="#contacto" variant="primary" className="hidden lg:inline-block">
          Agendar Reunião
        </LinkButton>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-input text-navy hover:bg-n-100 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <div
        ref={panelRef}
        id="mobile-nav-panel"
        hidden={!open}
        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white border-t border-n-150 overflow-y-auto"
      >
        <div className="px-6 sm:px-8 py-6 flex flex-col gap-1">
          {navItems.map((item, i) => {
            const id = getAnchorId(item.href);
            const isActive = id !== null && id === active;
            return (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu}
                className={`text-display-xs font-display py-3 border-b border-n-150 transition-colors duration-base ${
                  isActive ? 'text-orange' : 'text-navy hover:text-orange'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <LinkButton
            href="#contacto"
            variant="primary"
            className="mt-6 w-full text-center"
            onClick={closeMenu}
          >
            Agendar Reunião
          </LinkButton>
        </div>
      </div>
    </nav>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
