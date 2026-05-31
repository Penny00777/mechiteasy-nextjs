'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    HiOutlineLightBulb,
    HiOutlineCpuChip,
    HiOutlineCube,
    HiOutlineAcademicCap,
    HiOutlineClock,
    HiOutlineWrenchScrewdriver,
    HiOutlineBeaker,
    HiOutlineSparkles,
    HiOutlineCog,
    HiOutlinePaintBrush,
    HiOutlineGiftTop
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
const teamMembers = [
    {
        name: "Bivek Raymajhi",
        role: "Mechanical Engineer",
        image: "/images/team/bivek.png"
    },
    {
        name: "Bishal Gautam",
        role: "Mechanical Engineer",
        image: "/images/team/bishal.png"
    },
    {
        name: "Anmol Shrestha",
        role: "Mechanical Engineer",
        image: "/images/team/anmol.jpeg"
    },
    {
        name: "Sudip Niroula",
        role: "Fullstack Developer",
        image: "/images/team/sudip.png"
    }
];

export default function AboutUsPage() {
    const [introRef, introInView] = useSectionInView();
    const [teamRef, teamInView] = useSectionInView();
    const [phase1Ref, phase1InView] = useSectionInView();
    const [productsRef, productsInView] = useSectionInView();
    const [phase2Ref, phase2InView] = useSectionInView();
    const [timelineRef, timelineInView] = useSectionInView();

    const timelineData = [
        {
            time: "6+ months",
            desc: "Mastered supply chain logistics, equipment procurement, and advanced custom 3D printing solutions."
        },
        {
            time: "2 months",
            desc: "Scaled marketing and sales operations, successfully distributing products to a wide market."
        },
        {
            time: "Change in Focus",
            desc: "Transitioning toward broader educational impact."
        },
        {
            time: "Next 6 months",
            desc: "Implementing Mech It Easy in 15+ schools across the Kathmandu Valley."
        }
    ];

    const productsData = [
        {
            title: "STEM Kits Development",
            slug: "stem-kits-development",
            icon: HiOutlineSparkles,
            color: "emerald"
        },
        {
            title: "Functional Products",
            slug: "functional-products",
            icon: HiOutlineCog,
            color: "sky"
        },
        {
            title: "Customization Design Help",
            slug: "customization-design-help",
            icon: HiOutlinePaintBrush,
            color: "amber"
        },
        {
            title: "Master Molds",
            slug: "master-molds",
            icon: HiOutlineCube,
            color: "violet"
        },
        {
            title: "Lithophane-based Custom Lamps",
            slug: "lithophane-lamps",
            icon: HiOutlineLightBulb,
            color: "rose"
        },
        {
            title: "Collectibles and Figures",
            slug: "collectibles-and-figures",
            icon: HiOutlineGiftTop,
            color: "indigo"
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
                <div className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">

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

                {/* Our Team Section */}
                <div ref={teamRef as React.RefObject<HTMLDivElement>} className={`transition-all duration-1000 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} pt-20 pb-20`}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/30 shadow-sm mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                            Meet Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500'>Team</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            A dedicated group of engineers, designers, and educators working together to revolutionize hands-on learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-6 text-center border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] hover:border-emerald-200 dark:hover:border-emerald-900/50 flex flex-col items-center">
                                {/* Profile Image */}
                                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-md group-hover:border-emerald-100 dark:group-hover:border-emerald-900/50 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    {/* Uncomment and use Next/Image when actual photos are available */}
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">{member.role}</p>

                            </div>
                        ))}
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
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start transition-all duration-1000 ${phase1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="lg:col-span-5 space-y-10 sticky top-32">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-2 border border-sky-200 dark:border-sky-800/50 shadow-sm">
                            <HiOutlineCube className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                            Phase 1: 3D Printing &<br />Digital Fabrication
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            We began as a full-service 3D printing and product development company. Named <strong>Aakaran</strong>—meaning "giving imagination its shape"—we worked closely with clients to turn ideas into functional, manufacturable products.
                        </p>

                        <div className="p-8 rounded-2xl bg-sky-50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700/50 mt-6">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs text-sky-600 dark:text-sky-400">Key Services & Capabilities</h4>
                            <ul className="space-y-4">
                                {['Custom 3D printing (FDM & resin).', 'Rapid prototyping for functional & aesthetic parts.', 'Design-for-manufacturing (DFM) Guidance.'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                        <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        ref={productsRef as React.RefObject<HTMLDivElement>}
                        className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${productsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                    >
                        <h4 className="text-xl font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-6">
                            Notable Work & Products
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {productsData.map((product, idx) => {
                                const IconComp = product.icon;
                                return (
                                    <Link href={`/work/${product.slug}`} key={idx} className="block h-full">
                                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 transition-all duration-400 group cursor-pointer h-full flex flex-col items-start justify-between hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.2)] hover:border-emerald-400 dark:hover:border-emerald-500 relative overflow-hidden">
                                            <div>
                                                <div className="h-12 w-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-emerald-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-all duration-300 mb-6 shrink-0 ring-1 ring-slate-200 dark:ring-slate-700 group-hover:ring-emerald-300 dark:group-hover:ring-emerald-700">
                                                    <IconComp className="h-6 w-6" />
                                                </div>
                                                <h5 className="font-bold text-slate-900 dark:text-white leading-snug">{product.title}</h5>
                                            </div>
                                            <div className="flex w-full justify-end mt-5">
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-emerald-500 transition-colors duration-300">
                                                    See Details
                                                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
                            <p className="font-medium leading-relaxed">
                                This phase built strong expertise in 3D printing, product design, and work management, delivering functional solutions under real-world constraints.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phase 2 Section */}
                <div
                    ref={phase2Ref as React.RefObject<HTMLDivElement>}
                    className={`relative p-10 md:p-16 lg:p-20 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-xl transition-all duration-1000 ${phase2InView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-100'}`}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 text-emerald-400 border border-white/10 backdrop-blur-sm mb-4">
                                <HiOutlineAcademicCap className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                                Phase 2: Educational Infrastructure & Lab Setup
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Our transition toward education began when we successfully executed a lab setup for a diploma-level engineering college, where we installed and commissioned 3D printers and CNC machines.
                            </p>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                                <p className="text-emerald-300 font-medium italic leading-relaxed">
                                    "This project gave us firsthand insight into the gaps in practical, hands-on learning within Nepal's education system—particularly the lack of affordable, engaging, and curriculum-aligned lab resources."
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="w-full max-w-sm aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-sm p-12">
                                <div className="absolute inset-0 border-[1px] border-dashed border-white/20 rounded-full animate-[spin_120s_linear_infinite]" />
                                <Image src="/images/education/our%20journey.png" alt="Our Journey" fill className="object-cover rounded-full" />
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
