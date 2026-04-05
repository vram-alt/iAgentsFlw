import { featureCards } from './data';

export function AiGoCapabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="px-4 py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <h2 id="capabilities-heading" className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl">
          What AgentsFlow <span className="gradient-text">Delivers</span>
        </h2>
        <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:border-primary/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
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
