"use client";

import { ArrowUpRight, Files, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

function ReportTitle({ report }) {
  const titleContent = (
    <>
      <span>{report.title}</span>
      {report.href ? (
        <ArrowUpRight
          className="mt-0.5 size-4 shrink-0 transition-transform duration-200 group-hover/report:-translate-y-0.5 group-hover/report:translate-x-0.5"
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (report.href) {
    return (
      <a
        href={report.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group/report inline-flex items-start gap-1.5 font-semibold leading-snug text-foreground transition-colors duration-200 hover:text-primary"
      >
        {titleContent}
      </a>
    );
  }

  return (
    <h4 className="font-semibold leading-snug text-foreground">
      {titleContent}
    </h4>
  );
}

function ReportItem({ report }) {
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <article>
        <ReportTitle report={report} />
        <p className="mt-2 text-sm font-medium leading-relaxed text-primary/80">
          {[
            report.year,
            report.publication,
            report.collaborators?.length
              ? `With ${report.collaborators.join(", ")}`
              : null
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
        {report.highlights?.length ? (
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {report.highlights.map((highlight) => (
              <li key={highlight} className="relative pl-4">
                <span
                  className="absolute left-0 top-[0.7em] size-1 rounded-full bg-primary/70"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  );
}

export function ThinkTankReportsDialog({ label, groups }) {
  const reportCount = groups.reduce(
    (total, group) => total + group.reports.length,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group/reports inline-flex w-full cursor-pointer items-center gap-2 text-left transition-colors duration-200 hover:font-semibold hover:text-primary focus-visible:font-semibold focus-visible:text-primary"
        >
          <span>{label}</span>
          <Files
            className="size-4 shrink-0 transition-transform duration-200 group-hover/reports:scale-110 group-focus-visible/reports:scale-110"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>
      </DialogTrigger>

      <DialogContent aria-describedby="think-tank-reports-description">
        <header className="flex shrink-0 items-start justify-between gap-6 border-b border-border px-6 pb-5 pt-[calc(1.25rem+env(safe-area-inset-top))] lg:px-8 lg:pt-6">
          <div>
            <DialogTitle className="text-balance text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Think Tank Reports
            </DialogTitle>
            <DialogDescription
              id="think-tank-reports-description"
              className="mt-2 text-sm leading-relaxed text-muted-foreground"
            >
              {reportCount} reports spanning financial markets, economic policy,
              and recurring research publications.
            </DialogDescription>
          </div>
          <DialogClose asChild>
            <button
              type="button"
              className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
              aria-label="Close think tank reports"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </DialogClose>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-7 lg:px-8 lg:pb-8">
          <div className="space-y-10">
            {groups.map((group) => (
              <section key={group.title} aria-labelledby={`report-group-${group.title}`}>
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/80 pb-3">
                  <h3
                    id={`report-group-${group.title}`}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
                  >
                    {group.title}
                  </h3>
                  <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {group.reports.length}
                  </span>
                </div>
                <ul className="divide-y divide-border/70">
                  {group.reports.map((report) => (
                    <ReportItem
                      key={`${report.title}-${report.year}`}
                      report={report}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
