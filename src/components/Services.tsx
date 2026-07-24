import { cn } from "@/lib/utils"
import { SectionHead } from "@/components/SectionHead"

const services = [
  { label: "Patio Installation", href: "https://paverssrq.com/services/patio-installation/", img: "/assets/services/patio.jpg", alt: "Patio installation" },
  { label: "Driveway Installation", href: "https://paverssrq.com/services/driveway-installation/", img: "/assets/services/driveway.jpg", alt: "Driveway installation" },
  { label: "Walkway Installation", href: "https://paverssrq.com/services/walkway-installation/", img: "/assets/services/walkway.jpg", alt: "Walkway installation" },
  { label: "Pool Deck", href: "https://paverssrq.com/services/pool-deck/", img: "/assets/services/pool-deck.jpg", alt: "Pool deck" },
  { label: "Fire Pit", href: "https://paverssrq.com/services/fire-pit/", img: "/assets/services/fire-pit.jpg", alt: "Fire pit" },
  { label: "Paver Repair", href: "https://paverssrq.com/services/paver-repair/", img: "/assets/services/paver-repair.jpg", alt: "Paver repair" },
  { label: "Outdoor Oasis Overhaul", href: "https://paverssrq.com/services/outdoor-oasis-overhaul/", img: "/assets/services/oasis.png", alt: "Outdoor oasis overhaul", wide: true },
] as const

export function Services() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="What We Do" title="Services" />
      <div className="grid grid-cols-2 gap-3">
        {services.map(({ label, href, img, alt, ...rest }) => {
          const wide = "wide" in rest && rest.wide
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className={cn(
                "tile group relative block overflow-hidden rounded-lg border border-border transition-[transform,box-shadow] duration-200 ease-card active:scale-[.97]",
                wide ? "col-span-full aspect-[21/9]" : "aspect-[4/3]"
              )}
            >
              <img
                src={img}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover transition-transform duration-200 ease-card group-hover:scale-[1.06]"
              />
              <b className="tile-label absolute right-3 bottom-2.5 left-3 z-2 text-[0.78rem] font-bold tracking-[0.08em] text-primary-foreground uppercase [text-shadow:var(--shadow-xs-dark)]">
                {label}
              </b>
            </a>
          )
        })}
      </div>
    </section>
  )
}
