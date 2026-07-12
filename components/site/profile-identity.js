export function ProfileIdentity({ headingLevel: Heading = "h1" }) {
  return (
    <div>
      <Heading className="max-w-xl text-balance text-4xl font-bold tracking-tight text-foreground xl:text-5xl">
        Jaycee
      </Heading>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
        Jiaxuan Wu 吴佳璇
      </p>
      <p className="mt-5 max-w-md whitespace-pre-line text-pretty text-sm font-medium leading-relaxed text-foreground/90">
        {"M.S. CS @ UCSC\nPrev. ECON Researcher @ PKU"}
      </p>
    </div>
  );
}
