import { ShieldCheck } from 'lucide-react';
import { HighlightHeading } from './highlight-heading';
import { personaSections } from './data';

export function AiGoPersonaSections() {
  return (
    <div id="stakeholders">
      {personaSections.map(({ slug, title, icon: Icon, heading, description, bullets, reversed }) => (
        <section
          key={slug}
          aria-labelledby={`persona-${slug}-heading`}
          className="px-4 py-14 md:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className={reversed ? 'lg:order-2' : undefined}>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  <span>For {title}</span>
                </p>
                <h2
                  id={`persona-${slug}-heading`}
                  className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl"
                >
                  <HighlightHeading text={heading} />
                </h2>
                <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">{description}</p>
                <ul className="mt-6 space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside
                className={`glass-card flex min-h-[240px] flex-col items-center justify-center rounded-2xl p-6 sm:min-h-[280px] sm:p-8 ${reversed ? 'lg:order-1' : ''}`}
                aria-label={`${title} dashboard preview`}
              >
                <Icon className="mb-4 h-14 w-14 text-primary/60 sm:h-16 sm:w-16" aria-hidden />
                <p className="text-lg font-semibold gradient-text">{title} Dashboard</p>
                <p className="mt-2 text-sm text-muted-foreground">Tailored governance view</p>
              </aside>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
