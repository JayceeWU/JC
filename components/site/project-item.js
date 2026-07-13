import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BulletList } from "@/components/site/bullet-list";
import { Badge } from "@/components/ui/badge";

export function ProjectItem({ project }) {
  return (
    <article className="group relative grid cursor-pointer grid-cols-1 gap-4 rounded-lg px-3 py-7 transition-[background-color] duration-200 hover:bg-secondary/35 has-[:focus-visible]:bg-secondary/35 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:px-5">
      <div className="flex w-[8.5rem] flex-col items-start lg:mt-2">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="8.5rem"
          className="h-auto w-[8.5rem] rounded-md border border-border/70"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex origin-left items-start gap-1.5 rounded-sm transition-transform duration-200 ease-out after:absolute after:inset-0 after:content-[''] group-hover:scale-[1.12] focus-visible:scale-[1.12]"
          >
            <span>{project.title}</span>
            <ArrowUpRight
              className="mt-0.5 size-5 shrink-0 origin-center stroke-[1.8] text-foreground transition-[color,stroke-width,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:stroke-[2.8] group-hover:text-primary group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:stroke-[2.8] group-focus-visible/link:text-primary"
              aria-hidden="true"
            />
          </a>
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
