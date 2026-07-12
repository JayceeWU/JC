import { Badge } from "@/components/ui/badge";

export function JourneyItem({ item }) {
  return (
    <article className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-4 rounded-lg px-5 py-6 transition-[background-color] duration-200 hover:bg-secondary/35">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {item.period}
        </p>
        <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary/80">
          {item.category}
        </p>
      </div>
      <div className="min-w-0">
        <h3 className="text-pretty font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {item.organization}
        </p>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Relevant topics">
          {item.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
