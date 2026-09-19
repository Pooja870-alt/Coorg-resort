import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <div id="float-cta" className={visible ? 'cta-visible' : ''} aria-label="WhatsApp Inquiry">
      <a
        href="https://wa.me/919019563004?text=Hello%20Coorg%20Heritage%20Hill%20View,%20I%20wish%20to%20inquire%20about%20stay%20tariffs%20and%20availability."
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined">chat</span>
        <span>Book via WhatsApp</span>
      </a>
    </div>
  )
}
