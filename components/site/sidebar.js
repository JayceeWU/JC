import { SectionNav } from "@/components/site/section-nav";
import { SocialLinks } from "@/components/site/social-links";

export function Sidebar({ profile, navigation, socials }) {
  return (
    <header className="sticky top-0 flex h-screen flex-col justify-between py-24">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Jiaxuan Wu 吴佳璇
        </p>
        <h1 className="max-w-xl text-balance text-4xl font-bold tracking-tight text-foreground xl:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-md text-pretty text-lg font-medium leading-relaxed text-foreground/90">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {profile.introduction}
        </p>

        <SectionNav navigation={navigation} />
      </div>

      <footer>
        <SocialLinks socials={socials} />
      </footer>
    </header>
  );
}
