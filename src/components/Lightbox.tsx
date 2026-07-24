import { useEffect, useRef } from "react"

/* Native <dialog> on purpose (not shadcn Dialog): the ref drives showModal()/close(),
   and we listen for the native `close` event so Esc keeps React state in sync. */
export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (src && !dialog.open) dialog.showModal()
    else if (!src && dialog.open) dialog.close()
  }, [src])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.addEventListener("close", onClose)
    return () => dialog.removeEventListener("close", onClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-label="Gallery photo, full size"
      // click anywhere (including backdrop) closes; Esc is handled natively
      onClick={() => dialogRef.current?.close()}
      className="m-auto max-h-[90dvh] max-w-[min(92vw,900px)] cursor-zoom-out border-none bg-transparent p-0 backdrop:bg-[hsl(0_0%_0%/.8)] backdrop:backdrop-blur-[6px]"
    >
      {src && (
        <img
          src={src}
          alt="Project photo, full size"
          className="mx-auto block max-h-[90dvh] max-w-full rounded-card shadow-card"
        />
      )}
    </dialog>
  )
}
