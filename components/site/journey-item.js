import { Badge } from "@/components/ui/badge";

export function JourneyItem({ item }) {
  return (
    <article className="grid grid-cols-[8.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 rounded-lg px-5 py-6 transition-[background-color] duration-200 hover:bg-secondary/35">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {item.period}
      </p>
      <h3 className="min-w-0 text-pretty font-semibold leading-snug text-foreground">
        {item.title}
      </h3>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary/80">
        {item.category}
      </p>
      <p className="min-w-0 text-sm font-medium text-primary">
        {item.organization}
      </p>
      <div className="col-start-2 min-w-0">
        {item.description && (
          <p className="mt-3 whitespace-pre-line text-pretty text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Relevant topics">
          {item.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
