'use client';
import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineCpuChip } from "react-icons/hi2";

function useSectionInView() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
            observer.disconnect();
        };
    }, []);

    return [ref, inView] as const;
}

export default function VisionGoalsSection() {
    const [ref, inView] = useSectionInView();

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-500"
        >
            {/* Background Decorative Accents */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full dark:bg-emerald-900/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className={`lg:col-span-5 space-y-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800/50">
                                <HiOutlineLightBulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                                    Our Vision & Journey
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                Empowering <br />
                                <span className="text-emerald-500">Future</span> <br />
                                Innovators Today.
                            </h2>

                            <div className="h-1.5 w-24 bg-emerald-500/20 rounded-full" />

                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                Transforming teaching and learning in Nepal — from passive learning to active creation. By combining simple prototyping and digital tools, we make learning more practical and future proof.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                                <HiOutlineLightBulb className="h-6 w-6" />
                            </div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 italic">
                                &quot;Our circular ecosystem ensures that every tool we provide is backed by expert support and leads to hands-on mastery.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Loop Design */}
                    <div className={`lg:col-span-7 relative transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}>
                        <div className="relative aspect-square w-full max-w-[600px] mx-auto">

                            {/* SVG Loop Arrows */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                                    </marker>
                                </defs>
                                {/* Arrow 1 to 2 */}
                                <path
                                    d="M 230 110 Q 340 150 330 230"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    markerEnd="url(#arrowhead)"
                                />
                                {/* Arrow 2 to 3 */}
                                <path
                                    d="M 300 310 Q 200 360 100 310"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    markerEnd="url(#arrowhead)"
                                />
                                {/* Arrow 3 to 1 */}
                                <path
                                    d="M 70 230 Q 60 150 170 110"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    markerEnd="url(#arrowhead)"
                                />
                            </svg>

                            {/* Step 1: Educator Support (Top Center) */}
                            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 group z-20">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute -top-12 whitespace-nowrap">
                                        <span className="bg-blue-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-blue-400/30">
                                            Educator Support
                                        </span>
                                    </div>
                                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500">
                                        <Image width={800} height={600} src="/images/home/vision-educator.webp" alt="Educator" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-2 h-10 w-10 rounded-xl bg-blue-600 text-white shadow-xl flex items-center justify-center">
                                        <HiOutlineUserGroup className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Digital Fabrication (Bottom Right) */}
                            <div className="absolute bottom-[10%] right-[0%] group z-20">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute -right-4 -top-8 whitespace-nowrap">
                                        <span className="bg-sky-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-sky-400/30">
                                            Digital Fabrication
                                        </span>
                                    </div>
                                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-sky-500">
                                        <Image width={800} height={600} src="/images/home/vision-3d-printing.webp" alt="Digital Tools" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-2 h-10 w-10 rounded-xl bg-sky-600 text-white shadow-xl flex items-center justify-center">
                                        <HiOutlineCpuChip className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Hands-on Learning (Bottom Left) */}
                            <div className="absolute bottom-[10%] left-[0%] group z-20">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute -left-4 -top-8 whitespace-nowrap">
                                        <span className="bg-emerald-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-emerald-400/30">
                                            Hands-on Learning
                                        </span>
                                    </div>
                                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-emerald-500">
                                        <Image width={800} height={600} src="/images/home/vision-learning.webp" alt="Learning" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-2 h-10 w-10 rounded-xl bg-emerald-600 text-white shadow-xl flex items-center justify-center">
                                        <HiOutlineLightBulb className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Center Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200/20 dark:border-slate-800/20 flex flex-col items-center justify-center">
                                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">Our</div>
                                    <div className="text-lg font-black text-slate-900 dark:text-white leading-tight">SYSTEM</div>
                                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mt-1">Cycle</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
