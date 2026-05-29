'use client';
import Image from 'next/image';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiZap, FiCpu, FiArrowRight, FiX, FiSend, FiActivity } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const kitsData = [
  { id: 'hand-crank-generator', name: 'Hand Crank Generator STEM Kit (Grade 9–10 Focus)', image: '/images/education/hand-crank-generator.webp', Icon: FiZap, summary: 'Master the fundamental principle of electromagnetism through mechanical energy conversion.', detail: 'A versatile kit designed for school laboratories to illustrate how motors and generators operate on the same basic principle through hands-on experimentation.' },
  { id: 'math-exploration-kit', name: 'Math Exploration Kit (Grade 8–10 Focus)', image: '/images/home/home-4.webp', Icon: FiActivity, summary: 'Master linear equations and trigonometry through physical manipulation of slopes, intercepts, and unit circles.', detail: 'This kit transforms abstract algebraic concepts and trigonometric functions into tangible models, helping students visualize mathematical behavior in real-time.' },
  { id: 'advanced-mechanics', name: 'Coming Soon: Science Kits (Pulley/Hydraulic)', image: '/images/home/home-4.webp', Icon: FiCpu, comingSoon: true, summary: "New advanced kits focusing on complex mechanical systems and industrial fluid power applications.", detail: "We're currently perfecting our next series of kits. These will include modular pulley systems for deeper physics exploration and advanced hydraulic models." },
];

const SuggestionModal = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!formData.get('suggestion')?.toString().trim() || !formData.get('email')?.toString().trim()) { alert('Please fill in both fields.'); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mojrjkgr', { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (res.ok) { setSubmitted(true); form.reset(); } else throw new Error('Failed to send.');
    } catch { alert('Failed to send suggestion. Please try again.'); } finally { setIsSubmitting(false); }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><FiX className="h-5 w-5" /></button>
        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500"><FiSend className="h-8 w-8" /></div>
              <div className="space-y-2"><h3 className="text-xl font-bold text-slate-900 dark:text-white">Thank you for your input!</h3><p className="text-sm text-slate-500 dark:text-slate-400">Your suggestion has been sent to our engineering team.</p></div>
              <button onClick={onClose} className="rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">Close</button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">Kit Suggestion</div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">What should we build next?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Have a specific experiment or mechanical system you&apos;d like to see as a STEM kit? Tell us about it!</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1"><label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Suggestion</label><textarea name="suggestion" required rows={4} placeholder="Describe the kit or concept..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none ring-primary-500/0 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 dark:border-slate-800 dark:bg-slate-950 dark:text-white resize-none" /></div>
                <div className="space-y-1"><label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Email</label><input type="email" name="email" required placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none ring-primary-500/0 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 dark:border-slate-800 dark:bg-slate-950 dark:text-white" /></div>
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 py-4 text-sm font-bold text-white shadow-xl shadow-primary-600/20 transition-all hover:bg-primary-500 hover:shadow-primary-500/30 disabled:opacity-50">{isSubmitting ? 'Sending...' : 'Send Suggestion'}{!isSubmitting && <FiArrowRight className="h-4 w-4" />}</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function MechItEasyKits() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-500 dark:bg-slate-900">
      {showModal && <SuggestionModal onClose={() => setShowModal(false)} />}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50 uppercase">Mech It Easy <span className="text-primary-600">STEM Kits</span></h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">High-quality, reusable engineering kits designed and manufactured in Nepal. Every kit comes with all components needed for complete classroom experimentation.</p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto space-y-12 px-4 sm:px-6">
          {kitsData.map((kit, index) => {
            const [rowRef, rowInView] = useInView({ threshold: 0.2, triggerOnce: true });
            const isImageLeft = index % 2 === 0;
            return (
              <article key={kit.id} ref={rowRef} className={`mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-900/5 transition-all duration-700 dark:border-slate-800 dark:bg-slate-950/90 ${rowInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isImageLeft ? '' : 'lg:flex-row-reverse'} lg:flex-row ${kit.comingSoon ? 'opacity-75 grayscale-[0.3]' : ''}`}>
                {kit.comingSoon ? (
                  <div onClick={() => setShowModal(true)} className="relative w-full overflow-hidden bg-slate-100/90 dark:bg-slate-900/90 lg:w-1/2 cursor-pointer group">
                    <Image width={800} height={600} src={kit.image} alt={kit.name} loading="lazy" className="h-64 w-full object-cover sm:h-72 lg:h-full" />
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        <span className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-white shadow-xl ring-4 ring-amber-500/30">Coming Soon</span>
                        <span className="text-xs font-bold text-white uppercase tracking-widest bg-slate-950/40 px-3 py-1 rounded-lg backdrop-blur-md border border-white/20">Click to suggest a kit</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={`/kits/${kit.id}`} className="relative w-full overflow-hidden bg-slate-100/90 dark:bg-slate-900/90 lg:w-1/2 group transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6),0_0_40px_-10px_rgba(59,130,246,0.6)] hover:border-emerald-500 dark:hover:border-emerald-400 border-2 border-transparent z-10">
                    <div className="h-full w-full">
                      <Image width={800} height={600} src={kit.image} alt={kit.name} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-72 lg:h-full" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-sky-400/5 to-emerald-400/10 opacity-80 mix-blend-multiply dark:opacity-90" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-primary-600 shadow-lg backdrop-blur-sm">View Details</span></div>
                    </div>
                  </Link>
                )}
                <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:w-1/2">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-200"><kit.Icon className="h-3.5 w-3.5" /></span>
                      <span className="uppercase tracking-[0.18em]">Mech It Easy Kit</span>
                    </div>
                    {kit.comingSoon ? (
                      <button onClick={() => setShowModal(true)} className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-slate-50 text-left hover:text-primary-600 transition-colors">{kit.name}</button>
                    ) : (
                      <Link href={`/kits/${kit.id}`}><h2 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-primary-600 sm:text-xl dark:text-slate-50 dark:hover:text-primary-400">{kit.name}</h2></Link>
                    )}
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{kit.summary}</p>
                    <p className="text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-slate-400">{kit.detail}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col text-[11px] text-slate-500 dark:text-slate-400"><span>Reusable, classroom-tested components.</span><span>Designed for both light and dark themes.</span></div>
                    {kit.comingSoon ? (
                      <button onClick={() => setShowModal(true)} className="inline-flex items-center text-xs font-semibold text-amber-500 transition-colors hover:text-amber-600">Suggest a Kit<FiArrowRight className="ml-1 h-3 w-3" /></button>
                    ) : (
                      <Link href={`/kits/${kit.id}`} className="inline-flex items-center text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400">Details<svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
