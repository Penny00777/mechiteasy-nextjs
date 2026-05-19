'use client';

import React from 'react';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineExclamationCircle } from 'react-icons/hi2';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:px-8">
      <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all flex items-center gap-2">
          <HiOutlineHome className="h-5 w-5" />
          Go back home
        </Link>
        <Link href="/contact" className="text-sm font-semibold text-slate-900 dark:text-slate-300">
          Contact support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
