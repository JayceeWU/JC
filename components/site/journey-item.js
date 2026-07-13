import { BulletList } from "@/components/site/bullet-list";
import { ThinkTankReportsDialog } from "@/components/site/think-tank-reports-dialog";
import { TechnologyBadges } from "@/components/site/technology-badges";

function getDescriptionItems(item) {
  if (item.highlights) {
    return item.highlights;
  }

  return item.description
    ?.split("\n")
    .map((line) => line.replace(/^(?:[\u2022\u00b7\u8def])\s*/, "").trim())
    .filter(Boolean);
}

export function JourneyItem({ item }) {
  const descriptionItems = getDescriptionItems(item);

  return (
    <article className="grid grid-cols-1 gap-y-2 rounded-lg px-3 py-6 transition-[background-color] duration-200 hover:bg-secondary/35 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:items-baseline lg:gap-x-4 lg:px-5">
      <p className="order-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground lg:order-none">
        {item.period}
      </p>
      <h3 className="order-3 min-w-0 text-pretty font-semibold leading-snug text-foreground lg:order-none">
        {item.title}
      </h3>
      <p className="order-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary/80 lg:order-none">
        {item.category}
      </p>
      <p className="order-4 min-w-0 text-sm font-medium text-primary lg:order-none">
        {item.organization}
      </p>
      <div className="order-5 min-w-0 lg:col-start-2 lg:order-none">
        {descriptionItems &&
          <BulletList
            items={descriptionItems}
            className="mt-3"
            renderItem={(descriptionItem) =>
              typeof descriptionItem === "string" ? (
                descriptionItem
              ) : (
                <ThinkTankReportsDialog
                  label={descriptionItem.label}
                  groups={descriptionItem.groups}
                />
              )
            }
          />
        }
        <TechnologyBadges
          technologies={item.technologies}
          ariaLabel="Skills and achievements"
          className="mt-4"
        />
      </div>
    </article>
  );
}
