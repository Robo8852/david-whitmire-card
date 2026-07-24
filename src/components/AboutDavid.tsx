import { SectionHead } from "@/components/SectionHead"

export function AboutDavid() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="The Owner" title="About David Whitmire" />
      <img
        className="mb-4 block w-full rounded-card border border-border"
        src="/assets/profile.png"
        alt="David Whitmire and his wife"
        loading="lazy"
        decoding="async"
      />
      <div className="space-y-3 text-[0.93rem] text-muted-foreground [&_strong]:text-foreground">
        <p>
          Dave has deep roots in the Sarasota/Bradenton area, where his family has lived for
          generations. He and his wife were married in the same church as their parents and
          grandparents, and together, they have four children of their own, and have fostered seven
          others so far.
        </p>
        <p>
          Dave worked his way through college while employed in the auto industry, and later spent
          14 years as a teacher at a missionary training center. His desire to serve and uplift
          others eventually led him to the trades, where he gained extensive experience in
          residential construction. Throughout his journey, Dave has always been driven by the
          principle of helping families create and enjoy spaces that truly feel like home.
        </p>
        <p>
          As the owner of a home service contracting business, Dave now merges his passions and
          skills to assist homeowners in realizing their renovation dreams. With a keen eye for
          detail, a quick learning ability, and a genuine commitment to serving others, Dave ensures
          that his customers’ homes are not only functional, but also cherished spaces. His mission
          remains the same: to love thy neighbor by transforming their home–the most important place
          in their world–into their favorite place.
        </p>
      </div>
    </section>
  )
}
