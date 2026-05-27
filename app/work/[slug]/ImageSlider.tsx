'use client';

import { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlinePhoto } from 'react-icons/hi2';

export default function ImageSlider({ images, title }: { images: string[], title: string }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [images]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Scroll by approximately the width of one item + gap, or just a fixed amount
            const scrollAmount = container.clientWidth * 0.75;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            // We'll rely on the onScroll event to update the button states
        }
    };

    if (!images || images.length === 0) {
        return (
            <div className="w-full max-w-6xl mx-auto mt-16 p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white/50 dark:bg-slate-900/20">
                <p className="text-slate-500 dark:text-slate-400">No images found for this category.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto mt-20 relative z-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <span className="flex h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-lg items-center justify-center shrink-0">
                    <HiOutlinePhoto className="h-6 w-6" />
                </span>
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white">Project Gallery</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide text-sm uppercase mt-1">{images.length} Images Available</p>
                </div>
            </div>

            {/* Scrollable Container with Side Buttons */}
            <div className="relative group flex items-center">
                
                {/* Left Navigation Button */}
                <button 
                    onClick={() => scroll('left')} 
                    disabled={!canScrollLeft}
                    className={`absolute -left-4 md:-left-8 z-40 h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-emerald-500 hover:text-white shadow-2xl hover:-translate-y-1 scale-100 opacity-100' : 'bg-white/50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed opacity-0 scale-90 pointer-events-none'}`}
                    aria-label="Scroll left"
                >
                    <HiOutlineChevronLeft className="h-7 w-7" />
                </button>

                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {images.map((img, idx) => (
                        <div 
                            key={idx} 
                            className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(25%-18px)] snap-center overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-all duration-500 relative aspect-[4/5] group/card"
                        >
                            {/* Loading Skeleton */}
                            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                            
                            <img 
                                src={img} 
                                alt={`${title} ${idx + 1}`} 
                                className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out z-10"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button 
                    onClick={() => scroll('right')} 
                    disabled={!canScrollRight}
                    className={`absolute -right-4 md:-right-8 z-40 h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-emerald-500 hover:text-white shadow-2xl hover:-translate-y-1 scale-100 opacity-100' : 'bg-white/50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed opacity-0 scale-90 pointer-events-none'}`}
                    aria-label="Scroll right"
                >
                    <HiOutlineChevronRight className="h-7 w-7" />
                </button>
            </div>
        </div>
    );
}
