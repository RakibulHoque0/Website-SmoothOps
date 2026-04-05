import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const DiscoveryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        website: '',
        bottleneck: '',
        revenue: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to Calendly immediately
        window.open('https://calendly.com/rakibulrafi0/discovery-call', '_blank');
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo('.modal-backdrop',
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            gsap.fromTo('.modal-content',
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)' }
            );
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="modal-backdrop absolute inset-0 bg-base/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div className="modal-content relative w-full max-w-xl bg-surface border border-accent/20 rounded-[2rem] p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-content/50 hover:text-accent transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Contextual Modal Image */}
                <div className="w-full h-32 md:h-40 rounded-t-[1.5rem] overflow-hidden -mt-8 -mx-8 md:-mx-10 mb-8 relative mb-8 w-[calc(100%+4rem)] md:w-[calc(100%+5rem)]">
                    <img
                        src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2670&auto=format&fit=crop"
                        alt="High-tech data visualization interface"
                        className="w-full h-full object-cover grayscale-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent"></div>
                </div>

                <div className="mb-8">
                    <h3 className="text-3xl font-sans font-medium text-content tracking-tight mb-2">
                        Discovery <span className="font-drama italic text-accent">Protocol</span>
                    </h3>
                    <p className="font-mono text-sm text-content/50 uppercase tracking-widest">
                        System Analysis Intake
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-content/90">What is the name of your business?</label>
                        <input
                            required
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full bg-base border border-content/10 rounded-xl px-4 py-3 text-content font-sans focus:outline-none focus:border-accent/50 transition-colors"
                            placeholder="Acme Corp"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-content/90">What is your company website?</label>
                        <input
                            required
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full bg-base border border-content/10 rounded-xl px-4 py-3 text-content font-sans focus:outline-none focus:border-accent/50 transition-colors"
                            placeholder="example.com or www.example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-content/90">Which operational process currently takes the most time for your team?</label>
                        <div className="relative">
                            <select
                                required
                                name="bottleneck"
                                value={formData.bottleneck}
                                onChange={handleChange}
                                className="w-full appearance-none bg-base border border-content/10 rounded-xl px-4 py-3 text-content font-sans focus:outline-none focus:border-accent/50 transition-colors"
                            >
                                <option value="" disabled>Select primary bottleneck</option>
                                <option value="Client onboarding">Client onboarding</option>
                                <option value="Reporting">Reporting</option>
                                <option value="Lead management">Lead management</option>
                                <option value="Internal coordination">Internal coordination</option>
                                <option value="Other">Other</option>
                            </select>
                            {/* Custom caret */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {formData.bottleneck === 'Other' && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                            <input
                                required
                                type="text"
                                name="bottleneckOther"
                                className="w-full bg-base border border-content/10 rounded-xl px-4 py-3 text-content font-sans focus:outline-none focus:border-accent/50 transition-colors"
                                placeholder="Please specify..."
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-content/90">What is your approximate monthly revenue?</label>
                        <div className="relative">
                            <select
                                required
                                name="revenue"
                                value={formData.revenue}
                                onChange={handleChange}
                                className="w-full appearance-none bg-base border border-content/10 rounded-xl px-4 py-3 text-content font-sans focus:outline-none focus:border-accent/50 transition-colors"
                            >
                                <option value="" disabled>Select revenue tier</option>
                                <option value="Under $20k">Under $20k</option>
                                <option value="$20k – $50k">$20k – $50k</option>
                                <option value="$50k – $150k">$50k – $150k</option>
                                <option value="$150k+">$150k+</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="magnetic-btn w-full mt-4 bg-accent text-base px-8 py-4 rounded-[2.5rem] font-sans font-semibold text-lg flex justify-center items-center gap-3"
                    >
                        Schedule Strategy Session <ArrowRight size={20} />
                    </button>

                </form>
            </div>
        </div>
    );
};

export default DiscoveryModal;
