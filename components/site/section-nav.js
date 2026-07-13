"use client";

import { createContext, useContext, useMemo } from "react";
import { cn } from "@/lib/utils";

const SectionNavContext = createContext(null);

export function SectionNavProvider({ activeSection, activateSection, children }) {
  const value = useMemo(
    () => ({ activeSection, activateSection }),
    [activateSection, activeSection]
  );

  return (
    <SectionNavContext.Provider value={value}>
      {children}
    </SectionNavContext.Provider>
  );
}

export function SectionNav({ navigation, onNavigate }) {
  const sectionNav = useContext(SectionNavContext);

  if (!sectionNav) {
    throw new Error("SectionNav must be rendered inside SectionNavProvider");
  }

  const { activeSection } = sectionNav;

  return (
    <nav className="mt-16" aria-label="Portfolio sections">
      <ul className="flex flex-col items-start gap-4">
        {navigation.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                className={cn(
                  "group flex items-center gap-4 rounded-sm py-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:text-foreground",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();

                  if (onNavigate) {
                    onNavigate(sectionId);
                    return;
                  }

                  const section = document.getElementById(sectionId);
                  const scrollTarget =
                    sectionId === "about"
                      ? section
                      : section?.querySelector("[data-section-scroll-target]") ??
                        section;
                  const reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches;

                  scrollTarget?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                  });
                }}
              >
                <span
                  className={cn(
                    "h-px transition-[width,background-color] duration-200 group-focus-visible:w-16 group-focus-visible:bg-primary",
                    isActive
                      ? "w-16 bg-primary"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary"
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
