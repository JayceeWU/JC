import { ProfileIdentity } from "@/components/site/profile-identity";
import { SectionNav } from "@/components/site/section-nav";
import { SocialLinks } from "@/components/site/social-links";

export function Sidebar({ navigation, socials }) {
  return (
    <header className="sticky top-0 hidden h-screen flex-col justify-between py-24 lg:flex">
      <div>
        <ProfileIdentity />
        <SectionNav navigation={navigation} />
      </div>

      <footer>
        <SocialLinks socials={socials} />
      </footer>
    </header>
  );
}
