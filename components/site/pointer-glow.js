"use client";

import { useEffect } from "react";

export function PointerGlow() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    let frameId = 0;

    const moveGlow = (event) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`
        );
      });
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", moveGlow);
    };
  }, []);

  return <div className="pointer-glow" aria-hidden="true" />;
}
