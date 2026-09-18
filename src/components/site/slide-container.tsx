import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/lib/icons";

interface Slide {
    id: string;
    label: string;
    node: ReactNode;
}

interface SlideContainerProps {
    slides: Slide[];
}

export function SlideContainer({ slides }: SlideContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slideRefs.current.findIndex((el) => el === entry.target);
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            { root: container, threshold: 0.6 },
        );

        slideRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const goTo = (index: number) => {
        const clamped = Math.max(0, Math.min(slides.length - 1, index));
        slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
            >
                {slides.map((slide, index) => (
                    <section
                        key={slide.id}
                        id={slide.id}
                        ref={(el) => {
                            slideRefs.current[index] = el;
                        }}
                        className="h-screen snap-start snap-always overflow-y-auto"
                    >
                        {slide.node}
                    </section>
                ))}
            </div>

            {/* أزرار Next / Previous */}
            <div className="pointer-events-none fixed inset-y-0 right-4 z-40 flex flex-col items-center justify-center gap-3 sm:right-6">
                <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    aria-label="Previous section"
                    className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-gold/30 bg-ink/70 text-gold backdrop-blur transition-colors hover:border-gold/60 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <ArrowIcon className="size-5 -rotate-90" />
                </button>
                <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    disabled={activeIndex === slides.length - 1}
                    aria-label="Next section"
                    className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-gold/30 bg-ink/70 text-gold backdrop-blur transition-colors hover:border-gold/60 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <ArrowIcon className="size-5 rotate-90" />
                </button>
            </div>

            {/* نقاط التنقل الجانبية */}
            <div className="pointer-events-none fixed inset-y-0 left-4 z-40 hidden flex-col items-center justify-center gap-2 sm:left-6 sm:flex">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Go to ${slide.label}`}
                        className={`pointer-events-auto size-2.5 rounded-full transition-all ${index === activeIndex ? "bg-gold scale-125" : "bg-gold/30 hover:bg-gold/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}