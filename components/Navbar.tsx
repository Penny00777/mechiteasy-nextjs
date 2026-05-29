'use client';
import Image from 'next/image';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiFacebook, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  to: string;
  label: string;
}

interface SocialLink {
  name: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/mech-it-easy-kits', label: 'Mech It Easy Kits' },
  { to: '/mech-it-easy-labs', label: 'Mech It Easy Labs' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/aakaran.np/', Icon: FiInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589092834686', Icon: FiFacebook },
  { name: 'LinkedIn', href: '#', Icon: FiLinkedin },
];

const iconButtonClass =
  'flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary-400 hover:text-primary-600';

const socialLinkClass = 'text-slate-500 transition hover:text-primary-600';

interface IndicatorStyle {
  left: number;
  width: number;
  top: number;
  height: number;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navPillsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle | null>(null);

  const logoSrc = '/logos/white-red-logo-no-bg.webp';

  useEffect(() => {
    if (!navPillsRef.current) return;

    const activeIndex = navItems.findIndex((item) => item.to === pathname);
    if (activeIndex === -1) return;

    const pills = navPillsRef.current.querySelectorAll('[data-nav-pill="true"]');
    const el = pills[activeIndex] as HTMLElement;
    if (!el) return;

    const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = el;
    setIndicatorStyle({
      left: offsetLeft,
      width: offsetWidth,
      top: offsetTop,
      height: offsetHeight,
    });
  }, [pathname]);

  return (
    <header
      className="sticky inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur shadow-sm"
    >
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 sm:h-24"
      >
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Go to homepage"
            >
              <Image width={800} height={600} 
                src={logoSrc}
                alt="Company logo"
                loading="lazy"
                className="h-9 sm:h-11 w-auto"
              />
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div
              ref={navPillsRef}
              className="relative inline-flex items-center rounded-full border border-slate-200 bg-slate-50/50 p-1.5 dark:border-slate-800 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              {indicatorStyle && (
                <div
                  className="pointer-events-none absolute rounded-full bg-emerald-500/30 shadow-[0_4px_12px_rgba(16,185,129,0.25)] transition-all duration-300 ease-out backdrop-blur-[2px]"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                    top: indicatorStyle.top,
                    height: indicatorStyle.height,
                  }}
                />
              )}
              {navItems.map((item) => {
                const isActive = item.to === pathname;
                return (
                  <Link key={item.to} href={item.to} className="group">
                    <span
                      data-nav-pill="true"
                      className={`mx-0.5 relative z-10 block rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 transform group-hover:scale-110 ${isActive
                        ? 'text-emerald-700 dark:text-primary-700'
                        : 'text-slate-600 hover:text-primary-600 dark:text-slate-700 dark:hover:text-primary-600'
                        }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={socialLinkClass}
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className={iconButtonClass}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle navigation</span>
              {menuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 shadow-sm backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = item.to === pathname;
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-md px-3 py-2 text-left text-sm font-medium transition ${isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-primary-50 hover:text-primary-700'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 flex items-center space-x-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={socialLinkClass}
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
