'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <Navbar />
      <ScrollToTop />
      <main
        className={
          isHome
            ? 'pb-16'
            : 'mx-auto flex max-w-6xl flex-col gap-24 px-4 py-16 sm:px-6 lg:px-8'
        }
      >
        <div key={pathname} className="route-transition">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
