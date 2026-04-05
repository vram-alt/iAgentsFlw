export function AiGoPageNav() {
  const links = [
    { href: '#governance-gap', label: 'Governance gap' },
    { href: '#control-plane', label: 'Control plane' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#stakeholders', label: 'Stakeholders' },
    { href: '#cta', label: 'Contact' },
  ] as const;

  return (
    <nav
      aria-label="On this page"
      className="border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6 lg:px-8"
    >
      <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-4 gap-y-2 text-sm">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="text-primary underline-offset-4 hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
