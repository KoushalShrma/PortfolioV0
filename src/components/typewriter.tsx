'use client';

import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_STRINGS = [
  'Visionary Developer',
  'Strategic Thinker',
  'Innovation Seeker',
  'Excellence Pursuer',
  'Ambitious Engineer',
  'Solution Architect',
  'Code Craftsman',
  'Tech Enthusiast',
  'Future Builder',
  'Relentless Learner',
];

type Props = {
  strings?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

const Typewriter: React.FC<Props> = ({
  strings,
  // slightly slower on average with jitter to feel human
  typingSpeed = 60,
  deletingSpeed = 35,
  // increase pause so the typed phrase stays visible longer
  pause = 4000,
  className = '',
}) => {
  // stabilize strings so the effect doesn't re-run unnecessarily
  const stableStrings = useMemo(
    () => (strings && strings.length ? strings : DEFAULT_STRINGS),
    [strings]
  );

  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCaretVisible((v) => !v), 520);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const current = stableStrings[idx % stableStrings.length] || '';

    const jitter = (base: number) =>
      Math.max(35, Math.round(base + (Math.random() - 0.5) * base));

    if (!isDeleting) {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          jitter(typingSpeed)
        );
      } else {
        // schedule deleting after pause; because stableStrings is memoized, this timer will not be cleared by incidental renders
        timer = setTimeout(
          () => setIsDeleting(true),
          pause + Math.round(Math.random() * 600)
        );
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          jitter(deletingSpeed)
        );
      } else {
        timer = setTimeout(
          () => {
            setIsDeleting(false);
            setIdx((i) => (i + 1) % stableStrings.length);
          },
          350 + Math.round(Math.random() * 350)
        );
      }
    }

    return () => clearTimeout(timer);
    // Note: stableStrings is memoized and only changes if `strings` prop changes; include it to be safe.
  }, [text, isDeleting, idx, stableStrings, typingSpeed, deletingSpeed, pause]);

  // Render the typed text and the caret
  // Use min-h to ensure enough space for descenders (g, j, p, q, y)
  // Caret adapts to theme: white in dark mode, black in light mode
  return (
    <div
      className={`flex min-h-16 items-center justify-center md:min-h-20`}
      style={{ overflow: 'visible' }}
    >
      <span
        className={`${className} inline-block`}
        style={{ lineHeight: '1.5' }}
        aria-live="polite"
      >
        {text}
      </span>
      <span
        className={`font-heading ml-2 inline-block text-4xl font-normal text-black md:text-5xl dark:text-white`}
        style={{ opacity: caretVisible ? 1 : 0, lineHeight: '1.5' }}
        aria-hidden
      >
        |
      </span>
    </div>
  );
};

export default Typewriter;
