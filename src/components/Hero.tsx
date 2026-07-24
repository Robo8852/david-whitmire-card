export function Hero() {
  return (
    <div className="hero-fade relative">
      <img
        className="absolute top-3.5 left-3.5 z-2 h-[46px] rounded-sm border border-border bg-[color-mix(in_srgb,var(--background)_55%,transparent)] px-2.5 py-1.5 shadow-xs-dark backdrop-blur-[10px]"
        src="/assets/logo.png"
        alt="Pavers, Palms, &amp; Paradise logo"
      />
      <img
        className="block aspect-[2.2/1] w-full object-cover saturate-[1.05]"
        src="/assets/cover.png"
        alt="Paver patio project"
      />
    </div>
  )
}
