import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const SUITES = [
  {
    name: 'Deluxe Hill View Glass Suite',
    badge1: 'Signature Air-Conditioned',
    badge2: 'Floor-to-Ceiling Glass',
    icon: 'ac_unit',
    heroImg: '/images/IMG-20260916-WA0037.jpg',
    heroAlt: 'Deluxe Hill View Glass Suite with panoramic mountain windows',
    subImg: '/images/IMG-20260916-WA0033.jpg',
    subAlt: 'Deluxe AC suite with wicker chairs and hill view',
    desc: 'Expansive panoramic glass wall framing rolling mist and tea plantations. Equipped with air conditioning, king bed with plush linen, wicker seating alcove, and private valley balcony.',
    tags: ['King Bed', 'Valley Balcony', 'Full Glass Wall', 'Hot Spring Geyser'],
    delay: '100ms',
  },
  {
    name: 'Heritage Wooden Attic Den',
    badge1: 'Family Loft • 4 Guests',
    badge2: 'Handcrafted Timber',
    icon: 'cabin',
    heroImg: '/images/IMG-20260916-WA0035.jpg',
    heroAlt: 'Heritage Wooden Attic Den with timber ceiling and valley balcony',
    subImg: '/images/IMG-20260916-WA0028.jpg',
    subAlt: 'Heritage attic loft room with wood parquet floor and twin beds',
    desc: 'Artisanal pine wood pitched roof with warm wooden parquet floors. Cozy family loft setup featuring primary queen bed plus twin beds for up to 4 guests, gazing through high-gable windows.',
    tags: ['Sleeps 4', 'Pine Wood Roof', 'Gable Window Deck', 'Family Layout'],
    delay: '200ms',
  },
  {
    name: 'Executive Valley Eco Room',
    badge1: 'Eco Breeze • Pure Mountain Air',
    badge2: 'Naturally Cool 3800 FT',
    icon: 'air',
    heroImg: '/images/IMG-20260916-WA0034.jpg',
    heroAlt: 'Executive Valley Room with floral wallpaper and wicker seating',
    subImg: '/images/IMG-20260916-WA0039.jpg',
    subAlt: 'Cozy eco room with oriental carpet and crimson bedding',
    desc: 'Cooled by refreshing hill breezes at 3,800 ft elevation. Designed for nature enthusiasts and authentic plantation stays, complete with traditional carpet accents, tea table, and hot bath facilities.',
    tags: ['Naturally Ventilated', 'Oriental Carpets', 'Plantation Outlook', 'Host Service'],
    delay: '300ms',
  },
]

function TiltCard({ suite }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (window.matchMedia('(hover: none)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`
  }
  const handleMouseLeave = () => {
    cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal-item tilt-card bg-surface-container border border-outline-variant/40 rounded-lg overflow-hidden flex flex-col justify-between shadow-2xl hover:border-primary/50 hover:shadow-[0_24px_50px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out group"
      style={{ transitionDelay: suite.delay }}
    >
      <div>
        <div className="relative h-64 overflow-hidden">
          <img
            src={suite.heroImg}
            alt={suite.heroAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out img-shimmer"
            onLoad={(e) => e.currentTarget.classList.add('img-loaded')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent group-hover:from-surface-container/90 transition-colors duration-500" />
          <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container px-space-sm py-1 rounded font-label-caps text-label-caps font-bold uppercase shadow-md">
            {suite.badge1}
          </div>
          <div className="absolute bottom-3 right-3 bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-caps text-label-caps border border-outline-variant/30">
            {suite.badge2}
          </div>
        </div>

        <div className="p-space-lg space-y-space-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
              {suite.name}
            </h3>
            <span className="material-symbols-outlined text-primary text-[22px]">{suite.icon}</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{suite.desc}</p>

          <div className="rounded overflow-hidden h-36 border border-outline-variant/30 my-2">
            <img
              src={suite.subImg}
              alt={suite.subAlt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {suite.tags.map((tag) => (
              <span key={tag} className="bg-surface-container-high px-2 py-0.5 rounded text-[11px] font-label-caps text-on-surface-variant">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-space-lg pt-0">
        <div className="p-space-sm bg-surface-container-lowest/60 rounded mb-space-sm flex items-center justify-between border border-outline-variant/20">
          <span className="font-label-caps text-label-caps text-on-surface-variant">Tariff:</span>
          <span className="font-label-caps text-label-caps text-primary uppercase font-bold">Inquire Seasonal Rate</span>
        </div>
        <a
          href="#reservation"
          className="btn-sheen w-full bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-semibold py-2.5 rounded text-center transition-all duration-300 flex items-center justify-center gap-space-xs shadow-md hover:-translate-y-0.5 active:scale-98"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span>Check Availability</span>
        </a>
      </div>
    </div>
  )
}

export default function SuitesSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="w-full bg-surface-container-low py-space-2xl border-t border-outline-variant/30" id="suites" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="reveal-item flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <SectionHeading
            overline="Boutique Sanctuary Accommodations"
            overlineIcon="hotel"
            title="The 13 Hilltop Suites"
            subtitle="Thirteen individual hill residences thoughtfully tailored for couples, families, and discerning travellers. Unhindered views and peaceful Kodagu privacy."
          />
          <div className="bg-surface-container-high/70 px-space-md py-space-sm rounded border border-outline-variant/40 flex items-center gap-space-sm shadow-md flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
            <div className="text-left">
              <span className="font-label-caps text-label-caps text-primary uppercase block font-bold">
                Strictly Transparent Host Tariff
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Inquire for seasonal dates & custom inclusions
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {SUITES.map((suite) => (
            <TiltCard key={suite.name} suite={suite} />
          ))}
        </div>
      </div>
    </section>
  )
}
