export function Footer() {
  return (
    <footer className="px-gutter pt-9 pb-[30px] text-center text-[0.75rem] text-muted-foreground">
      <div>
        © {new Date().getFullYear()} Pavers, Palms, &amp; Paradise · Sarasota / Bradenton, FL
      </div>
      <div className="mt-2 opacity-70">
        {/* Deliberately not a link yet — see NOTES.md at the repo root. */}
        Card by <span className="font-semibold text-primary">Proclaim Agency</span>
      </div>
    </footer>
  )
}
