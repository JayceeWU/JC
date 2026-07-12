import { cn } from "@/lib/utils";

export function BulletList({ items, className }) {
  return (
    <ul
      className={cn(
        "space-y-3 text-pretty text-sm leading-relaxed text-muted-foreground",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="relative pl-4">
          <span
            className="absolute left-0 top-[0.7em] size-1 rounded-full bg-primary/70"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
