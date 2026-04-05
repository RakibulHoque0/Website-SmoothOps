import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Philosophy = () => {
    const sectionRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to('.parallax-bg', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text Reveal
            gsap.from([text1Ref.current, text2Ref.current], {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={sectionRef} className="relative py-48 px-8 md:px-16 overflow-hidden bg-base border-y border-content/5">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 opacity-10 parallax-bg pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2670&auto=format&fit=crop"
                    alt="Abstract dark marble and architectural shadow"
                    className="w-full h-[120%] object-cover object-center grayscale opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-base"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 text-center items-center">
                <div ref={text1Ref} className="font-sans text-xl md:text-2xl text-content/60 font-light tracking-wide uppercase">
                    Most growing teams focus on: <br />
                    <span className="text-content/40">manual administrative friction.</span>
                </div>

                <div ref={text2Ref} className="text-5xl md:text-8xl leading-none tracking-tight text-content">
                    <span className="font-sans font-medium">We focus on:</span><br />
                    <span className="font-drama italic text-accent text-[1.2em] relative inline-block mt-4">
                        Leverage.
                        <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
