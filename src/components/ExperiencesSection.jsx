import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const FEATURES = [
  {
    icon: 'local_fire_department',
    title: 'Nightly Firepit Gathering',
    desc: 'Gather with friends and family beneath high-altitude clear starry skies. Acoustic music and warm roasted snacks.',
  },
  {
    icon: 'water_drop',
    title: 'Natural Water Stream & Aquifers',
    desc: 'Perennial sweet hill current trickling through the property edges, fed naturally by untouched Western Ghats aquifer ridges.',
  },
  {
    icon: 'rainy',
    title: 'Rain Dance Mist Pavilion',
    desc: 'Dedicated open-air rain dance enclosure with music systems for exhilarating celebration in the cool mountain climate.',
  },
  {
    icon: 'sports_esports',
    title: 'Indoor Games & Heritage Parlour',
    desc: 'Traditional tournament carrom boards, chess tables, and leisure family parlour games for rainy afternoons.',
  },
]

export default function ExperiencesSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="w-full py-space-2xl bg-surface" id="experiences" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

          {/* Left content */}
          <div className="reveal-item lg:col-span-5 space-y-space-md">
            <SectionHeading
              overline="The Evening Ritual"
              overlineIcon="local_fire_department"
              title="Starlit Mountain Campfire & Forest Embers"
            />
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
              As twilight descends over Madikeri's ridgeline, the resort terrace gathers around crackling
              firewood. Cool montane air blends with the soothing fragrance of burning timber, ambient
              music, and hot Kodava spices.
            </p>

            <div className="space-y-space-sm pt-space-xs">
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-space-sm p-3 bg-surface-container-low rounded border border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">{icon}</span>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">{title}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-space-xs">
              <a
                href="#reservation"
                className="btn-sheen inline-flex items-center gap-space-xs bg-primary hover:bg-primary-fixed text-on-primary font-label-md text-label-md px-space-lg py-3 rounded font-semibold transition-all duration-300 shadow-[0_0_24px_rgba(242,202,80,0.3)] hover:shadow-[0_0_36px_rgba(242,202,80,0.5)] hover:-translate-y-0.5 active:scale-98"
              >
                <span>Inquire for Group Bonfire Evenings</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="reveal-item lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <img
                src="/images/IMG-20260916-WA0027.jpg"
                alt="Starlit rooftop bonfire with mountain backdrop at Coorg Heritage Hill View Resort"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out img-shimmer"
                onLoad={(e) => e.currentTarget.classList.add('img-loaded')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
              <div className="absolute bottom-space-lg left-space-lg right-space-lg bg-surface-container/90 backdrop-blur-md p-space-md rounded border border-outline-variant/40 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">nightlight_round</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Twilight by the Valley</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Every evening from 7:00 PM onwards • Live Campfire</p>
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider px-3 py-1 bg-surface-container-lowest rounded border border-outline-variant/40">
                  Host Curated
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
