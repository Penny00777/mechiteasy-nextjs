'use client';

import React from 'react';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

interface FooterLink {
  label: string;
  to: string;
  external?: boolean;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const year = new Date().getFullYear();
  const logoSrc = '/handshakelogo.png';

  const footerLinks: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Kits', to: '/mech-it-easy-kits' },
        { label: 'Labs', to: '/mech-it-easy-labs' },
        { label: 'Contact', to: '/contact' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: '3D Printing', to: '/3d-printing-services' },
        { label: 'Make a Kit', to: '/make-a-kit' },
        { label: 'FAQ', to: '/contact#faq' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Instagram', to: 'https://www.instagram.com/aakaran.np/', external: true, icon: <FiInstagram /> },
        { label: 'Facebook', to: 'https://www.facebook.com/profile.php?id=61589092834686', external: true, icon: <FiFacebook /> },
        { label: 'LinkedIn', to: '#', external: true, icon: <FiLinkedin /> },
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 lg:px-8 border-t border-slate-900 transition-colors duration-500">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoSrc}
                alt="Mech It Easy"
                loading="lazy"
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Mech It Easy
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm">
              Hands-on STEM kits, built for Nepal&apos;s classrooms. Empowering the next generation of engineers through hand-on experimentation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {footerLinks[2].links.map((social) => (
                <a
                  key={social.label}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, idx) => (
              idx < 2 ? (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.to}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium text-slate-500">
            © {year} Mech It Easy. A subsidiary of Aakaran Tech.
          </p>
          <div className="flex gap-8 text-[11px] font-medium text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
