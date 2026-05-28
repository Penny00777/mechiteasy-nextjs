'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineWrench, HiOutlineAcademicCap, HiOutlineCheckCircle, HiChevronLeft, HiChevronRight, HiOutlineLightBulb, HiOutlinePresentationChartLine, HiOutlineTrophy, HiOutlineIdentification, HiOutlineQueueList, HiOutlineWrenchScrewdriver, HiOutlineArchiveBox, HiOutlineWifi, HiOutlinePaintBrush, HiOutlineCog6Tooth, HiOutlineScissors, HiOutlineUserGroup } from 'react-icons/hi2';

interface SliderImage { src: string; alt: string; }

const ImageSlider = ({ images }: { images: SliderImage[] }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  useEffect(() => { const timer = setInterval(next, 5000); return () => clearInterval(timer); }, [images.length]);

  return (
    <div className="relative group overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100 shadow-lg dark:border-slate-800 aspect-[4/3] w-full transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6),0_0_40px_-10px_rgba(59,130,246,0.6)] hover:border-emerald-500 dark:hover:border-emerald-400">
      <div className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, idx) => (<img key={idx} src={img.src} alt={img.alt} className="h-full w-full flex-shrink-0 object-cover" />))}
      </div>
      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white/40 z-10"><HiChevronLeft className="h-6 w-6" /></button>
      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white/40 z-10"><HiChevronRight className="h-6 w-6" /></button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {images.map((_, idx) => (<button key={idx} onClick={(e) => { e.stopPropagation(); setCurrent(idx); }} className={`h-1.5 rounded-full transition-all ${idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />))}
      </div>
    </div>
  );
};

function useInViewOnce(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, options ?? { threshold: 0.2 });
    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); observer.disconnect(); };
  }, []);
  return [ref, inView] as const;
}

