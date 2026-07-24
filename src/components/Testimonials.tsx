import { SectionHead } from "@/components/SectionHead"

/* CSS-only scroll-snap carousel — deliberately no JS and no embla/shadcn Carousel. */

const quotes = [
  {
    text: "These guys did such an amazing job on our patio that now whenever any of the properties I manage need flooring I call them first. I wish they could do all the services we need since they do what they say, and do it when they tell you it will be done…no games.",
    cite: "James S.",
  },
  {
    text: "Professional and friendly service. Fast, quality install. We love our beautiful patio!",
    cite: "Jessica W.",
  },
  {
    text: "The work speaks for itself, it was designed and executed flawlessly. When someone shows up to work knowing they won’t see you again and still treats your belongings like his own, that is what surprised me.",
    cite: "George H.",
  },
] as const

export function Testimonials() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Happy Customers" title="Testimonials" />
      <div className="quotes-fade relative">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-[6%] pt-1 pb-3.5 [scroll-padding-inline:6%]">
          {quotes.map(({ text, cite }) => (
            <div
              key={cite}
              className="quote relative shrink-0 grow-0 basis-[88%] snap-center rounded-card border border-border bg-card-elevated px-5 pt-[22px] pb-[18px]"
            >
              <p className="pt-3.5 font-serif text-[0.95rem] text-foreground italic">{text}</p>
              <cite className="mt-3 block text-[0.75rem] font-bold tracking-[0.08em] text-primary uppercase not-italic">
                {cite}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
