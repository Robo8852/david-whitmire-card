/* The three SVG paths below are SOLID glyphs copied verbatim from the original
   page — do not replace them with lucide's stroked outline versions. */

const linkClass =
  "grid h-[42px] w-[42px] place-items-center rounded-full border border-border bg-card-elevated transition-[transform,border-color,box-shadow] duration-200 ease-card hover:-translate-y-0.5 hover:border-ring active:scale-[.97]"

const svgClass = "h-[18px] w-[18px] fill-foreground"

export function Socials() {
  return (
    <div className="flex justify-center gap-3.5 pt-4 pb-1">
      <a
        href="https://www.facebook.com/paverspalmsparadise"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
        className={linkClass}
      >
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.6V3.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.6V13h2.8v8h3.1z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/paverspalmsparadise"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        className={linkClass}
      >
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1.1-.4 2.3-.4 1.2-.1 1.6-.1 4.8-.1zm0 2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.1 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.1-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.4a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8zm5.7-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/@paverspalmsparadise"
        target="_blank"
        rel="noopener"
        aria-label="YouTube"
        className={linkClass}
      >
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path d="M23.5 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.9 3.6 12 3.6 12 3.6s-4.9 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.3 9.1.3 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.9.2 8.1.3 8.1.3s4.9 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15.1V8.5l6.4 3.3-6.4 3.3z" />
        </svg>
      </a>
    </div>
  )
}
