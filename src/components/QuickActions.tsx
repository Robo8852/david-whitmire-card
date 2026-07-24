import { Mail, MessageSquare, Phone, Share } from "lucide-react"

import { cn } from "@/lib/utils"

const tileBase =
  "flex flex-col items-center gap-[7px] rounded-lg border no-underline transition-[transform,border-color,background,box-shadow] duration-200 ease-card px-1.5 pt-3.5 pb-[11px] hover:-translate-y-0.5 active:scale-[.97]"

const actions = [
  { label: "Email", href: "mailto:paverspap@gmail.com", Icon: Mail },
  { label: "Call", href: "tel:+19412846466", Icon: Phone },
  { label: "Text", href: "sms:+19412846466", Icon: MessageSquare },
  {
    label: "Connect",
    // NOTE: `&body=` (no `?`) is the iOS sms: convention — deliberate, keep as-is.
    href: "sms:+19412846466&body=Hi%20David%2C%20I%20found%20your%20card%20and%20I%27d%20like%20to%20connect.",
    Icon: Share,
    primary: true,
  },
] as const

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-2.5 px-gutter pt-5 pb-1.5">
      {actions.map(({ label, href, Icon, ...rest }) => {
        const primary = "primary" in rest && rest.primary
        return (
          <a
            key={label}
            href={href}
            className={cn(
              tileBase,
              primary
                ? "brand-gradient border-transparent text-primary-foreground shadow-brand focus-visible:shadow-[var(--shadow-brand),0_0_0_3px_var(--ring)]"
                : "border-border bg-card-elevated text-foreground hover:border-ring"
            )}
          >
            <Icon
              className={cn("size-[22px]", primary ? "text-primary-foreground" : "text-primary")}
              strokeWidth={2}
            />
            <span
              className={cn(
                "text-[0.7rem] font-semibold tracking-[0.04em]",
                primary
                  ? "text-[color-mix(in_srgb,var(--primary-foreground)_90%,transparent)]"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
