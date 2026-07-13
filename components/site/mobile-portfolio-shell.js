"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { ProfileIdentity } from "@/components/site/profile-identity";
import {
  SectionNav,
  SectionNavProvider
} from "@/components/site/section-nav";
import { SocialLinks } from "@/components/site/social-links";

const mobileQuery = "(max-width: 1023px)";
const defaultSection = "about";
const scrollKeys = new Set([
  "ArrowDown",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  " "
]);

function ChevronIcon({ expanded }) {
  return (
    <svg
      className={`size-5 shrink-0 text-primary transition-transform duration-200 ${
        expanded ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ProfileSurface({
  navigation,
  socials,
  sectionRef,
  onNavigate,
  onClose,
  onDrawerTransitionEnd,
  closeButtonRef,
  drawerExpanded = false,
  drawerInstant = false,
  contextual = false
}) {
  return (
    <section
      ref={sectionRef}
      id={contextual ? "mobile-profile-drawer" : undefined}
      className={`mobile-profile-surface border-b border-border bg-card px-6 pb-8 lg:hidden ${
        contextual
          ? "mobile-context-drawer fixed inset-x-0 top-0 z-50 shadow-2xl"
          : "relative z-10"
      }`}
      data-expanded={contextual ? drawerExpanded : undefined}
      data-instant={contextual ? drawerInstant : undefined}
      onTransitionEnd={contextual ? onDrawerTransitionEnd : undefined}
      aria-label={
        contextual
          ? "Expanded profile and portfolio navigation"
          : "Jaycee Wu profile and portfolio navigation"
      }
    >
      {contextual ? (
        <button
          ref={closeButtonRef}
          type="button"
          className="mobile-profile-toggle absolute right-3.5 flex size-10 items-center justify-center rounded-full"
          onClick={onClose}
          aria-label="Collapse profile and navigation"
        >
          <ChevronIcon expanded />
        </button>
      ) : null}

      <div className="pl-3">
        <ProfileIdentity headingLevel="h2" />
        <SectionNav navigation={navigation} onNavigate={onNavigate} />
      </div>

      <footer className="mt-8">
        <SocialLinks socials={socials} />
      </footer>
    </section>
  );
}

export function MobilePortfolioShell({ navigation, socials, children }) {
  const [isReady, setIsReady] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [isDrawerClosing, setIsDrawerClosing] = useState(false);
  const [isDrawerInstant, setIsDrawerInstant] = useState(false);
  const [isScrollGuardActive, setIsScrollGuardActive] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(64);
  const [activeSection, setActiveSection] = useState(defaultSection);
  const introRef = useRef(null);
  const drawerRef = useRef(null);
  const drawerHeightRef = useRef(0);
  const headerRef = useRef(null);
  const headerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastHeaderHeightRef = useRef(0);
  const scrollGuardRef = useRef({
    keyboard: false,
    touch: false,
    wheel: false
  });
  const wheelGuardTimerRef = useRef(0);
  const activeSectionRef = useRef(defaultSection);
  const pendingCloseRef = useRef(null);
  const closeFallbackTimerRef = useRef(0);

  const activateSection = useCallback((sectionId, { syncHash = true } = {}) => {
    if (activeSectionRef.current !== sectionId) {
      activeSectionRef.current = sectionId;
      setActiveSection(sectionId);
    }

    if (syncHash) {
      const nextHash = `#${sectionId}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
      }
    }
  }, []);

  const finalizeDrawerClose = useCallback(({
    restoreFocus = true
  } = {}) => {
    window.clearTimeout(closeFallbackTimerRef.current);
    closeFallbackTimerRef.current = 0;
    pendingCloseRef.current = null;
    setIsDrawerClosing(false);

    setIsDrawerInstant(true);
    setIsDrawerOpen(false);
    setIsDrawerExpanded(false);
    setDrawerHeight(0);
    drawerHeightRef.current = 0;

    window.requestAnimationFrame(() => {
      if (restoreFocus) {
        headerButtonRef.current?.focus({ preventScroll: true });
      }
    });
  }, []);

  const closeDrawer = useCallback(({
    restoreFocus = true,
    animated = true
  } = {}) => {
    if (pendingCloseRef.current) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const closeRequest = { restoreFocus };

    if (animated && isDrawerExpanded && !reduceMotion) {
      pendingCloseRef.current = closeRequest;
      setIsDrawerClosing(true);
      setIsDrawerExpanded(false);
      closeFallbackTimerRef.current = window.setTimeout(() => {
        const pendingClose = pendingCloseRef.current;
        if (pendingClose) {
          finalizeDrawerClose(pendingClose);
        }
      }, 500);
      return;
    }

    setIsDrawerInstant(true);
    setIsDrawerClosing(false);
    finalizeDrawerClose(closeRequest);
  }, [finalizeDrawerClose, isDrawerExpanded]);

  const handleDrawerTransitionEnd = useCallback((event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform" ||
      !pendingCloseRef.current
    ) {
      return;
    }

    finalizeDrawerClose(pendingCloseRef.current);
  }, [finalizeDrawerClose]);

  const getHeaderHeight = useCallback(() => {
    const headerHeight =
      headerRef.current?.getBoundingClientRect().height ??
      headerButtonRef.current?.getBoundingClientRect().height ??
      64;

    lastHeaderHeightRef.current = headerHeight;
    setMobileHeaderHeight((currentHeight) =>
      currentHeight === headerHeight ? currentHeight : headerHeight
    );
    return headerHeight;
  }, []);

  const openDrawer = useCallback(() => {
    getHeaderHeight();

    setIsDrawerClosing(false);
    setIsDrawerInstant(true);
    setIsDrawerExpanded(false);
    setIsDrawerOpen(true);
  }, [getHeaderHeight]);

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    if (!section) {
      return;
    }

    if (sectionId === "about") {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const headerHeight = lastHeaderHeightRef.current || 64;

      window.scrollTo({
        top: Math.max(0, sectionTop - headerHeight),
        behavior
      });
      return;
    }

    const mobileScrollTarget = section.querySelector(
      "[data-section-scroll-target]"
    );

    if (window.matchMedia(mobileQuery).matches && mobileScrollTarget) {
      const targetTop =
        mobileScrollTarget.getBoundingClientRect().top + window.scrollY;
      const headerHeight = lastHeaderHeightRef.current || 64;

      window.scrollTo({
        top: Math.max(0, targetTop - headerHeight),
        behavior
      });
      return;
    }

    section.scrollIntoView({
      behavior,
      block: "start"
    });
  }, []);

  const navigateFromIntro = useCallback((sectionId) => {
    scrollToSection(sectionId);
  }, [scrollToSection]);

  const navigateFromDrawer = useCallback((sectionId) => {
    window.clearTimeout(closeFallbackTimerRef.current);
    closeFallbackTimerRef.current = 0;
    pendingCloseRef.current = null;
    setIsDrawerClosing(false);
    setIsDrawerInstant(true);
    setIsDrawerExpanded(false);
    setIsDrawerOpen(false);
    setDrawerHeight(0);
    drawerHeightRef.current = 0;

    window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  }, [scrollToSection]);

  const setScrollGuard = useCallback((inputType, isActive) => {
    if (scrollGuardRef.current[inputType] === isActive) {
      return;
    }

    scrollGuardRef.current[inputType] = isActive;
    const nextGuardState = Object.values(scrollGuardRef.current).some(Boolean);
    setIsScrollGuardActive((currentState) =>
      currentState === nextGuardState ? currentState : nextGuardState
    );
  }, []);

  useEffect(() => () => {
    window.clearTimeout(closeFallbackTimerRef.current);
    window.clearTimeout(wheelGuardTimerRef.current);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const currentSection = window.location.hash.slice(1);
      const hasValidHash = navigation.some(
        (item) => item.href.slice(1) === currentSection
      );

      activateSection(
        hasValidHash ? currentSection : defaultSection,
        { syncHash: false }
      );
      setIsIntroVisible(!hasValidHash);
      setIsReady(true);

      if (hasValidHash) {
        document.getElementById(currentSection)?.scrollIntoView({
          behavior: "auto",
          block: "start"
        });
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activateSection, navigation]);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.slice(1));
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      if (isDrawerOpen) {
        return;
      }

      const isMobile = window.matchMedia(mobileQuery).matches;
      const probeY = isMobile
        ? (headerRef.current?.offsetHeight ??
            (lastHeaderHeightRef.current || 64)) + 1
        : window.innerHeight * 0.25;

      if (isMobile) {
        const introBottom =
          introRef.current?.getBoundingClientRect().bottom ?? Infinity;
        const nextIntroVisible = introBottom > probeY;

        if (nextIntroVisible !== isIntroVisible) {
          setIsIntroVisible(nextIntroVisible);
        }

        if (nextIntroVisible) {
          activateSection(defaultSection, { syncHash: false });
          return;
        }
      }

      let nextSection = sectionIds[0] ?? defaultSection;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= probeY) {
          nextSection = sectionId;
          continue;
        }

        break;
      }

      activateSection(nextSection);
    };

    const scheduleUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frameId);
    };
  }, [activateSection, isDrawerOpen, isIntroVisible, navigation]);

  useLayoutEffect(() => {
    if (!isDrawerOpen || !window.matchMedia(mobileQuery).matches) {
      return undefined;
    }

    const drawer = drawerRef.current;
    if (!drawer) {
      return undefined;
    }

    const updateHeight = () => {
      const nextHeight = drawer.getBoundingClientRect().height;
      drawerHeightRef.current = nextHeight;
      setDrawerHeight((currentHeight) =>
        currentHeight === nextHeight ? currentHeight : nextHeight
      );
    };

    updateHeight();
    closeButtonRef.current?.focus({ preventScroll: true });

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(drawer);
    return () => resizeObserver.disconnect();
  }, [isDrawerOpen]);

  useEffect(() => {
    if (
      !isDrawerOpen ||
      drawerHeight <= 0 ||
      isDrawerExpanded ||
      pendingCloseRef.current
    ) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsDrawerInstant(false);
      setIsDrawerExpanded(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [drawerHeight, isDrawerExpanded, isDrawerOpen]);

  useEffect(() => {
    if ((!isDrawerOpen || drawerHeight <= 0) && !isScrollGuardActive) {
      return undefined;
    }

    const closeFromScrollIntent = () => {
      if (isDrawerOpen) {
        closeDrawer({
          restoreFocus: false,
          animated: true
        });
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
      setScrollGuard("wheel", true);
      window.clearTimeout(wheelGuardTimerRef.current);
      wheelGuardTimerRef.current = window.setTimeout(() => {
        setScrollGuard("wheel", false);
      }, 140);
      closeFromScrollIntent();
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      setScrollGuard("touch", true);
      closeFromScrollIntent();
    };

    const handleTouchEnd = () => {
      setScrollGuard("touch", false);
    };

    const handleKeyDown = (event) => {
      const target = event.target;
      const isInteractiveTarget =
        target instanceof Element &&
        target.closest(
          'a, button, input, select, textarea, [contenteditable="true"]'
        );

      if (
        !scrollKeys.has(event.key) ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        isInteractiveTarget
      ) {
        return;
      }

      event.preventDefault();
      setScrollGuard("keyboard", true);
      closeFromScrollIntent();
    };

    const handleKeyUp = (event) => {
      if (!scrollKeys.has(event.key)) {
        return;
      }

      setScrollGuard("keyboard", false);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    closeDrawer,
    drawerHeight,
    isDrawerOpen,
    isScrollGuardActive,
    setScrollGuard
  ]);

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeDrawer, isDrawerOpen]);

  const canShowHeader = isReady && !isIntroVisible;
  const isHeaderVisible =
    canShowHeader && (!isDrawerOpen || isDrawerClosing);
  const isHeaderInteractive = canShowHeader && !isDrawerOpen;
  const activeSectionLabel =
    navigation.find((item) => item.href === `#${activeSection}`)?.label ??
    "About";

  return (
    <SectionNavProvider
      activeSection={activeSection}
      activateSection={activateSection}
    >
    <div
      className="mobile-portfolio-shell relative"
      data-scroll-guard-active={isDrawerOpen || isScrollGuardActive}
      style={{
        "--mobile-context-drawer-space": `${drawerHeight}px`,
        "--mobile-header-space": `${mobileHeaderHeight}px`
      }}
    >
      <header
        ref={headerRef}
        className="mobile-site-header fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md lg:hidden"
        data-visible={isHeaderVisible}
        data-interactive={isHeaderInteractive}
        data-reveal-with-drawer={isDrawerClosing}
        aria-hidden={!isHeaderInteractive}
      >
        <button
          ref={headerButtonRef}
          type="button"
          className="flex min-h-16 w-full items-center justify-between gap-4 px-6 text-left text-sm font-semibold tracking-tight text-foreground"
          onClick={openDrawer}
          disabled={!isHeaderInteractive}
          tabIndex={isHeaderInteractive ? 0 : -1}
          aria-label={`Open profile and navigation. Current section: ${activeSectionLabel}`}
          aria-expanded={isDrawerOpen}
          aria-controls={isDrawerOpen ? "mobile-profile-drawer" : undefined}
        >
          <span className="flex items-baseline gap-3">
            <span className="text-base text-foreground">Jaycee</span>
            <span className="text-xs uppercase text-primary">
              {activeSectionLabel}
            </span>
          </span>
          <ChevronIcon expanded={false} />
        </button>
      </header>

      <ProfileSurface
        navigation={navigation}
        socials={socials}
        sectionRef={introRef}
        onNavigate={navigateFromIntro}
      />

      {isDrawerOpen ? (
        <ProfileSurface
          navigation={navigation}
          socials={socials}
          sectionRef={drawerRef}
          onNavigate={navigateFromDrawer}
          onClose={() => closeDrawer()}
          onDrawerTransitionEnd={handleDrawerTransitionEnd}
          closeButtonRef={closeButtonRef}
          drawerExpanded={isDrawerExpanded}
          drawerInstant={isDrawerInstant}
          contextual
        />
      ) : null}

      <div
        className="mobile-portfolio-content"
        data-drawer-expanded={isDrawerExpanded}
        data-drawer-instant={isDrawerInstant}
      >
        {children}
      </div>
    </div>
    </SectionNavProvider>
  );
}
