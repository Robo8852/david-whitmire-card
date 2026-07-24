/* Plain div + img on purpose — do NOT swap in shadcn Avatar. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-32 w-32 rounded-full p-1 shadow-card">
      <img
        className="block h-full w-full rounded-full border-[3px] border-card object-cover"
        src="/assets/profile.png"
        alt="David Whitmire"
      />
    </div>
  )
}
