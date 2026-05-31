'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiUser, FiMessageCircle, FiArrowRight, FiLinkedin, FiFacebook, FiInstagram, FiPlus, FiMinus } from 'react-icons/fi';

function useInView() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.1 });
    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); observer.disconnect(); };
  }, []);
  return [ref, inView] as const;
}

const faqData = [

  { question: "Do Students Need Prior Technical Knowledge to Start with 3D Printing?", answer: "No, students do not need extensive prior technical knowledge to begin with 3D printing. Our introductory courses are structured to provide foundational knowledge, making it easy for beginners of all ages to engage with and master the technology through a step-by-step approach." },
  { question: "Are the 3D Printing Training Materials Appropriate for Classroom Settings?", answer: "Yes, our training materials are specifically tailored for educational environments. They include comprehensive lesson plans, hands-on projects, and assessments that align with current educational standards, ensuring a seamless integration into the school curriculum." },
  { question: "Are Courses Available for After-School Programs?", answer: "Yes, we offer numerous after-school programs focusing specifically on 3D printing and STEM. These programs encourage students to explore technology and creativity in a less formal, high-energy setting that complements regular classroom hours." },
  { question: "How Does 3D Printing Tie into STEM Education Goals?", answer: "3D printing is integral to STEM as it enhances critical thinking, creativity, and problem-solving skills. It allows students to apply theoretical concepts in a hands-on context, bridging the gap between abstract scientific principles and real-world engineering and mathematics." },
  { question: "What Software Is Used for 3D Design in Your Courses?", answer: (<div className="space-y-6"><p className="leading-7">We utilize industry-standard software adapted for different learning levels:</p><div className="grid gap-5 sm:grid-cols-2 mt-4"><div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"><h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Tinkercad</h4><p className="text-xs text-slate-600 dark:text-slate-400 leading-6">Perfect for grades 3-8, offering a beginner-friendly introduction to 3D design.</p></div><div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"><h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Fusion 360</h4><p className="text-xs text-slate-600 dark:text-slate-400 leading-6">For grades 9-12, providing advanced capabilities used in professional manufacturing.</p></div></div></div>) },
  { question: "How Can 3D Printing Enhance Creativity in Students?", answer: (<div className="space-y-6"><p className="leading-7">3D printing fosters creativity by providing a medium where digital ideas become physical reality:</p><ul className="grid gap-4 sm:grid-cols-2"><li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-7"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" /><span>Prototype ideas and see them come to life instantly.</span></li><li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-7"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" /><span>Iterate designs easily through experimentation.</span></li><li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-7"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" /><span>Personalize projects to reflect unique perspectives.</span></li><li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-7"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" /><span>Collaborate with peers on complex problem-solving.</span></li></ul></div>) }
];

