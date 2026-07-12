import { BulletList } from "@/components/site/bullet-list";
import { Badge } from "@/components/ui/badge";

export function ProjectItem({ project }) {
  return (
    <article className="grid grid-cols-1 gap-4 rounded-lg px-3 py-7 transition-[background-color] duration-200 hover:bg-secondary/35 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:px-5">
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
        <BulletList items={project.highlights} className="mt-4" />
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
