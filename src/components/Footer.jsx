import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = ({ onOpenModal }) => {
    return (
        <footer className="bg-base text-content rounded-t-[4rem] px-8 py-16 md:py-24 mt-[-4rem] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-b border-content/10 pb-16">

                <div className="max-w-xl">
                    <h2 className="text-5xl md:text-7xl font-sans font-medium tracking-tight mb-8">
                        Ready for <span className="font-drama italic text-accent">Efficiency?</span>
                    </h2>
                    <button onClick={onOpenModal} className="magnetic-btn bg-content text-base px-8 py-4 rounded-[2.5rem] font-sans font-semibold hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-3">
                        Let's Talk <ArrowRight size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-8 md:text-right">
                    <div className="font-sans font-bold text-2xl tracking-tight text-content">
                        SmoothOps
                    </div>
                    <div className="flex flex-col gap-2 font-mono text-sm text-content/50">
                        <a href="#features" className="hover:text-accent transition-colors">Methodology</a>
                        <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
                        <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
                        <a href="#case-studies" className="hover:text-accent transition-colors">Case Studies</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6 text-xs font-mono text-content/40">
                <div>
                    &copy; {new Date().getFullYear()} SmoothOps. All rights reserved.
                </div>

                <div className="flex items-center gap-3 bg-base/50 px-4 py-2 rounded-full border border-content/5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="tracking-widest uppercase">System Operational</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
