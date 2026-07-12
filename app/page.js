import { JourneyItem } from "@/components/site/journey-item";
import { PointerGlow } from "@/components/site/pointer-glow";
import { ProjectItem } from "@/components/site/project-item";
import { Sidebar } from "@/components/site/sidebar";
import {
  about,
  journey,
  navigation,
  profile,
  projects,
  socials
} from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <PointerGlow />
      <div className="relative z-10 mx-auto grid min-h-screen min-w-[1024px] max-w-[1440px] grid-cols-[38.2fr_61.8fr] gap-12 px-12 xl:gap-20 xl:px-20">
        <Sidebar
          profile={profile}
          navigation={navigation}
          socials={socials}
        />

        <main
          id="content"
          className="min-w-0 pb-24"
          tabIndex={-1}
        >
          <section
            id="about"
            className="section-anchor py-24"
          >
            <div className="space-y-5 text-pretty leading-7 text-muted-foreground">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            id="journey"
            className="section-anchor border-t border-border py-24"
          >
            <div className="-mx-5 divide-y divide-border/70">
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
            className="section-anchor border-t border-border py-24"
          >
            <div className="-mx-5 divide-y divide-border/70">
              {projects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
