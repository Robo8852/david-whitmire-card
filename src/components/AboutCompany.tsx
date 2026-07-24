import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/SectionHead"

export function AboutCompany() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="The Company" title="Pavers, Palms, & Paradise" />
      <div className="space-y-3 text-[0.93rem] text-muted-foreground [&_strong]:text-foreground">
        <p>
          Hello! Thank you for checking out <strong>Pavers, Palms, and Paradise</strong>, a local,
          family-owned outdoor living contractor with a decade’s worth of happy customers in our
          hometown.
        </p>
        <p>
          We aim to create high-quality, attractive outdoor living spaces where families and friends
          enjoy making memories.
        </p>
        <p>
          Our purpose is to serve our community by helping our neighbors elevate the value of their
          homes as we create spaces where they build relationship.
        </p>
        <p>
          Passionate about transforming your outdoor dreams into reality? We can’t wait to create
          your perfect living space!
        </p>
      </div>
      {/* NOTE(owner): this quote link points at paverspalmsparadise.com while every
          other link uses paverssrq.com — canonical domain unconfirmed, do not "fix"
          before checking which one is right. */}
      <div className="flex flex-col gap-2.5 pt-[18px] pb-2">
        <Button asChild variant="brand" size="brand">
          <a href="https://paverspalmsparadise.com/contact-us/" target="_blank" rel="noopener">
            Get a Quote
          </a>
        </Button>
      </div>
    </section>
  )
}
