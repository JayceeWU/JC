import { cn } from "@/lib/utils";

export function Badge({ children, className }) {
  return (
    <span
      translate="no"
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium leading-none text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
