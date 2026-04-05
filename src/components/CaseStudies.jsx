import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

const cases = [
    {
        id: 1,
        title: "Client Onboarding System",
        problem: "A growing SEO team was onboarding new clients manually. Every new deal required creating folders, assigning tasks, sending onboarding emails, and setting up reporting dashboards. This process took the operations manager 2–3 hours per client.",
        solution: "We built a structured onboarding system that automatically creates a project workspace, assigns onboarding tasks, sends welcome emails and forms, and organizes client documents and assets.",
        bullets: [
            "12–15 hours saved per week",
            "Consistent onboarding for every client",
            "Fewer operational mistakes"
        ],
        image: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Reporting Workflow System",
        problem: "A PPC team was spending 6–8 hours every week manually collecting data from multiple platforms to prepare client reports.",
        solution: "We built a reporting workflow that collects performance data and organizes it into a standardized report template automatically. Reports are generated and ready for review each week without manual data collection.",
        bullets: [
            "6–7 hours saved weekly",
            "Faster reporting turnaround",
            "More consistent reporting quality"
        ],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Lead Response System",
        problem: "A marketing team received new leads through multiple channels (website forms, ads, email). Leads were often missed or followed up hours later.",
        solution: "We implemented a system that captures all incoming leads, organizes them in the team's CRM, sends an immediate response message, and notifies the sales team instantly. Leads are tracked and responded to instantly.",
        bullets: [
            "Response time reduced from hours to minutes",
            "Better lead tracking",
            "Increased booked calls"
        ],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Internal Task Coordination System",
        problem: "A growing content team was coordinating work through Slack messages and spreadsheets. Tasks were often forgotten or delayed.",
        solution: "We built a centralized workflow that automatically creates tasks when new projects begin and assigns them to the correct team members. The team now works from a structured task pipeline instead of scattered messages.",
        bullets: [
            "Fewer missed tasks",
            "Clearer accountability",
            "10+ hours saved weekly across the team"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Sales Pipeline System",
        problem: "A founder was managing all sales conversations manually through email and notes. Tracking deal progress was difficult and follow-ups were inconsistent.",
        solution: "We created a structured pipeline that tracks every lead and prompts the correct follow-up actions automatically. Sales conversations are now organized and visible to the entire team.",
        bullets: [
            "Improved visibility across the pipeline",
            "More consistent follow-up",
            "Reduced manual admin work"
        ],
        image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2574&auto=format&fit=crop"
    }
];

const CaseStudies = () => {
    const listRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const rows = gsap.utils.toArray('.case-row');

            rows.forEach(row => {
                // Reveal animation on scroll
                gsap.from(row, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 85%'
                    }
                });

                // Image reveal hover interaction (handled via CSS mostly, but GSAP could scale)
                const imgWrap = row.querySelector('.case-img-wrap');
                const img = imgWrap.querySelector('img');

                row.addEventListener('mouseenter', () => {
                    gsap.to(imgWrap, { height: '240px', duration: 0.5, ease: 'power3.out' });
                    gsap.to(img, { scale: 1, duration: 0.5, ease: 'power3.out' });
                });

                row.addEventListener('mouseleave', () => {
                    gsap.to(imgWrap, { height: '0px', duration: 0.4, ease: 'power3.inOut' });
                    gsap.to(img, { scale: 1.1, duration: 0.4, ease: 'power3.inOut' });
                });
            });
        }, listRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="case-studies" className="bg-base border-t border-content/5 py-32 px-8 md:px-16" ref={listRef}>
            <div className="max-w-5xl mx-auto">
                <div className="mb-24 flex items-end justify-between border-b border-content/10 pb-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-sans font-medium text-content tracking-tight mb-2">
                            Case <span className="font-drama italic text-accent">Studies</span>
                        </h2>
                        <p className="font-mono text-sm text-content/50 uppercase tracking-widest">
                            Proven Systematic Returns
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    {cases.map((cs) => (
                        <div key={cs.id} className="case-row border-b border-content/10 py-12 group cursor-crosshair">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start">
                                {/* Title Area */}
                                <div className="md:w-1/3 flex flex-col gap-4">
                                    <div className="font-mono text-sm text-accent">0{cs.id}</div>
                                    <h3 className="text-3xl md:text-4xl font-sans font-medium text-content tracking-tight group-hover:text-accent transition-colors duration-300">
                                        {cs.title}
                                    </h3>
                                    <ArrowUpRight className="text-content/20 group-hover:text-accent transition-colors duration-300 w-8 h-8" />
                                </div>

                                {/* Content Area */}
                                <div className="md:w-2/3 flex flex-col gap-6">
                                    <p className="text-lg font-sans text-content/60 leading-relaxed font-light">
                                        <span className="text-content font-medium">The Friction:</span> {cs.problem}
                                    </p>

                                    {/* Hover Reveal Image */}
                                    <div className="case-img-wrap h-0 overflow-hidden rounded-2xl relative w-full transform translate-z-0">
                                        <div className="absolute inset-0 bg-base/20 z-10 mix-blend-overlay"></div>
                                        <img
                                            src={cs.image}
                                            alt={cs.title}
                                            className="w-full h-full object-cover scale-110 grayscale-[0.3]"
                                        />
                                    </div>

                                    <p className="text-lg font-sans text-content/80 leading-relaxed">
                                        <span className="text-accent font-medium">The Protocol:</span> {cs.solution}
                                    </p>

                                    <div className="mt-4 flex flex-col gap-3">
                                        {cs.bullets.map((bullet, i) => (
                                            <div key={i} className="flex items-center gap-4 border border-content/10 rounded-xl px-5 py-3 bg-surface/50">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                                <span className="font-mono text-sm text-content/90">{bullet}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;
