import { ShieldCheck } from 'lucide-react';
import { HighlightHeading } from './highlight-heading';
import { personaSections } from './data';

export function AiGoPersonaSections() {
  return (
    <div id="stakeholders">
      {personaSections.map(({ slug, title, icon: Icon, heading, description, bullets, reversed, image }) => (
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
                className={`glass-card relative min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[280px] ${reversed ? 'lg:order-1' : ''}`}
                aria-label={`${title} dashboard preview`}
              >
                <img
                  src={image}
                  alt={`${title} governance dashboard preview`}
                  className="h-full min-h-[240px] w-full object-cover object-center sm:min-h-[280px]"
                  loading="lazy"
                  decoding="async"
                />
              </aside>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
