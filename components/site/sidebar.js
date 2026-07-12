import { SectionNav } from "@/components/site/section-nav";
import { SocialLinks } from "@/components/site/social-links";

export function Sidebar({ navigation, socials }) {
  return (
    <header className="sticky top-0 flex h-screen flex-col justify-between py-24">
      <div>
        <h1 className="max-w-xl text-balance text-4xl font-bold tracking-tight text-foreground xl:text-5xl">
          Jaycee
        </h1>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Jiaxuan Wu 吴佳璇
        </p>
        <p className="mt-5 whitespace-pre-line max-w-md text-pretty text-sm font-medium leading-relaxed text-foreground/90">
          {"M.S. CS @ UCSC\nPrev. ECON Researcher @ PKU"}
        </p>

        <SectionNav navigation={navigation} />
      </div>

      <footer>
        <SocialLinks socials={socials} />
      </footer>
    </header>
  );
}
