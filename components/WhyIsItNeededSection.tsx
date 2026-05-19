'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineHandRaised, HiOutlineDocumentMagnifyingGlass, HiOutlineArrowTrendingDown, HiOutlineClipboardDocumentCheck, HiOutlineCpuChip, HiOutlineLifebuoy } from "react-icons/hi2";

function useSectionInView() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.25 });
        const current = ref.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); observer.disconnect(); };
    }, []);
    return [ref, inView] as const;
}

export default function WhyIsItNeededSection() {
    const [ref, inView] = useSectionInView();
    const problems = [
        { title: 'No hands-on learning', desc: "Students learn theory but never apply it to real objects or machines.", icon: <HiOutlineHandRaised className="h-6 w-6" /> },
        { title: 'Curriculum is abstract', desc: "Pulleys, gears, and circuits stay on paper — never in students' hands.", icon: <HiOutlineDocumentMagnifyingGlass className="h-6 w-6" /> },
        { title: 'Skills gap at graduation', desc: "Students graduate without the practical skills Nepal's economy needs.", icon: <HiOutlineArrowTrendingDown className="h-6 w-6" /> }
    ];
    const solutions = [
        { title: 'Curriculum Aligned', desc: "Every kit maps exactly to Nepal's CDC science syllabus for Grades 6–10.", icon: <HiOutlineClipboardDocumentCheck className="h-6 w-6" /> },
        { title: 'Engineer Designed', desc: "Built by mechanical engineers — not imported toys adapted for Nepal.", icon: <HiOutlineCpuChip className="h-6 w-6" /> },
        { title: 'Support Backed', desc: "Spare parts, teacher training, and 3-month post-setup support included.", icon: <HiOutlineLifebuoy className="h-6 w-6" /> }
    ];

    return (
        <section ref={ref} className={`mx-auto w-full max-w-6xl px-4 pb-8 pt-2 text-left sm:px-6 lg:px-8 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-16 lg:space-y-24">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <p className="text-xl font-bold uppercase tracking-[0.25em] text-red-500/80">The Problem</p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Students Memorize Science.{' '}<br className="hidden sm:block" />They Never Experience It.</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {problems.map((item, i) => (
                            <div key={i} className="group relative rounded-2xl border-2 border-slate-100 bg-white p-6 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] hover:border-red-400 dark:border-slate-800 dark:bg-slate-950/40">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 dark:bg-red-950/30">{item.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-500/30">
                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <p className="text-xl font-bold uppercase tracking-[0.25em] text-emerald-500">Our Solution</p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Mech It Easy <span className="text-cyan-600 dark:text-cyan-400">Kits</span> and <span className="text-cyan-600 dark:text-cyan-400">Labs</span></h2>
                        <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400">We bring textbook concepts and student ideas to life — right in the classroom.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {solutions.map((item, i) => (
                            <div key={i} className="group relative rounded-2xl border-2 border-slate-100 bg-white p-6 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6),0_0_40px_-10px_rgba(59,130,246,0.6)] hover:border-emerald-500 dark:border-slate-800 dark:bg-slate-950/40">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30">{item.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
