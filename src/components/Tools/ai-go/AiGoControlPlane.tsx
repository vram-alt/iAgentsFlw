import { ShieldCheck } from 'lucide-react';
import { controlPlaneBullets } from './data';

export function AiGoControlPlane() {
  return (
    <section
      id="control-plane"
      aria-labelledby="control-plane-heading"
      className="section-glow px-4 py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 id="control-plane-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              One <span className="gradient-text">Control Plane</span> for All AI
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-base text-muted-foreground md:text-lg">
              Unify your AI ecosystem with a single control plane that provides centralized governance, real-time monitoring, and automated compliance across every agent and application.
            </p>
            <ul className="mt-6 space-y-3">
              {controlPlaneBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside
            className="overflow-hidden"
            aria-label="Control plane dashboard preview"
          >
            <div className="relative aspect-[16/15] w-full overflow-hidden rounded-2xl border border-border/50 bg-card/20 ring-1 ring-border/30">
              {/* eslint-disable-next-line @next/next/no-img-element -- explicit native img for external asset */}
              <img
                src="https://iagentsflow.com/images/ai-go-image.webp"
                alt="AI.GO control plane dashboard — agents, policies, compliance, and risk in one view"
                className="absolute inset-0 h-full w-full object-contain object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
