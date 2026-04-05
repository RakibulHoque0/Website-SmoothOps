import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onOpenModal }) => {
    const comp = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 40,
                opacity: 0,
                stagger: 0.08,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-16 px-8 md:px-16 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2670&auto=format&fit=crop"
                    alt="Raw concrete brutalist texture"
                    className="w-full h-full object-cover select-none grayscale-[0.6] opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/90 to-base/80"></div>
                <div className="absolute inset-0 bg-base/40"></div>
            </div>

            {/* Content Centered */}
            <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center px-4">
                <h1 className="hero-elem text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-sans font-medium tracking-tight text-content mb-2">
                    Command the
                </h1>
                <h2 className="hero-elem text-6xl md:text-8xl lg:text-[7rem] leading-none font-drama italic text-accent mb-8">
                    System.
                </h2>
                <p className="hero-elem text-lg md:text-xl font-sans font-normal text-content/95 drop-shadow-md max-w-2xl mb-8 leading-relaxed">
                    Most business owners are stuck acting as the 'glue' between their tools and their team. We partner with you to identify every repetitive manual task in your fulfillment and sales cycle and automate it out of existence.
                </p>
                <div className="hero-elem bg-surface border-2 border-content shadow-[4px_4px_0px_#111111] rounded-xl p-6 md:p-8 mb-12 max-w-2xl w-full text-left md:text-center transition-all hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-1">
                    <p className="text-content font-sans font-bold text-base md:text-lg leading-relaxed">
                        <span className="text-accent font-mono uppercase tracking-widest text-xs md:text-sm mb-3 block font-bold border-b border-content/10 pb-2">The Guarantee</span>
                        We will remove at least 15 hours of manual work from your weekly operations within 2 months, or we'll work for free.
                    </p>
                </div>
                <div className="hero-elem">
                    <button onClick={onOpenModal} className="magnetic-btn bg-accent text-base px-8 py-4 rounded-[2.5rem] font-sans font-semibold hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-3">
                        Let's Talk <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
