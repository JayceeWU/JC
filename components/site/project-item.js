import { Badge } from "@/components/ui/badge";

export function ProjectItem({ project }) {
  return (
    <article className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-4 rounded-lg px-5 py-7 transition-[background-color] duration-200 hover:bg-secondary/35">
      <p className="font-mono text-sm font-semibold tabular-nums text-primary">
        {project.year}
      </p>
      <div className="min-w-0">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary/85">
          {project.context}
        </p>
        <ul className="mt-4 space-y-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="relative pl-4">
              <span
                className="absolute left-0 top-[0.7em] size-1 rounded-full bg-primary/70"
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
