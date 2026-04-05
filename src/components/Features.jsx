import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, Database, Workflow, CheckCircle } from 'lucide-react';

/* CARD 1: Diagnostic Shuffler (Client Onboarding) */
const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'Intake Automation', icon: <Database size={16} /> },
        { id: 2, label: 'Document Verification', icon: <CheckCircle size={16} /> },
        { id: 3, label: 'Welcome Protocol', icon: <Workflow size={16} /> },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-surface border border-content/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[360px]">
            <div>
                <h3 className="text-xl font-sans font-bold text-content mb-2">Client Onboarding</h3>
                <p className="text-sm font-sans text-content/60">Zero-friction intake sequences that adapt to incoming data.</p>
            </div>

            <div className="relative h-48 w-full mt-6">
                {cards.map((card, i) => {
                    const isTop = i === 0;
                    return (
                        <div
                            key={card.id}
                            className="absolute left-0 right-0 bg-base border border-accent/20 rounded-[1.5rem] p-4 flex items-center gap-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                            style={{
                                top: `${i * 15}%`,
                                scale: 1 - i * 0.05,
                                opacity: 1 - i * 0.3,
                                zIndex: 10 - i,
                                boxShadow: isTop ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
                            }}
                        >
                            <div className={`p-2 rounded-full ${isTop ? 'bg-accent text-base' : 'bg-surface text-content/50'} transition-colors duration-500`}>
                                {card.icon}
                            </div>
                            <span className={`font-mono text-sm ${isTop ? 'text-content' : 'text-content/50'}`}>
                                {card.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/* CARD 2: Telemetry Typewriter (Reporting Systems) */
const TypewriterCard = () => {
    const [text, setText] = useState('');
    const fullText = "SELECT revenue, efficiency\nFROM ops_database\nWHERE waste_eliminated = TRUE;\n\n> Output: 142% Increase.";

    useEffect(() => {
        let currentText = '';
        let i = 0;

        // reset loop
        const typeWriter = () => {
            if (i < fullText.length) {
                currentText += fullText.charAt(i);
                setText(currentText);
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 20); // random typing speed
            } else {
                setTimeout(() => {
                    currentText = '';
                    setText('');
                    i = 0;
                    typeWriter();
                }, 4000); // Wait before reset
            }
        };

        const timeout = setTimeout(typeWriter, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="bg-surface border border-content/10 rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between h-[360px]">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-sans font-bold text-content mb-2">Reporting Systems</h3>
                    <p className="text-sm font-sans text-content/60">Live telemetry and uncompromised data visibility.</p>
                </div>
                <div className="flex items-center gap-2 bg-base px-3 py-1 rounded-[1rem] border border-content/10">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live Feed</span>
                </div>
            </div>

            <div className="bg-base rounded-[1.5rem] p-5 h-full relative overflow-hidden">
                <pre className="font-mono text-xs text-content/80 whitespace-pre-wrap leading-relaxed">
                    {text}<span className="inline-block w-[6px] h-[12px] bg-accent/80 animate-pulse ml-1 align-middle"></span>
                </pre>
            </div>
        </div>
    );
};

/* CARD 3: Cursor Protocol Scheduler (Lead Response & CRM) */
const SchedulerCard = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const dayRef = useRef(null);
    const saveBtnRef = useRef(null);
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(cursorRef.current, {
                x: '25px',
                y: '30px',
                duration: 1,
                ease: 'power2.inOut'
            })
                .to(cursorRef.current, { scale: 0.85, duration: 0.15 })
                .to(cursorRef.current, { scale: 1, duration: 0.15 })
                .add(() => setActiveDay(3), "<") // Activate 'W'
                .to(cursorRef.current, {
                    x: '90px',
                    y: '80px',
                    duration: 1.2,
                    ease: 'power3.inOut',
                    delay: 0.5
                })
                .to(cursorRef.current, { scale: 0.85, duration: 0.15 })
                .to(cursorRef.current, { scale: 1, duration: 0.15 })
                .to('.save-highlight', { backgroundColor: '#E63B2E', color: '#F5F3EE', duration: 0.2 }, "<")
                .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })
                .add(() => {
                    setActiveDay(null);
                    gsap.set('.save-highlight', { backgroundColor: 'transparent', color: 'rgba(250, 248, 245, 0.5)' });
                })
                .set(cursorRef.current, { x: 0, y: 0, opacity: 1 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="bg-surface border border-content/10 rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between h-[360px]" ref={containerRef}>
            <div>
                <h3 className="text-xl font-sans font-bold text-content mb-2">Lead Response</h3>
                <p className="text-sm font-sans text-content/60">Autonomous CRM progression closing the intent gap.</p>
            </div>

            <div className="bg-base rounded-[1.5rem] p-6 relative mt-6 h-full border border-content/5">
                <div className="grid grid-cols-7 gap-1 mb-4 relative z-10">
                    {days.map((d, i) => (
                        <div
                            key={i}
                            className={`text-center py-2 text-xs font-mono rounded-lg transition-colors duration-300 ${activeDay === i ? 'bg-accent text-base font-bold' : 'text-content/30 bg-content/5'}`}
                        >
                            {d}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end relative z-10 mt-6">
                    <div className="save-highlight text-[10px] font-mono border border-content/20 px-4 py-2 rounded-full transition-colors">
                        EXECUTE SEQUENCE
                    </div>
                </div>

                {/* Floating Cursor SVG */}
                <div ref={cursorRef} className="absolute top-[20px] left-[30px] z-20" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
                    <MousePointer2 className="text-content fill-base" size={24} />
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 px-8 md:px-16 container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ShufflerCard />
                <TypewriterCard />
                <SchedulerCard />
            </div>
        </section>
    );
};

export default Features;
