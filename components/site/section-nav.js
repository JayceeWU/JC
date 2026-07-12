"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const defaultSection = "about";

export function SectionNav({ navigation }) {
  const [activeSection, setActiveSection] = useState(defaultSection);

  const activateSection = useCallback((sectionId) => {
    setActiveSection(sectionId);

    const nextHash = `#${sectionId}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, []);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.slice(1));
    const currentSection = window.location.hash.slice(1);

    if (!sectionIds.includes(currentSection)) {
      window.history.replaceState(null, "", `#${defaultSection}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          activateSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      }
    );

    sectionIds.forEach((sectionId) => {
      observer.observe(document.getElementById(sectionId));
    });

    return () => observer.disconnect();
  }, [activateSection, navigation]);

  return (
    <nav className="mt-16" aria-label="Page sections">
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
                onClick={() => activateSection(sectionId)}
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
