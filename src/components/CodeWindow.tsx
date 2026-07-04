import { useEffect, useState, type ReactNode } from "react";

export interface Token {
  text: string;
  cls: string;
}

interface Props {
  file: string;
  lines: Token[][];
  speed?: number;
  className?: string;
  minHeight?: number;
  children?: ReactNode;
}

/** Reusable animated code window: types the given tokenized lines
 *  character-by-character, pauses, then replays. */
export default function CodeWindow({
  file,
  lines,
  speed = 24,
  className = "",
  minHeight = 285,
  children,
}: Props) {
  const stream = lines.flatMap((line, li) => [
    ...line.flatMap((tok) =>
      tok.text.split("").map((ch) => ({ ch, cls: tok.cls, line: li }))
    ),
    { ch: "\n", cls: "p", line: li },
  ]);

  const [pos, setPos] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (pos < stream.length) {
      timer = setTimeout(() => setPos(pos + 1), speed);
    } else {
      timer = setTimeout(() => setPos(0), 8000); // pause, then replay
    }
    return () => clearTimeout(timer);
  }, [pos, stream.length, speed]);

  const runs: { cls: string; text: string }[] = [];
  for (const { ch, cls } of stream.slice(0, pos)) {
    const last = runs[runs.length - 1];
    if (last && last.cls === cls) last.text += ch;
    else runs.push({ cls, text: ch });
  }

  return (
    <div className={`codecard ${className}`}>
      <div className="codecard__border" aria-hidden="true" />
      <div className="codecard__inner">
        <div className="codecard__bar">
          <span className="codecard__dot codecard__dot--r" />
          <span className="codecard__dot codecard__dot--y" />
          <span className="codecard__dot codecard__dot--g" />
          <span className="codecard__file">{file}</span>
        </div>
        <pre className="codecard__code" style={{ minHeight }}>
          <code>
            {runs.map((r, i) => (
              <span key={i} className={`tok-${r.cls}`}>
                {r.text}
              </span>
            ))}
            <span className="codecard__caret" />
          </code>
        </pre>
      </div>
      {children}
    </div>
  );
}
