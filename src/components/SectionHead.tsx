export function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-[18px] text-center">
      <div className="text-[0.68rem] font-bold tracking-[0.22em] text-primary uppercase">{kicker}</div>
      <h2 className="mt-1 text-[1.35rem] font-extrabold tracking-[-0.02em]">{title}</h2>
      <div className="rule-gradient mx-auto mt-3 h-[3px] w-11 rounded-[2px]" />
    </div>
  )
}
