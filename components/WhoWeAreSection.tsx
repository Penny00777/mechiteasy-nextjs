'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
    HiOutlineLightBulb,
    HiOutlineAcademicCap,
    HiOutlineSparkles,
    HiOutlineCog,
    HiOutlineBeaker
} from "react-icons/hi2";

interface CardData {
    label: string;
    heading: string;
    description: string;
    icon: React.ReactElement;
    tag: string;
    video: string;
}

export default function WhoWeAreSection() {
    const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

    const cards: CardData[] = [
        { label: "CORE STRENGTH", heading: "Engineering Foundation", description: "Professional experience in Digital fabrication, Prototyping, Product Development and Technical tutoring.", icon: <HiOutlineAcademicCap />, tag: "", video: "https://3pz2dqcs9ado1sdm.public.blob.vercel-storage.com/videos/timelapse-1.mp4" },
        { label: "PROVEN EXPERTISE", heading: "Manufacturing & Design", description: "Designing functional mechanical parts, molds, enclosures, and customized products.", icon: <HiOutlineCog />, tag: "", video: "https://3pz2dqcs9ado1sdm.public.blob.vercel-storage.com/videos/design and manufacturing.mp4" },
        { label: "STRATEGIC IMPACT", heading: "Institutional Success", description: "Equipped engineering college with fully operational FDM, SLA based 3D printer and desktop CNC end to end.", icon: <HiOutlineBeaker />, tag: "", video: "https://3pz2dqcs9ado1sdm.public.blob.vercel-storage.com/videos/institutional-success-2.mp4" }
    ];

    return (
        <section className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[950px] pointer-events-none z-0">
                <div className="absolute inset-0 card-header-grid opacity-[0.5] dark:opacity-[0.2]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-slate-950/40 dark:to-slate-950"></div>
            </div>

            <div className="relative z-10 pt-4 pb-16 lg:pt-8 lg:pb-24">

                {/* Video Showcase Section */}
                <div className="w-full relative py-12 lg:py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            {/* Text Explanation Column */}
                            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase border border-blue-100 dark:border-blue-800/50 shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    See It In Action
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                    Bring Mech-It-Easy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">To Your School</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Watch as digital ideas seamlessly transform into physical reality. Our high-precision additive manufacturing process builds objects layer by layer, unlocking infinite possibilities for creators, engineers, and educators alike.
                                </p>
                                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition hover:scale-105 hover:shadow-md cursor-default">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500">
                                            <HiOutlineSparkles className="w-4 h-4" />
                                        </div>
                                        Layer-by-Layer Precision
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition hover:scale-105 hover:shadow-md cursor-default">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-500">
                                            <HiOutlineLightBulb className="w-4 h-4" />
                                        </div>
                                        Rapid Prototyping
                                    </div>
                                </div>
                            </div>

                            {/* Video Column */}
                            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                                <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 bg-slate-900 group transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.4)]">
                                    <iframe
                                        className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                                        src="https://www.youtube.com/embed/K4bmwH9YL9Y?autoplay=1&mute=1&loop=1&playlist=K4bmwH9YL9Y"
                                        title="What is 3D Printing YouTube Short"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                    <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-[2.2rem] pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-[rgba(197,236,244,0.5)] dark:bg-blue-900/10 py-16 mb-12 border-y border-white/20 relative mt-8">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
                        <div className="flex items-center gap-3 text-blue-500">
                            <HiOutlineLightBulb className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tech Spotlight</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                                    WHAT IS <span className="text-blue-500">3D PRINTING?</span>
                                </h3>
                                <div className="p-10 rounded-[2.5rem] bg-white/60 dark:bg-slate-900/60 border border-white/20 dark:border-slate-800 relative group overflow-hidden shadow-sm backdrop-blur-sm">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        <HiOutlineSparkles className="h-24 w-24 text-blue-500" />
                                    </div>
                                    <p className="italic text-slate-700 dark:text-slate-200 font-medium relative z-10 leading-relaxed text-lg">
                                        3D Printing is the process of turning digital ideas into real objects — layer by layer.Simple in concept, but powerful enough to change how we learn, create, and innovate.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6 text-base text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                                <p>3D Printing has rapidly become one of the most exciting technologies of the modern world. From engineering and healthcare to architecture and education, its applications continue to grow every day.</p>
                                <p>A 3D printer creates objects by building them layer by layer using materials like filament or resin.  <span className="text-slate-900 dark:text-white font-black underline decoration-blue-500 decoration-2 underline-offset-4 font-bold">additive manufacturing</span>this technology allows creators, students, and innovators to transform imagination into reality with precision and creativity.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div ref={statsRef} className={`card-section-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {cards.map((card, index) => (
                            <div key={index} className="card-item group">
                                <div className="card-visual-placeholder">
                                    <video src={card.video} autoPlay muted loop playsInline className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent opacity-60"></div>
                                    <div className="card-proof-tag">{card.tag}</div>
                                </div>
                                <div className="card-body">
                                    <div className="card-label">{card.label}</div>
                                    <div className="card-accent-line"></div>
                                    <div className="card-icon-wrapper">
                                        {React.cloneElement(card.icon, { className: "card-icon-inner" })}
                                    </div>
                                    <h4 className="card-heading">{card.heading}</h4>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .card-header-grid { background-image: linear-gradient(rgba(29, 184, 142, 0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(29, 184, 142, 0.15) 1.5px, transparent 1.5px); background-size: 40px 40px; animation: grid-move 60s linear infinite; }
                @keyframes grid-move { 0% { background-position: 0 0; } 100% { background-position: 400px 400px; } }
                .card-section-wrapper { display: grid; }
                .card-item { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); overflow: hidden; transition: all 0.25s ease; display: flex; flex-direction: column; position: relative; }
                .card-item:hover { transform: translateY(-6px); box-shadow: 0 8px 28px rgba(0,0,0,0.12); }
                .card-item::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #1DB88E; opacity: 0; transition: opacity 0.2s ease; z-index: 20; }
                .card-item:hover::after { opacity: 1; }
                .card-visual-placeholder { position: relative; height: 240px; width: 100%; overflow: hidden; background: #0D1B2A; border-top-left-radius: 16px; border-top-right-radius: 16px; }
                .card-proof-tag { position: absolute; bottom: 12px; left: 12px; background: rgba(13, 27, 42, 0.82); color: #ffffff; font-size: 11px; font-weight: 500; padding: 5px 10px; border-radius: 20px; z-index: 10; backdrop-filter: blur(4px); }
                .card-body { padding: 32px 28px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
                .card-label { color: #1DB88E; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
                .card-accent-line { width: 32px; height: 2px; background: #1DB88E; margin-top: 8px; margin-bottom: 12px; }
                .card-icon-wrapper { width: 52px; height: 52px; background: #E8F8F3; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 4px; }
                .card-icon-inner { width: 36px; height: 36px; color: #1DB88E; }
                .card-heading { color: #0D1B2A; font-weight: 700; font-size: 20px; margin-top: 18px; line-height: 1.3; text-transform: none; }
                .card-description { color: #5A6A7A; font-size: 14px; line-height: 1.65; margin-top: 10px; }
                @media (max-width: 1024px) { .card-section-wrapper { grid-template-columns: repeat(2, 1fr); } .card-item:last-child { grid-column: span 2; max-width: calc(50% - 12px); margin: 0 auto; } }
                @media (max-width: 640px) { .card-section-wrapper { grid-template-columns: 1fr; gap: 20px; } .card-item:last-child { grid-column: auto; max-width: 100%; } }
            `}</style>
        </section>
    );
}
