import { cn } from "@/lib/utils";

function getItemKey(item) {
  return typeof item === "string" ? item : item.label;
}

export function BulletList({ items, className, renderItem }) {
  return (
    <ul
      className={cn(
        "space-y-3 text-pretty text-sm leading-relaxed text-muted-foreground",
        className
      )}
    >
      {items.map((item) => (
        <li key={getItemKey(item)} className="relative pl-4">
          <span
            className="absolute left-0 top-[0.7em] size-1 rounded-full bg-primary/70"
            aria-hidden="true"
          />
          {renderItem ? renderItem(item) : item}
        </li>
      ))}
    </ul>
  );
}
