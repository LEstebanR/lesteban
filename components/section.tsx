interface SectionProps {
  title: string
  children: React.ReactNode
}

/** Marginalia layout: the section title sits in the left margin, the content in the reading column. */
export function Section({ title, children }: SectionProps) {
  return (
    <section className="border-border grid gap-6 border-t pt-8 md:grid-cols-12 md:gap-10">
      <h2 className="font-heading text-muted-foreground text-lg md:sticky md:top-24 md:col-span-3 md:self-start">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}
