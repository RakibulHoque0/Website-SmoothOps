import React, { useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import DiscoveryModal from './components/DiscoveryModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Smooth scroll configuration or global gsap init can go here
    useEffect(() => {
        // Basic global scroll trigger refresh 
        ScrollTrigger.refresh();
    }, []);

    return (
        <main className="bg-base min-h-screen text-content font-sans selection:bg-accent selection:text-base flex flex-col">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Features />
            <Philosophy />
            <Protocol />
            <CaseStudies />
            <Footer onOpenModal={() => setIsModalOpen(true)} />

            <DiscoveryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}

export default App;
