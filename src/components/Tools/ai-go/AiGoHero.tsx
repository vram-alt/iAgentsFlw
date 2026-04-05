import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { heroDashTiles, heroStats } from './data';

export function AiGoHero() {
  return (
    <header className="relative px-4 py-16 section-glow md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-1/4 h-[min(600px,90vw)] w-[min(600px,90vw)] max-w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid items-center w-full">
          <div className="ai-go-fade-in max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
           
            <h1 className="md:mt-16 mt-8 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="gradient-text">Enterprise AI Governance</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-base text-muted-foreground sm:text-lg md:text-xl">
              Empowering organizations with complete control, deep visibility, and built-in compliance across all AI agents and applications.
            </p>
            <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#cta"
                className="glow-button inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-8"
              >
                Book Demo <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
              <a
                href="#control-plane"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-center font-semibold text-foreground/90 transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-8"
              >
                Learn More
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </header>
  );
}