export default function Contact() {
  const [sectionRef, sectionInView] = useInView();
  const [faqRef, faqInView] = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    if (!name || !email || !message) { alert('Please fill in your name, email, and message.'); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mojrjkgr', { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('Failed to send message.');
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('Failed to send message. Please try again later.');
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <section ref={sectionRef} className="scroll-mt-24 min-h-[calc(80vh-6rem)] flex items-stretch pt-10 pb-16">
        <div className="grid w-full items-stretch gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-stretch">
          <div className={`flex h-full flex-col space-y-6 transform transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-slate-400">Contact Us</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">Let&apos;s build something meaningful together.</h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">Share a bit about your school, lab, or project. We&apos;ll get back to you with practical next steps for designing and deploying the right setup.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-950/70">
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <a href="mailto:aakarantech@gmail.com" className="group flex items-start gap-3 rounded-2xl px-3 py-2 transition hover:-translate-y-0.5 hover:bg-slate-50/80 dark:hover:bg-slate-900/60">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 shadow-sm dark:bg-primary-500/10 dark:text-primary-300"><FiMail className="h-4 w-4" /></span>
                  <div className="space-y-0.5"><p className="text-xs font-semibold text-slate-900 dark:text-slate-50">Email</p><p className="text-xs text-slate-600 dark:text-slate-300">mechiteasy26@gmail.com</p></div>
                </a>
                <div className="group flex items-start gap-3 rounded-2xl px-3 py-2 transition hover:-translate-y-0.5 hover:bg-slate-50/80 dark:hover:bg-slate-900/60">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-300"><FiMapPin className="h-4 w-4" /></span>
                  <div className="space-y-0.5"><p className="text-xs font-semibold text-slate-900 dark:text-slate-50">Location</p><p className="text-xs text-slate-600 dark:text-slate-300">Sanepa-2 Kalika Marg, Kathmandu</p></div>
                </div>
                <a href="tel:+9779761139328" className="group flex items-start gap-3 rounded-2xl px-3 py-2 transition hover:-translate-y-0.5 hover:bg-slate-50/80 dark:hover:bg-slate-900/60">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-300"><FiPhone className="h-4 w-4" /></span>
                  <div className="space-y-0.5"><p className="text-xs font-semibold text-slate-900 dark:text-slate-50">Phone</p><p className="text-xs text-slate-600 dark:text-slate-300">+977-9761139328</p></div>
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-medium">Also find us on</span>
                <div className="flex gap-2">
                  {[{ href: 'https://www.instagram.com/aakaran.np/', Icon: FiInstagram }, { href: 'https://www.facebook.com/profile.php?id=61589092834686', Icon: FiFacebook }, { href: '#', Icon: FiLinkedin }].map(({ href, Icon }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-primary-400/80 dark:hover:text-primary-300"><Icon className="h-4 w-4" /></a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`flex h-full rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-lg transform transition-all duration-700 delay-150 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-950/90 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex w-full flex-col">
              <div className="space-y-2"><h2 className="text-lg font-semibold tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-700 bg-clip-text text-transparent">Contact Us</h2></div>
              {submitted ? (
                <div className="mt-6 flex flex-1 flex-col items-center justify-center space-y-3 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10"><svg className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-50">Message sent successfully!</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-2 text-xs font-medium text-primary-600 underline underline-offset-2 transition hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Send another message</button>
                </div>
              ) : (
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1"><label htmlFor="name" className="text-xs font-medium text-slate-700 dark:text-slate-200">Name</label><div className="relative flex items-center"><span className="pointer-events-none absolute left-3 text-slate-400 dark:text-slate-500"><FiUser className="h-3.5 w-3.5" /></span><input id="name" name="name" type="text" className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pl-9 text-xs text-slate-900 shadow-sm outline-none ring-primary-500/0 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Your name" /></div></div>
                  <div className="space-y-1"><label htmlFor="email" className="text-xs font-medium text-slate-700 dark:text-slate-200">Email</label><div className="relative flex items-center"><span className="pointer-events-none absolute left-3 text-slate-400 dark:text-slate-500"><FiMail className="h-3.5 w-3.5" /></span><input id="email" name="email" type="email" className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pl-9 text-xs text-slate-900 shadow-sm outline-none ring-primary-500/0 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="you@example.com" /></div></div>
                  <div className="space-y-1"><label htmlFor="message" className="text-xs font-medium text-slate-700 dark:text-slate-200">Message</label><div className="relative flex"><span className="pointer-events-none absolute left-3 top-3 text-slate-400 dark:text-slate-500"><FiMessageCircle className="h-3.5 w-3.5" /></span><textarea id="message" name="message" rows={3} className="h-[150px] w-full resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 pl-9 text-xs text-slate-900 shadow-sm outline-none ring-primary-500/0 transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Tell us about your project or idea." /></div></div>
                  <button type="submit" disabled={isSubmitting} className="group mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-4 py-2.5 text-xs font-medium text-white shadow-sm shadow-primary-500/40 transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-80 disabled:cursor-not-allowed">
                    <span>{isSubmitting ? 'Sending…' : 'Send'}</span><FiArrowRight className="ml-2 h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" ref={faqRef} className={`scroll-mt-24 pb-24 pt-10 transform transition-all duration-1000 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="w-full space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400">Find answers to common questions about 3D printing in education and its professional applications.</p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="group rounded-2xl border border-slate-200 bg-white/50 shadow-sm transition-all hover:border-emerald-500/50 dark:border-slate-800 dark:bg-slate-950/50">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 pr-8">{item.question}</span>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'border-emerald-500 bg-emerald-500 text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-emerald-500/50 group-hover:text-emerald-500'}`}>
                    {openIndex === index ? <FiMinus className="h-3.5 w-3.5" /> : <FiPlus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-8 text-sm leading-8 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-6">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
