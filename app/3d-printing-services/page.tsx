'use client';

import React from 'react';

export default function ThreeDPrintingServices() {
  return (
    <section className="space-y-16">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-500 dark:text-emerald-300/80">3D Printing Services</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">From imagination to printed reality.</h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          Aakaran tech began as a full-service 3D printing and product development studio—gaining real experience delivering functional parts, custom products, and fabrication support before moving into education-focused lab setups.
        </p>
      </div>

      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-slate-950/60">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-500 dark:text-emerald-300/80">Our Journey</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">Works we have done till now</h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">Two focused phases: first we built strong 3D printing and fabrication capability, then we brought that experience into education and lab setup.</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20"><span className="h-2 w-2 rounded-full bg-emerald-400" /></span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-50">MECH IT EASY KITS AND DEMONSTRATION</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-200/90">Ready-to-run kits with guided demos so teachers can confidently lead labs.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/10 ring-1 ring-sky-400/20"><span className="h-2 w-2 rounded-full bg-sky-400" /></span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-50">GUIDE FOR TEACHERS ABOUT KITS</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-200/90">Teacher-friendly documentation, routines, and checklists for smooth sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Phase 1: 3D Printing &amp; Digital Fabrication Services</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">We began as a full-service 3D printing and product development company. Named Aakaran—meaning &quot;giving imagination its shape&quot;—we worked closely with clients to turn ideas into functional, manufacturable products.</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-300/80">Key Services &amp; Capabilities</p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">
                  <li>Custom 3D printing (FDM &amp; resin).</li>
                  <li>Rapid prototyping for functional and aesthetic parts.</li>
                  <li>Design-for-manufacturing (DFM) Guidance.</li>
                </ul>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-50/90">Notable Work &amp; Products</p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">
                  <li>Custom-designed and printed mechanical parts (Eg: Phone cooler peltier case).</li>
                  <li>Lithophane-based custom lamps.</li>
                  <li>Design and Fabrication of Molds (Eg: Chocolate shaper molds, Statue molds).</li>
                  <li>Design modification and DIY help (Eg: Aquarium egg collector components).</li>
                </ul>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">This phase built strong expertise in 3D printing, product design, and work management, delivering functional solutions under real-world constraints.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-inner dark:border-slate-800 dark:bg-slate-900">
                  <img src="/3d-printing-lab.png" alt="Phase 1 Fabrication" loading="lazy" className="aspect-[16/9] w-full rounded-xl object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Phase 2: Educational Infrastructure &amp; Lab Setup</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">Our transition toward education began when we successfully executed a lab setup for a diploma-level engineering college, where we installed and commissioned:</p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">
                  <li>3D printers</li>
                  <li>CNC machines</li>
                </ul>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/90">This project gave us firsthand insight into the gaps in practical, hands-on learning within Nepal&apos;s education system—particularly the lack of affordable, engaging, and curriculum-aligned lab resources.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-inner dark:border-slate-800 dark:bg-slate-900">
                  <img src="/lab-setup1.jpeg" alt="Phase 2 Lab Setup" loading="lazy" className="aspect-[16/9] w-full rounded-xl object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
