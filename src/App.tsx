import { useCallback, useState } from 'react'

import { AboutCompany } from '@/components/AboutCompany'
import { AboutDavid } from '@/components/AboutDavid'
import { AvatarRing } from '@/components/AvatarRing'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { Identity } from '@/components/Identity'
import { Lightbox } from '@/components/Lightbox'
import { PrimaryCtas } from '@/components/PrimaryCtas'
import { QuickActions } from '@/components/QuickActions'
import { Resources } from '@/components/Resources'
import { Services } from '@/components/Services'
import { Socials } from '@/components/Socials'
import { Testimonials } from '@/components/Testimonials'
import { Toast, useToast } from '@/components/Toast'

/* Share — three tiers: native sheet, async clipboard, execCommand fallback. */
async function shareCard(showToast: (message: string) => void) {
  const url = location.origin + location.pathname // strips query/hash
  const data = {
    title: 'David Whitmire — Pavers, Palms, & Paradise',
    text: 'Connect with David Whitmire of Pavers, Palms, & Paradise',
    url,
  }
  if (navigator.share) {
    try {
      await navigator.share(data)
      return
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return // user dismissed the sheet
      // any other failure falls through to the clipboard path
    }
  }
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url)
      showToast('Link copied!')
      return
    } catch {
      // insecure context or permission denied — fall through
    }
  }
  let copied = false
  try {
    const ta = document.createElement('textarea')
    ta.value = url
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    copied = document.execCommand('copy')
    ta.remove()
  } catch {
    copied = false
  }
  showToast(copied ? 'Link copied!' : url)
}

function App() {
  const { toast, showToast } = useToast()
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const handleShare = useCallback(() => {
    shareCard(showToast).catch(() => {}) // swallow rejections — never unhandled
  }, [showToast])

  const handleAddContact = useCallback(() => {
    showToast('Contact ready — open the download')
  }, [showToast])

  const closeLightbox = useCallback(() => setLightboxSrc(null), [])

  return (
    <>
      <div className="relative mx-auto min-h-dvh max-w-[480px] bg-card shadow-phone">
        <Hero />
        <AvatarRing />
        <Identity />
        <QuickActions />
        <Socials />
        <PrimaryCtas onShare={handleShare} onAddContact={handleAddContact} />
        <AboutCompany />
        <Services />
        <AboutDavid />
        <Testimonials />
        <Gallery onOpen={setLightboxSrc} />
        <Resources onShare={handleShare} />
        <Footer />
      </div>
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}

export default App
