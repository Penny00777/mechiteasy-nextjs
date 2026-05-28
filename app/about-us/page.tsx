'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    HiOutlineLightBulb,
    HiOutlineCpuChip,
    HiOutlineCube,
    HiOutlineAcademicCap,
    HiOutlineClock,
    HiOutlineWrenchScrewdriver,
    HiOutlineBeaker,
    HiOutlineSparkles,
    HiOutlineCog
} from "react-icons/hi2";

function useSectionInView() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLElement | HTMLDivElement>(null);

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

export default function AboutUsPage() {
    const [heroRef, heroInView] = useSectionInView();
    const [introRef, introInView] = useSectionInView();
    const [phase1Ref, phase1InView] = useSectionInView();
    const [productsRef, productsInView] = useSectionInView();
    const [phase2Ref, phase2InView] = useSectionInView();
    const [timelineRef, timelineInView] = useSectionInView();

    const timelineData = [
        {
            time: "7+ months",
            desc: "Supplier sourcing, machine import, resin printing mastery, custom product problem solving - STL edits, painting etc."
        },
        {
            time: "2 months",
            desc: "Proper marketing and sales focused - around 2 lakhs of products sold."
        },
        {
            time: "Change in Focus",
            desc: "Transitioning toward broader educational impact."
        },

        {
            time: "Next 6 months",
            desc: "Targeting 15+ schools in Kathmandu valley and successfully implementing Mech It Easy."
        }
    ];

    const productsData = [
        {
            title: "STEM Kits Development",
            slug: "stem-kits-development"
        },
        {
            title: "Functional Products",
            slug: "functional-products"
        },
        {
            title: "Customization Design Help",
            slug: "customization-design-help"
        },
        {

            title: "Master Molds",
            slug: "master-molds"
        },
        {
            title: "Lithophane-based Custom Lamps",
            slug: "lithophane-lamps"
        },
        {
            title: "Collectibles and Figures",
            slug: "collectibles-and-figures"
        }
    ];

    return (
        <div className="w-full relative">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full dark:bg-emerald-900/20" />
                <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full dark:bg-sky-900/20" />
            </div>
            {/* Full Width Top Grid Animation */}
            <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[100vw] h-[700px] pointer-events-none z-0">
                <div className="absolute inset-0 card-header-grid opacity-[0.5] dark:opacity-[0.2]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-slate-950/40 dark:to-slate-950"></div>
            </div>

            <div className="w-full space-y-16 lg:space-y-20 relative z-10 pt-0">
                {/* Hero / Intro Section Text */}
                <div
                    ref={heroRef as React.RefObject<HTMLDivElement>}
                    className={`relative pt-8 pb-16 lg:pt-12 lg:pb-24 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >

                    {/* Intro Text */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                        <div className="space-y-6 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Our Story</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95] uppercase">
                                Engineers on a mission <br /> to change how <span className="text-emerald-500">Nepal learns.</span>
                            </h2>
                            <div className="h-[1.5px] w-24 bg-emerald-500/30 rounded-full" />
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                                We're Aakaran Tech — a Nepal-based team of engineering graduates with hands-on experience in 3D printing, laser cutting, and CNC machining. What started as a fabrication service has grown into a mission: making science and math tangible for every Nepali classroom.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Journey Title */}
                <div className="text-center">
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Our Journey
                    </h2>
                    <div className="h-1.5 w-24 bg-emerald-500/20 rounded-full mx-auto mt-6" />
                </div>

                {/* Phase 1 Section */}
                <div
                    ref={phase1Ref as React.RefObject<HTMLDivElement>}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-1000 ${phase1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="lg:col-span-5 space-y-8 sticky top-32">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-2 border border-sky-200 dark:border-sky-800/50 shadow-sm">
                            <HiOutlineCube className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                            Phase 1: 3D Printing &<br />Digital Fabrication
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            We began as a full-service 3D printing and product development company. Named <strong>Aakaran</strong>—meaning "giving imagination its shape"—we worked closely with clients to turn ideas into functional, manufacturable products.
                        </p>

                        <div className="p-6 rounded-2xl bg-sky-50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700/50">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-xs text-sky-600 dark:text-sky-400">Key Services & Capabilities</h4>
                            <ul className="space-y-3">
                                {['Custom 3D printing (FDM & resin).', 'Rapid prototyping for functional & aesthetic parts.', 'Design-for-manufacturing (DFM) Guidance.'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        ref={productsRef as React.RefObject<HTMLDivElement>}
                        className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${productsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                    >
                        <h4 className="text-xl font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                            Notable Work & Products
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {productsData.map((product, idx) => (
                                <Link href={`/work/${product.slug}`} key={idx}>
                                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700/50 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-sky-500 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition-colors mb-4">
                                            <HiOutlineWrenchScrewdriver className="h-5 w-5" />
                                        </div>
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-2">{product.title}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
                            <p className="font-medium">
                                This phase built strong expertise in 3D printing, product design, and work management, delivering functional solutions under real-world constraints.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phase 2 Section */}
                <div
                    ref={phase2Ref as React.RefObject<HTMLDivElement>}
                    className={`relative p-8 md:p-12 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-xl transition-all duration-1000 ${phase2InView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 text-emerald-400 border border-white/10 backdrop-blur-sm mb-2">
                                <HiOutlineAcademicCap className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                                Phase 2: Educational Infrastructure & Lab Setup
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Our transition toward education began when we successfully executed a lab setup for a diploma-level engineering college, where we installed and commissioned 3D printers and CNC machines.
                            </p>
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                                <p className="text-emerald-300 font-medium italic">
                                    "This project gave us firsthand insight into the gaps in practical, hands-on learning within Nepal's education system—particularly the lack of affordable, engaging, and curriculum-aligned lab resources."
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="w-full max-w-sm aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-sm p-8">
                                <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
                                <HiOutlineBeaker className="h-32 w-32 text-white/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <HiOutlineAcademicCap className="h-20 w-20 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div
                    ref={timelineRef as React.RefObject<HTMLDivElement>}
                    className={`max-w-4xl mx-auto space-y-12 transition-all duration-1000 ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="text-center">
                        <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-3">
                            <HiOutlineClock className="h-8 w-8 text-emerald-500" />
                            Our Timeline So Far
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform sm:-translate-x-1/2" />

                        <div className="space-y-12">
                            {timelineData.map((item, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <div key={idx} className={`relative flex items-center sm:justify-center ${!isEven ? 'sm:flex-row-reverse' : ''}`}>

                                        {/* Timeline Dot */}
                                        <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-950 transform -translate-x-1/2 z-10" />

                                        {/* Content Card */}
                                        <div className={`ml-12 sm:ml-0 w-full sm:w-[45%] p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow
                                            ${isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'}
                                        `}>
                                            <span className="inline-block px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider mb-3">
                                                {item.time}
                                            </span>
                                            <p className="text-slate-700 dark:text-slate-300 font-medium">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .card-header-grid { background-image: linear-gradient(rgba(29, 184, 142, 0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(29, 184, 142, 0.15) 1.5px, transparent 1.5px); background-size: 40px 40px; animation: grid-move 60s linear infinite; }
                @keyframes grid-move { 0% { background-position: 0 0; } 100% { background-position: 400px 400px; } }
            `}</style>
        </div>
    );
}
