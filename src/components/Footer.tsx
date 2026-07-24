export function Footer() {
  return (
    <footer className="px-gutter pt-9 pb-[30px] text-center text-[0.75rem] text-muted-foreground">
      <div>
        © {new Date().getFullYear()} Pavers, Palms, &amp; Paradise · Sarasota / Bradenton, FL
      </div>
      <div className="mt-2 opacity-70">
        Card by{" "}
        <a
          className="font-semibold text-primary no-underline"
          href="https://costadelsolweb.com"
          target="_blank"
          rel="noopener"
        >
          Costa del Sol Web
        </a>
      </div>
    </footer>
  )
}
