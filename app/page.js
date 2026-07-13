import { JourneyItem } from "@/components/site/journey-item";
import { MobilePortfolioShell } from "@/components/site/mobile-portfolio-shell";
import { PointerGlow } from "@/components/site/pointer-glow";
import { ProjectItem } from "@/components/site/project-item";
import { Sidebar } from "@/components/site/sidebar";
import {
  about,
  journey,
  navigation,
  projects,
  socials
} from "@/lib/portfolio-data";

function MobileSectionHeading({ children }) {
  return (
    <div className="lg:hidden">
      <h2 className="pb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {children}
      </h2>
      <hr className="-mx-6 border-border" aria-hidden="true" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <PointerGlow />
      <MobilePortfolioShell navigation={navigation} socials={socials}>
        <div className="relative z-10 mx-auto min-h-screen max-w-[1440px] px-6 lg:grid lg:grid-cols-[3fr_7fr] lg:gap-12 lg:px-12 xl:gap-20 xl:px-20">
          <Sidebar
            navigation={navigation}
            socials={socials}
          />

          <main
            id="content"
            className="min-w-0 pb-16 lg:pb-24"
            tabIndex={-1}
          >
            <section
              id="about"
              className="section-anchor pt-4 pb-16 lg:py-24"
            >
              <div className="space-y-5 text-pretty leading-7 text-muted-foreground">
                {about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section
              id="journey"
              className="section-anchor border-border pb-16 pt-0 lg:border-t lg:py-24"
            >
              <MobileSectionHeading>Journey</MobileSectionHeading>
              <div
                className="-mx-3 divide-y divide-border/70 lg:-mx-5"
                data-section-scroll-target
              >
                {journey.map((item) => (
                  <JourneyItem
                    key={`${item.period}-${item.title}`}
                    item={item}
                  />
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="section-anchor border-border pb-16 pt-0 lg:border-t lg:py-24"
            >
              <MobileSectionHeading>Projects</MobileSectionHeading>
              <div
                className="-mx-3 divide-y divide-border/70 lg:-mx-5"
                data-section-scroll-target
              >
                {projects.map((project) => (
                  <ProjectItem key={project.title} project={project} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </MobilePortfolioShell>
    </>
  );
}
