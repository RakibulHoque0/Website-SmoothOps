import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-[2rem] transition-all duration-500 w-full max-w-4xl border border-transparent ${scrolled ? 'bg-base/80 backdrop-blur-xl border-surface shadow-xl' : 'bg-transparent'
                    }`}
            >
                <div className="font-sans font-bold text-xl tracking-tight text-content">
                    SmoothOps
                </div>

                <div className="hidden md:flex gap-8 text-sm font-sans font-medium text-content/80">
                    <a href="#features" className="hover:text-accent transition-colors">Methodology</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
                    <a href="#case-studies" className="hover:text-accent transition-colors">Case Studies</a>
                </div>

                <button onClick={onOpenModal} className="magnetic-btn bg-accent text-base px-5 py-2 rounded-[2rem] font-sans font-semibold text-sm transition-transform hover:scale-105 active:scale-95">
                    Let's Talk
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
