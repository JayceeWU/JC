import { cn } from "@/lib/utils";

export function ContentSection({ id, label, title, children, className }) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("section-anchor py-24", className)}
      aria-labelledby={headingId}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {label}
      </p>
      <h2
        id={headingId}
        className="mb-8 text-balance text-2xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
