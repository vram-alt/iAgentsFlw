import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function AiGoCta() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="section-glow px-4 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            One Platform. <span className="gradient-text">All Stakeholders.</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
            Unify governance across your entire AI landscape with a platform every stakeholder trusts.
          </p>
          <p className="mt-2 text-sm font-medium text-accent">Take control of your AI before risk takes control of you.</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="mailto:hello@iagentsflow.com?subject=AI.GO%20demo%20request"
              className="glow-button inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-8"
            >
              Book Your Demo Today <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <a href="mailto:hello@iagentsflow.com" className="text-primary underline-offset-4 hover:underline">
              hello@iagentsflow.com
            </a>
          </p>
          {/* <footer className="mt-10 border-t border-border/60 pt-8 text-sm text-muted-foreground">
            <p className="mb-2 font-medium text-foreground">Explore more</p>
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <li>
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden className="select-none">
                ·
              </li>
              <li>
                <Link href="/tools/agentsflow" className="text-primary underline-offset-4 hover:underline">
                  AgentsFlow platform
                </Link>
              </li>
              <li aria-hidden className="select-none">
                ·
              </li>
              <li>
                <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </footer> */}
        </div>
      </div>
    </section>
  );
}
