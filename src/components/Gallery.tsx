import { cn } from "@/lib/utils"
import { SectionHead } from "@/components/SectionHead"

// g11 is .webp — do not assume a uniform extension.
const files = [
  "g01.jpg", "g02.jpg", "g03.jpg", "g04.jpg", "g05.jpg", "g06.jpg",
  "g07.jpg", "g08.jpg", "g09.jpg", "g10.jpg", "g11.webp", "g12.jpg",
]

export function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Our Work" title="Gallery" />
      <div className="grid grid-cols-2 gap-3">
        {files.map((file, i) => {
          const src = `/assets/gallery/${file}`
          return (
            /* The href stays as a no-JS fallback; JS intercepts into the lightbox. */
            <a
              key={file}
              href={src}
              onClick={(e) => {
                e.preventDefault()
                onOpen(src)
              }}
              className={cn(
                "group block overflow-hidden rounded-sm border border-border transition-[transform,box-shadow] duration-200 ease-card active:scale-[.97]",
                i === 0 && "col-span-full"
              )}
            >
              <img
                src={src}
                alt="Project photo"
                loading="lazy"
                decoding="async"
                className={cn(
                  "block h-full w-full object-cover transition-transform duration-200 ease-card group-hover:scale-[1.05]",
                  i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                )}
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}
