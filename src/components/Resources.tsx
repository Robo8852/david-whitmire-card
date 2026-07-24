import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/SectionHead"

export function Resources({ onShare }: { onShare: () => void }) {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Learn More" title="Resources" />
      <div className="flex flex-col gap-2.5 pt-[18px] pb-2">
        <Button asChild variant="brandSecondary" size="brand">
          <a href="https://paverssrq.com/service-areas/" target="_blank" rel="noopener">
            Service Areas
          </a>
        </Button>
        <Button asChild variant="brandGhost" size="brand">
          <a href="https://paverssrq.com/blog/" target="_blank" rel="noopener">
            Learning Hub
          </a>
        </Button>
        <Button type="button" variant="brand" size="brand" onClick={onShare}>
          Share My Info
        </Button>
      </div>
    </section>
  )
}
