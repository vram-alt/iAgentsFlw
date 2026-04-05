import { problemCards } from './data';

export function AiGoGovernanceGap() {
  return (
    <section
      id="governance-gap"
      aria-labelledby="governance-gap-heading"
      className="px-4 py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 id="governance-gap-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            AI is scaling fast. <span className="gradient-text">Governance isn&apos;t.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Enterprises are rapidly adopting AI, but governance is lagging behind—resulting in risk, compliance issues, and security gaps.
          </p>
        </div>
        <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <article className="glass-card group h-full rounded-2xl p-5 transition-transform duration-300 motion-safe:hover:scale-[1.02] sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
