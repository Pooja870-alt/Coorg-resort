import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const SUITE_OPTIONS = [
  'Deluxe Hill View Glass Suite (AC)',
  'Heritage Wooden Attic Den (Family Loft)',
  'Executive Valley Eco Room (Non-AC)',
  'Multiple Rooms / Complete Reserve',
]

const GUEST_OPTIONS = [
  { value: '2 Adults', label: '2 Adults (Couple)' },
  { value: '3-4 Adults / Family', label: '3-4 Guests (Family)' },
  { value: '5-8 Adults (Group)', label: '5-8 Guests (Group)' },
  { value: 'Entire 13 Suites Estate Buyout', label: 'Full 13 Suites Estate Buyout' },
]

const inputCls =
  'bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-1 focus:ring-primary transition-colors w-full'

export default function ReservationSection() {
  const revealRef = useScrollReveal()
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    suiteType: SUITE_OPTIONS[0],
    guests: GUEST_OPTIONS[0].value,
    guestName: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `Hello Coorg Heritage Hill View Resort Host, I wish to inquire about suite availability.%0A%0A` +
      `Guest: ${encodeURIComponent(form.guestName)}%0A` +
      `Suite Preference: ${encodeURIComponent(form.suiteType)}%0A` +
      `Check-in: ${form.checkin || 'Immediate'}%0A` +
      `Check-out: ${form.checkout || 'Upcoming'}%0A` +
      `Guests: ${encodeURIComponent(form.guests)}%0A` +
      `Please share seasonal tariff details and confirm booking.`
    setSubmitted(true)
    setTimeout(() => window.open(`https://wa.me/919019563004?text=${msg}`, '_blank'), 700)
  }

  return (
    <section
      className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/30"
      id="reservation"
      ref={revealRef}
    >
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="reveal-item bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest rounded-lg p-space-lg md:p-space-xl shadow-2xl border border-outline-variant/40 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">

            {/* Left: privileges */}
            <div className="lg:col-span-6 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-surface-container-highest border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
                  Direct Host Privilege Desk
                </span>
              </div>

              <SectionHeading title="Reserve Your Hill Haven Directly With Host" />

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bypass booking platform commission fees and algorithmic pricing. Connect directly with the
                estate host to lock in mountain-view orientation, group configurations, bespoke Kodava
                campfire meals, and early check-in.
              </p>

              <div className="space-y-space-sm pt-space-xs">
                <a
                  href="tel:+919019563004"
                  className="flex items-center gap-space-md p-space-sm bg-surface-container-low hover:bg-surface-container hover:border-primary/40 transition-all duration-300 rounded border border-outline-variant/30 group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">call</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Call Direct Host Desk</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors block">
                      +91 9019563004
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:coorgheritagehillviewresort@gmail.com"
                  className="flex items-center gap-space-md p-space-sm bg-surface-container-low hover:bg-surface-container hover:border-primary/40 transition-all duration-300 rounded border border-outline-variant/30 group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Estate Mail Register</span>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors truncate block">
                      coorgheritagehillviewresort@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-space-xs flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-caps text-label-caps">
                {['13 Hilltop Suites', 'Madikeri Central Hub', 'Zero Portal Markup'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-6 bg-surface-container-lowest/95 backdrop-blur-xl p-space-lg rounded-lg border border-outline-variant/40 shadow-2xl">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                    Direct Host Inquiry
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Check Suite Availability</h3>
                </div>
                <span className="material-symbols-outlined text-primary text-[28px]">calendar_month</span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-space-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="checkin">
                        Check-In Date
                      </label>
                      <input id="checkin" type="date" required value={form.checkin} onChange={handleChange} className={inputCls} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="checkout">
                        Check-Out Date
                      </label>
                      <input id="checkout" type="date" required value={form.checkout} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="suiteType">
                        Suite Preference
                      </label>
                      <select id="suiteType" value={form.suiteType} onChange={handleChange} className={inputCls}>
                        {SUITE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="guests">
                        Guests Count
                      </label>
                      <select id="guests" value={form.guests} onChange={handleChange} className={inputCls}>
                        {GUEST_OPTIONS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="guestName">
                      Your Name & Contact
                    </label>
                    <input
                      id="guestName"
                      type="text"
                      required
                      placeholder="Full Name & WhatsApp Mobile"
                      value={form.guestName}
                      onChange={handleChange}
                      className={`${inputCls} placeholder:text-on-surface-variant/50`}
                    />
                  </div>

                  <div className="p-space-sm bg-surface-container border border-outline-variant/30 rounded flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">Rate Structure:</span>
                    <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
                      Inquire For Seasonal Tariffs
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <button
                      type="submit"
                      className="btn-sheen w-full bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-semibold py-3 rounded transition-all duration-300 shadow-[0_0_24px_0_rgba(212,175,55,0.25)] hover:shadow-[0_0_36px_0_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-space-xs"
                    >
                      <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                      <span>Send Direct Inquiry to Host Desk</span>
                    </button>
                    <a
                      href="https://wa.me/919019563004?text=Hello%20Host%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20stay%20at%20Coorg%20Heritage%20Hill%20View%20Resort."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary/40 text-primary font-label-md text-label-md font-medium py-3 rounded text-center transition-all duration-300 flex items-center justify-center gap-space-xs hover:-translate-y-0.5"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Instant WhatsApp Concierge (+91 9019563004)</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="mt-space-md p-space-md bg-surface-container-high border border-primary/40 rounded text-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-1 block">mark_email_read</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Inquiry Prepared for Host</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Opening WhatsApp directly with your dates and suite category for instant host response.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
