import { HIGHLIGHT_WORDS } from './data';

type Props = {
  readonly text: string;
  readonly id?: string;
  readonly className?: string;
};

/** Server-rendered heading with gradient spans; no user HTML — safe by construction. */
export function HighlightHeading({ text, id, className }: Props) {
  const words = text.split(' ');
  return (
    <span id={id} className={className}>
      {words.map((word, i) => {
        const isHighlight = HIGHLIGHT_WORDS.some((h) => word.includes(h));
        return (
          <span key={`${word}-${i}`}>
            {isHighlight ? <span className="gradient-text">{word}</span> : word}
            {i < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </span>
  );
}
