import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechnologyBadges({
  technologies,
  ariaLabel,
  className
}) {
  return (
    <ul
      className={cn("flex flex-wrap gap-2", className)}
      aria-label={ariaLabel}
    >
      {technologies.map((technology) => (
        <li key={technology}>
          <Badge>{technology}</Badge>
        </li>
      ))}
    </ul>
  );
}
