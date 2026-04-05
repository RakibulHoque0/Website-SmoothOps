import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const cardsData = [
    {
        step: '01',
        title: 'ARCHITECT',
        description: 'We audit your workflow and map the ideal data path to remove friction bottlenecks.',
        visual: 'geometric'
    },
    {
        step: '02',
        title: 'AUTOMATE',
        description: 'We build robust integration layers, connecting CRMs, databases, and reporting systems.',
        visual: 'laser'
    },
    {
        step: '03',
        title: 'ACCELERATE',
        description: 'Deploy seamless operational streams that scale infinitely without adding headcount.',
        visual: 'waveform'
    }
];

const Protocol = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, index) => {
                // Sticky Stacking Animation
                ScrollTrigger.create({
                    trigger: card,
                    start: `top top+=80`,
                    endTrigger: sectionRef.current,
                    end: `bottom bottom`,
                    pin: true,
                    pinSpacing: false,
                });

                if (index > 0) {
                    gsap.to(cards[index - 1], {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(20px)',
                        scrollTrigger: {
                            trigger: card,
                            start: `top top+=200`,
                            end: `top top`,
                            scrub: true,
                        }
                    });
                }
            });

            // Animations for SVG Visuals
            // 01 ARCHITECT: geometric rotating motif
            gsap.to('.geo-motif', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'linear'
            });

            // 02 AUTOMATE: laser scanning
            gsap.to('.laser-line', {
                y: 160,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'power2.inOut'
            });

            // 03 ACCELERATE: pulsing waveform
            gsap.to('.pulse-wave', {
                strokeDashoffset: -200,
                duration: 3,
                repeat: -1,
                ease: 'none'
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={sectionRef} className="relative bg-base py-32">
            <div className="max-w-5xl mx-auto px-8">

                <div className="mb-24 md:mb-48 text-center">
                    <h2 className="text-4xl md:text-6xl font-sans font-medium text-content tracking-tight mb-4">
                        The SmoothOps <span className="font-drama italic text-accent">Protocol</span>
                    </h2>
                    <p className="font-mono text-sm text-content/50 uppercase tracking-widest">Systematic Transformation</p>
                </div>

                <div className="relative pb-32">
                    {cardsData.map((card, idx) => (
                        <div
                            key={idx}
                            className="protocol-card w-full bg-surface border border-content/10 rounded-[3rem] p-12 md:p-16 shadow-2xl origin-top mb-12 flex flex-col md:flex-row gap-16 items-center justify-between"
                            style={{ zIndex: idx }}
                        >
                            <div className="flex-1">
                                <div className="font-mono text-xl text-accent mb-6 opacity-80">// {card.step}</div>
                                <h3 className="text-4xl md:text-5xl font-sans font-bold text-content mb-6 tracking-tight">{card.title}</h3>
                                <p className="text-lg md:text-xl font-sans text-content/70 max-w-md leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            <div className="w-48 h-48 md:w-64 md:h-64 bg-base rounded-[2rem] border border-content/5 flex items-center justify-center p-8 relative overflow-hidden">
                                {card.visual === 'geometric' && (
                                    <svg viewBox="0 0 100 100" className="w-full h-full geo-motif opacity-80">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#E63B2E" strokeWidth="1" strokeDasharray="4 4" />
                                        <circle cx="50" cy="50" r="25" fill="none" stroke="#FAF8F5" strokeWidth="2" opacity="0.3" />
                                        <rect x="35" y="35" width="30" height="30" fill="none" stroke="#E63B2E" strokeWidth="1" transform="rotate(45 50 50)" />
                                    </svg>
                                )}
                                {card.visual === 'laser' && (
                                    <div className="absolute inset-4">
                                        <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full opacity-30">
                                            {Array.from({ length: 36 }).map((_, i) => (
                                                <div key={i} className="bg-content/20 rounded-sm"></div>
                                            ))}
                                        </div>
                                        <div className="laser-line absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_15px_#E63B2E]"></div>
                                    </div>
                                )}
                                {card.visual === 'waveform' && (
                                    <svg viewBox="0 0 100 50" className="w-full h-full">
                                        <path
                                            className="pulse-wave"
                                            d="M0,25 L20,25 L30,5 L40,45 L50,25 L100,25"
                                            fill="none"
                                            stroke="#E63B2E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeDasharray="200"
                                            strokeDashoffset="0"
                                        />
                                        <path
                                            d="M0,25 L100,25"
                                            fill="none"
                                            stroke="#FAF8F5"
                                            strokeWidth="1"
                                            opacity="0.1"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Protocol;
