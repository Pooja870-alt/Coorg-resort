import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#sanctuary', label: 'Sanctuary' },
  { href: '#suites', label: '13 Hill Suites' },
  { href: '#experiences', label: 'Experiences & Bonfire' },
  { href: '#tourist-hub', label: 'Tourist Hub' },
  { href: '#dining', label: 'The Hearth Dining' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('sanctuary')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => setScrolled(window.scrollY > 60))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const navBase = `fixed top-0 w-full z-50 transition-all duration-500 border-b`
  const navBg = scrolled
    ? 'bg-[#1f0e12]/92 border-primary-container/20 shadow-[0_8px_32px_rgba(10,2,4,0.85)]'
    : 'bg-surface/40 backdrop-blur-md border-outline-variant/15'

  return (
    <>
      <header className={`${navBase} ${navBg}`} id="mainNav">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          {/* Logo */}
          <div className="flex items-center gap-space-md flex-shrink-0">
            <a className="group flex flex-col" href="#sanctuary">
              <span className="font-headline-sm text-headline-sm text-primary tracking-wide group-hover:text-primary-fixed transition-colors duration-300">
                Coorg Heritage
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.22em] group-hover:text-tertiary transition-colors duration-300">
                Hill View • Madikeri
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-space-lg flex-1 justify-center">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-link relative font-label-md text-label-md transition-colors duration-300 py-1 ${
                    isActive
                      ? 'nav-active text-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {label}
                  <span
                    className={`nav-indicator absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
            <a
              href="#reservation"
              className={`nav-link relative font-label-md text-label-md font-semibold transition-colors duration-300 py-1 ${
                activeSection === 'reservation'
                  ? 'nav-active text-primary'
                  : 'text-primary'
              }`}
            >
              Direct Booking
              <span
                className={`nav-indicator absolute left-0 bottom-0 h-[2px] bg-primary-container transition-all duration-300 ${
                  activeSection === 'reservation' ? 'w-full' : 'w-full'
                }`}
              />
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-space-sm flex-shrink-0">
            <a
              href="tel:+919019563004"
              className="hidden sm:flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:text-primary hover:-translate-y-0.5 active:scale-95 transition-all duration-300 bg-surface-container/50 border border-outline-variant/30 hover:border-primary/50"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">+91 9019563004</span>
            </a>
            <a
              href="https://wa.me/919019563004?text=Hello%20Coorg%20Heritage%20Hill%20View,%20I%20wish%20to%20inquire%20about%20stay%20tariffs%20and%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen pulse-glow inline-flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-semibold px-space-md py-2.5 rounded shadow-[0_0_24px_0_rgba(212,175,55,0.25)] hover:shadow-[0_0_32px_0_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:scale-98 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden ml-2 p-2 text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-outline-variant/30 px-gutter py-space-md flex flex-col gap-space-sm">
            {[...NAV_LINKS, { href: '#reservation', label: 'Direct Booking' }].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-1.5 border-b border-outline-variant/20"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