export default function MechItEasyLabs() {
  const [labRef, labInView] = useInViewOnce({ threshold: 0.15 });
  const [programRef, programInView] = useInViewOnce({ threshold: 0.15 });
  const router = useRouter();

  const labImages: SliderImage[] = [
    { src: "/images/labs/3d-printing-lab.png", alt: "3D Printing Lab Setup" },
    { src: "/images/labs/lab-setup-1.jpeg", alt: "Lab Setup 1" },
    { src: "/images/labs/lab-setup-2.jpeg", alt: "Lab Setup 2" },
    { src: "/images/labs/lab-setup-3.jpeg", alt: "Lab Setup 3" },
    { src: "/images/labs/lab-setup-4.jpeg", alt: "Lab Setup 4" },
  ];
  const classImages: SliderImage[] = [
    { src: "/images/labs/lab-setup-2.jpeg", alt: "Digital Fabrication Class 1" },
    { src: "/images/home/home-1.avif", alt: "Students Learning" },
    { src: "/images/home/home-2.avif", alt: "Hands-on Training" },
    { src: "/images/labs/lab-setup-4.jpeg", alt: "Design Session" },
  ];

  return (
    <div className="space-y-24 pb-24">
      <section className="pt-8">
        <div ref={labRef as React.RefObject<HTMLDivElement>} className={`mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white/85 via-white/70 to-slate-50/70 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur transform transition-all duration-700 dark:border-slate-800/80 dark:from-slate-950/70 dark:via-slate-950/55 dark:to-slate-900/40 ${labInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col gap-8">
            <div onClick={() => router.push('/contact')} className="relative group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-800 transition-all duration-500 hover:shadow-emerald-500/20 cursor-pointer">
              <img src="/images/labs/3d-printing-lab.png" alt="3D Printing Lab Setup" className="w-full aspect-[21/9] object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span></span>
                  Full Implementation
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-4xl drop-shadow-md uppercase">Digital Fabrication Lab Setup</h3>
                <p className="mt-4 text-sm text-slate-100/90 max-w-xl drop-shadow-md hidden sm:block">We provide end-to-end digital fabrication lab setup solutions. From strategic planning to final installation, we transform classrooms into high-performance engineering hubs.</p>
              </div>
            </div>

            <div className="grid gap-8 pt-8">
              <div onClick={() => router.push('/contact')} className="group rounded-[2rem] border border-slate-100 bg-white/50 p-8 sm:p-12 shadow-sm dark:border-slate-800/50 dark:bg-slate-900/40 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl cursor-pointer">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300"><HiOutlineWrench className="h-6 w-6" /></div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">PROFESSIONAL LAB SETUP</h4>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-400">Complete technical integration for schools and colleges, ensuring your lab meets industrial standards for safety and performance.</p>
                    <ul className="grid gap-y-4 sm:grid-cols-2">
                      {[{ icon: HiOutlineQueueList, text: "Optimized Lab Layout" }, { icon: HiOutlineWrenchScrewdriver, text: "Expert Installation" }, { icon: HiOutlineArchiveBox, text: "Material Organization" }, { icon: HiOutlineWifi, text: "Digital Connectivity" }].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300"><item.icon className="h-5 w-5 text-emerald-500" />{item.text}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl"><ImageSlider images={labImages} /></div>
                </div>
              </div>
            </div>

            <div onClick={() => router.push('/contact')} className="group rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/60 transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl cursor-pointer">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300"><HiOutlineAcademicCap className="h-6 w-6" /></span>
                    <p className="text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-slate-50">INTRO CLASSES ON DIGITAL FABRICATION</p>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200/90">Intro sessions that build fundamentals in 3D printing and digital fabrication workflows.</p>
                  <ul className="grid gap-4 sm:grid-cols-2 pt-2">
                    {[{ Icon: HiOutlinePaintBrush, text: "2D & 3D CAD fundamentals" }, { Icon: HiOutlineCog6Tooth, text: "Hands-on machine operation" }, { Icon: HiOutlineScissors, text: "Slicing & material science" }, { Icon: HiOutlineUserGroup, text: "Project-based learning" }].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20"><item.Icon className="h-4 w-4" /></span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative"><ImageSlider images={classImages} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={programRef as React.RefObject<HTMLElement>} className={`mx-auto max-w-6xl space-y-12 px-8 transition-all duration-1000 ${programInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-500 dark:text-emerald-400">The Innovation Curriculum</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">3-Month Grade 9 Teaching Program</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">A fully managed digital fabrication curriculum delivered by mechanical engineers at your school.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { num: '01', color: 'indigo', Icon: HiOutlineLightBulb, title: 'Month 1: Tinkercad Foundations', items: ['Interface navigation & controls', 'Working with basic 3D shapes', 'Precise dimensioning of objects', 'First successful print session'] },
            { num: '02', color: 'emerald', Icon: HiOutlinePresentationChartLine, title: 'Month 2: Applied Design', items: ['Design linked to curriculum', 'Print and test physical models', 'Iterative design improvement', 'Measuring real engineering results'] },
            { num: '03', color: 'amber', Icon: HiOutlineTrophy, title: 'Month 3: Student Showcase', items: ['Individual project design sprint', 'Printing final custom designs', 'Final presentation to the class', 'Mini Innovation Showcase event'] },
          ].map((month) => (
            <div key={month.num} className="relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950/40 overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6),0_0_40px_-10px_rgba(59,130,246,0.6)] hover:border-emerald-500 dark:hover:border-emerald-400 group">
              <div className="absolute top-0 right-0 p-4 text-4xl font-black text-slate-100 dark:text-slate-900/50 transition-colors group-hover:text-emerald-500/20">{month.num}</div>
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-${month.color}-500 text-white shadow-lg shadow-${month.color}-500/30`}><month.Icon className="h-8 w-8" /></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{month.title}</h3>
              <ul className="mt-6 space-y-4">
                {month.items.map((item, i) => (<li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400"><HiOutlineCheckCircle className="h-5 w-5 flex-none text-emerald-500" /><span>{item}</span></li>))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-900 p-8 text-white dark:bg-slate-900/60 shadow-2xl">
            <div className="mb-4 flex items-center gap-3 text-emerald-400"><HiOutlineIdentification className="h-6 w-6" /><h4 className="text-lg font-bold uppercase tracking-wider">Program Logistics</h4></div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div><p className="text-slate-400">Target Students</p><p className="font-semibold">Grade 9 Groups</p></div>
              <div><p className="text-slate-400">Frequency</p><p className="font-semibold">2 Visits per week</p></div>
              <div><p className="text-slate-400">Duration</p><p className="font-semibold">2 Hours per session</p></div>
              <div><p className="text-slate-400">Lead By</p><p className="font-semibold">Mechanical Engineers</p></div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">All participating students receive an <strong>Aakaran Tech Certificate of Completion</strong> at the end of the program.</p>
          </div>
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/30 p-8 dark:border-indigo-900/30 dark:bg-indigo-950/20">
            <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">Why Grade 9 or Any Interested Grades?</h4>
            <p className="mt-4 text-sm leading-relaxed text-indigo-800/80 dark:text-indigo-200/70">We specifically work with Grade 9 to respect the academic schedule of Grade 10 students facing SEE exams, but our curriculum is flexible for any grade interested in digital fabrication. Students at this level are mature enough to grasp 3D design concepts while remaining free to fully engage with creative exploration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
