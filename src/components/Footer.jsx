const NAV_LINKS = [
  { href: '#sanctuary', label: 'Sanctuary Overview' },
  { href: '#suites', label: '13 Hill Suites (AC & Attic)' },
  { href: '#experiences', label: 'Night Bonfire & Water Stream' },
  { href: '#tourist-hub', label: 'Strategic Tourist Hub (5-10 KM)' },
  { href: '#dining', label: 'The Hearth Dining & Kodava Flavours' },
  { href: '#reservation', label: 'Direct Host Reservation Desk' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface py-space-2xl border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-outline-variant/30">

          {/* Brand */}
          <div className="space-y-space-md">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary">Coorg Heritage</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.25em]">Hill View Resort</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              An architectural retreat elevated 3,800 ft above the misted coffee valleys of Madikeri.
              Thirteen bespoke hillside residences offering unbroken horizons and heirloom Kodava hospitality.
            </p>
            <div className="flex items-center gap-space-sm text-primary">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant uppercase">Madikeri • Karnataka</span>
            </div>
          </div>

          {/* Quick nav */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary">Quick Navigation</h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-primary transition-colors duration-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary">Concierge & Reach</h3>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0 mt-0.5">location_on</span>
                <span>Madikeri, Kodagu (Coorg), Karnataka – 571201</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">call</span>
                <a href="tel:+919019563004" className="hover:text-primary transition-colors duration-300">+91 9019563004</a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">mail</span>
                <a href="mailto:coorgheritagehillviewresort@gmail.com" className="hover:text-primary transition-colors duration-300 break-all">
                  coorgheritagehillviewresort@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">schedule</span>
                <span>Round-the-Clock Host Attendance</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary">Private Reserve</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Direct host booking guarantees best balcony view allocation, complimentary nightly campfire
              slots, and fresh plantation breakfast.
            </p>
            <div className="flex flex-col gap-space-xs">
              <a
                href="#reservation"
                className="btn-sheen inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md px-space-md py-2.5 rounded font-semibold transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Check Suite Availability
              </a>
              <a
                href="https://wa.me/919019563004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-tertiary font-label-md text-label-md px-space-md py-2.5 rounded transition-all duration-300 hover:-translate-y-0.5"
              >
                WhatsApp Butler Desk
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg mt-space-sm flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Coorg Heritage Hill View Resort. All Rights Reserved. Crafted for Discerning Travelers.</p>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps">
            <a href="#sanctuary" className="hover:text-primary transition-colors duration-300 uppercase">Back to Top ↑</a>
            <a href="#tourist-hub" className="hover:text-primary transition-colors duration-300 uppercase">Route Map</a>
            <a href="#reservation" className="hover:text-primary transition-colors duration-300 uppercase">Direct Booking</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
