'use client';

import { useEffect, useState } from 'react';

type Options = { duration?: number; startDelay?: number };

export function useCountUp(target: number, run: boolean, opts: Options = {}): number {
  const { duration = 900, startDelay = 0 } = opts;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const begin = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(Math.round(target * ease(t)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (startDelay > 0) {
      const timer = window.setTimeout(begin, startDelay);
      return () => {
        window.clearTimeout(timer);
        cancelAnimationFrame(raf);
      };
    }

    begin();
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration, startDelay]);

  return value;
}
