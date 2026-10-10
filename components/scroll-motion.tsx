"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.dataset.motionReady = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);

  return <div ref={rootRef} className="scroll-motion-root">{children}</div>;
}
