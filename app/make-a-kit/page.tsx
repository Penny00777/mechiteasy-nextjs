'use client';
import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';

function useInViewOnce(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, options ?? { threshold: 0.2 });
    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); observer.disconnect(); };
  }, []);
  return [ref, inView] as const;
}

export default function MakeAKit() {
  const [headerRef, headerInView] = useInViewOnce({ threshold: 0.15 });
  const steps = [
    { id: 1, title: 'Download', description: 'Pick a classroom-ready project file from our curated library—no CAD experience needed. Each file is tagged by subject and difficulty.', image: '/images/home/home-1.avif' },
    { id: 2, title: 'Print & build', description: 'Send it to a 3D printer or use our printable templates. Students clip, screw, or snap parts together following clear visual instructions.', image: '/images/home/home-2.avif' },
    { id: 3, title: 'Learn & have fun', description: 'Run quick experiments, tweak variables, and encourage "what if?" questions—turning each print into a mini-lab in your classroom.', image: '/images/home/home-3.webp' },
  ];

  return (
    <section className="space-y-12">
      <div className={`mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both`}>
        <p className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-sm shadow-primary-500/30">How print works?</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Turn digital files into real classroom kits in three calm steps.</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">The same process works whether you&apos;re printing in your lab or downloading ready-to-cut templates.</p>
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-24 pb-32">
        <div className="pointer-events-none absolute left-0 top-0 h-[360px] w-full overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-32 w-full" aria-hidden="true">
            <path fill="#ffffff" d="M0,160L80,170C160,180,320,200,480,186.7C640,173,800,127,960,122.7C1120,117,1280,149,1360,165.3L1440,181L1440,320L0,320Z" />
          </svg>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any; index: number }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.1 });
  
  return (
    <div ref={ref} className={`flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-900/5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: inView ? `${index * 80}ms` : '0ms' }}>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm shadow-slate-900/40">{step.id}</div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-500">Step {step.id}</p>
          <h2 className="text-base font-semibold text-slate-900">{step.title}</h2>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
      <div className="mt-4 overflow-hidden rounded-2xl bg-slate-100/90">
        <div className="group relative">
          <Image width={800} height={600} src={step.image} alt={step.title} priority={index === 0} className="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-44 md:h-40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-slate-900/0 to-primary-500/20" />
        </div>
      </div>
    </div>
  );
}
