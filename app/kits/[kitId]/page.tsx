'use client';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FiArrowLeft, FiZap, FiCpu, FiCheckCircle, FiPlay, FiLayers,
  FiPackage, FiSettings, FiChevronLeft, FiChevronRight,
  FiDownloadCloud, FiFileText
} from 'react-icons/fi';
import { kitsData } from '../kitsData';

const Section = ({ title, id, children, className = "" }: { title: string; id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-12 border-t border-slate-100 first:border-0 dark:border-slate-800/50 ${className}`}>
    <h2 className="text-3xl font-extrabold text-slate-900 mb-12 dark:text-slate-50 text-center tracking-tight uppercase">{title}</h2>
    {children}
  </section>
);

export default function KitDetails() {
  const params = useParams();
  const router = useRouter();
  const kitId = params.kitId as string;
  const kit = kitsData[kitId];
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImg, setCurrentImg] = useState(0);
  const [showDownloads, setShowDownloads] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleClickOutside = () => setShowDownloads(false);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  if (!kit) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Kit not found</h1>
        <Link href="/mech-it-easy-kits" className="text-primary-600 hover:underline">Back to all kits</Link>
      </div>
    );
  }

  const images = kit.images || (kit.image ? [kit.image] : []);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  const navItems = [
    { label: 'Overview', id: 'overview' },
    { label: "What's Included", id: 'included' },
    { label: 'Learning', id: 'learning' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <button onClick={() => router.back()} className="group mb-6 flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400">
          <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />Back to Kits
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 animate-bounce opacity-10 dark:opacity-20 text-primary-600" style={{ animationDuration: '3s' }}><FiZap size={120} /></div>
          <div className="absolute bottom-1/4 right-10 animate-spin-slow opacity-10 dark:opacity-20 text-primary-600" style={{ animationDuration: '10s' }}><FiSettings size={150} /></div>
          <div className="absolute top-1/2 right-1/4 animate-pulse opacity-5 text-primary-600"><FiCpu size={200} /></div>
          <div className="absolute -bottom-10 left-1/3 opacity-10 text-primary-600"><FiLayers size={180} /></div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <div className="group relative w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl shadow-slate-300/50 dark:bg-slate-900 dark:shadow-none transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6),0_0_40px_-10px_rgba(59,130,246,0.6)] hover:border-emerald-500 dark:hover:border-emerald-400 border-2 border-transparent">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              {images.map((img, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} transform transition-transform`}>
                  <Image width={800} height={600} src={img} alt={`${kit.name} ${idx + 1}`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                </div>
              ))}

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-left pointer-events-none">
                <div className="max-w-2xl">
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-primary-600/30">
                      <kit.Icon className="h-3 w-3" />{kit.subject}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">{kit.gradeLevel}</span>
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl drop-shadow-sm leading-[1.1]">{kit.name}</h1>
                  <p className="mt-4 text-lg font-medium text-slate-200/90 sm:text-xl max-w-xl">{kit.subTitle}</p>
                </div>
              </div>

              {kit.downloads && (
                <div className="absolute bottom-8 right-8 z-20" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <button onClick={() => setShowDownloads(!showDownloads)} className="flex items-center gap-2 rounded-2xl bg-primary-600/20 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl border border-primary-600/30 transition-all hover:bg-primary-600/40 hover:scale-[1.05] active:scale-[0.95] shadow-lg shadow-primary-900/20">
                      <FiDownloadCloud className="h-5 w-5" />Get STL Files
                    </button>
                    {showDownloads && (
                      <div className="absolute bottom-full right-0 mb-4 w-72 rounded-3xl bg-white p-4 shadow-2xl shadow-slate-900/50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Available Resources</p>
                        <div className="mt-2 space-y-1">
                          {kit.downloads.map((file, i) => (
                            <a key={i} href={file.url} className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 group">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400"><FiFileText className="h-4 w-4" /></div>
                                <div>
                                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{file.name || file.text}</p>
                                  <p className="text-[10px] text-slate-400 uppercase font-medium">{file.type} • {file.size}</p>
                                </div>
                              </div>
                              <FiDownloadCloud className="h-4 w-4 text-slate-300 transition-colors group-hover:text-primary-600" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20 opacity-0 group-hover:opacity-100"><FiChevronLeft className="h-6 w-6" /></button>
                  <button onClick={nextImg} className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20 opacity-0 group-hover:opacity-100"><FiChevronRight className="h-6 w-6" /></button>
                  <div className="absolute top-6 right-6 flex gap-2">
                    {images.map((_, idx) => (<button key={idx} onClick={() => setCurrentImg(idx)} className={`h-1 rounded-full transition-all ${idx === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-medium italic">
              {kitId === 'hand-crank-generator' ? "Transform physical motion into electrical energy and back again with this hands-on exploration of electromagnetism." : kit.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Sub-Nav */}
      <div className="sticky top-0 z-30 mt-16 border-y border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center gap-8 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-bold transition-all ${activeTab === item.id ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>{item.label}</button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="space-y-4">
            <Section title="Why it's awesome" id="overview">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-10">{kit.introduction || kit.content}</p>
              {kit.coreConcept?.highlights ? (
                <div className="grid gap-6 sm:grid-cols-3">
                  {kit.coreConcept.highlights.map((h, i) => (
                    <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400"><h.icon className="h-5 w-5" /></div>
                      <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-50">{h.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{h.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {kit.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                      <FiCheckCircle className="text-emerald-500 flex-none" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </Section>

            <Section title="What's inside?" id="included">
              <div className="rounded-[2rem] bg-white p-8 border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                <ul className="grid gap-6 sm:grid-cols-2">
                  {(kit.whatsIncluded || kit.features || []).map((item, i) => {
                    const isObject = typeof item === 'object';
                    const text = isObject ? (item as { text: string }).text : item as string;
                    const Icon = isObject ? (item as { icon: React.ComponentType<{ className?: string }> }).icon : FiPackage;
                    return (
                      <li key={i} className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300 group">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-primary-50 group-hover:text-primary-500 dark:bg-slate-800 dark:group-hover:bg-primary-950"><Icon className="h-4 w-4" /></div>
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Section>

            <Section title="The Learning Experience" id="learning">
              <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-2xl hover:border-emerald-500/20">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-[45%] aspect-square sm:aspect-video lg:aspect-video overflow-hidden rounded-[2.5rem] relative group/gif shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-500">
                    {kit.learningMedia?.type === 'video' ? (
                      <video src={kit.learningMedia.src} autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-700 group-hover/gif:scale-110" />
                    ) : (
                      <Image width={800} height={600} src={kit.learningMedia?.src || "/gifs/led-hand-crank-gen.gif"} alt="Hands-on Learning Experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover/gif:scale-110" />
                    )}
                    <div className="hidden flex-col items-center justify-center text-slate-400 p-8 text-center space-y-4">
                      <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><FiPlay className="h-8 w-8 opacity-20" /></div>
                    </div>
                    <div className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-emerald-500/30 rounded-br-lg" />
                  </div>

                  <div className="w-full lg:w-[40%] space-y-6">
                    {(kit.objectives || kit.features || []).map((obj, i) => {
                      const isObject = typeof obj === 'object';
                      const text = isObject ? (obj as { text: string }).text : obj as string;
                      const Icon = isObject ? (obj as { icon: React.ComponentType<{ className?: string }> }).icon : FiCheckCircle;
                      return (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-400 dark:group-hover:bg-primary-600 group-hover:rotate-12"><Icon className="h-5 w-5" /></div>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pt-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
