'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import VisionGoalsSection from '@/components/VisionGoalsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhyIsItNeededSection from '@/components/WhyIsItNeededSection';

function useInView() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.25 });
        const current = ref.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); observer.disconnect(); };
    }, []);
    return [ref, inView] as const;
}

export default function Home() {
    const router = useRouter();
    const [heroRef, heroInView] = useInView();

    return (
        <section className="space-y-16">
            <div ref={heroRef} className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden sm:min-h-[calc(100vh-6rem)]">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
                    <video className="absolute inset-0 h-full w-full object-cover opacity-70" autoPlay muted loop playsInline preload="auto">
                        <source src="https://3pz2dqcs9ado1sdm.public.blob.vercel-storage.com/videos/hero-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute inset-0 bg-slate-900/60" />
                <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
                    <div className="max-w-4xl space-y-6">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Nepal&apos;s First 3D Printing STEM Program</p>
                        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2] text-center">
                            Empowering STEM Education <br />
                            with 3D Printing <br />
                            <span className='bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent'>Technology.</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200/80 sm:text-lg">
                            Designed by Mechanical Engineers. Built for Nepali Schools. <br className="hidden sm:block" />
                            We turn curriculum into hands-on, visually intuitive projects aligned with core science concepts—integrating practical learning with digital fabrication.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <button type="button" onClick={() => router.push('/mech-it-easy-kits')} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] active:scale-95">
                                <span className="relative z-10">Explore Our Kits</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </button>
                            <button type="button" onClick={() => router.push('/mech-it-easy-labs')} className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95">
                                Lab Setup Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <VisionGoalsSection />
            <WhoWeAreSection />
            <WhyIsItNeededSection />
        </section>
    );
}
