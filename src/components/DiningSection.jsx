import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const DISHES = [
  { title: 'Authentic Pandi Curry', desc: 'Signature Kodava slow-braised curry with native wild kachampuli.' },
  { title: 'Steamed Akki Rotti & Kadambuttu', desc: 'Fragrant rice rotis and tender cylindrical steamed rice dumplings.' },
  { title: 'Pure Vegetarian Thalis', desc: 'Wholesome vegetable curries, baimbale (bamboo shoot), and dal.' },
  { title: 'Single-Estate Filter Coffee', desc: 'Freshly ground estate Arabica & Robusta with frothy hot milk.' },
]

const AMENITIES = [
  { icon: 'wifi', label: 'High-Speed Wi-Fi' },
  { icon: 'room_service', label: '24/7 Room Service' },
  { icon: 'local_fire_department', label: 'Night Bonfire' },
  { icon: 'local_parking', label: 'Free Parking' },
  { icon: 'water', label: 'Running Stream' },
  { icon: 'sports_esports', label: 'Indoor Games' },
]

export default function DiningSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="w-full py-space-2xl bg-surface" id="dining" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

          {/* Left image */}
          <div className="reveal-item lg:col-span-6 relative">
            <div className="rounded-lg overflow-hidden border border-outline-variant/40 shadow-2xl relative group">
              <img
                src="/images/IMG-20260916-WA0029.jpg"
                alt="The Hearth dining area with hanging bulbs and rustic stone wall decor"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out img-shimmer"
                onLoad={(e) => e.currentTarget.classList.add('img-loaded')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container/90 backdrop-blur-md p-space-md rounded border border-outline-variant/30 shadow-lg">
                <span className="font-label-caps text-label-caps text-primary uppercase">The Hearth Courtyard</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Rustic Open-Air Evening Banquets</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Under golden string lanterns with mountain evening breeze.
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="reveal-item lg:col-span-6 space-y-space-md">
            <SectionHeading
              overline="Kodava Epicurean Heritage"
              overlineIcon="restaurant"
              title="The Hearth Dining & Plantation Flavours"
            />
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Experience the genuine warmth of Kodagu gastronomy. Savor recipes passed down through regional
              generations, slow-simmered over local firewood and infused with whole black pepper, roasted
              coriander, and kachampuli vinegar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
              {DISHES.map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-space-sm bg-surface-container rounded border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="font-label-md text-label-md text-primary font-semibold block mb-0.5">{title}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-space-xs border-t border-outline-variant/30">
              <span className="font-label-caps text-label-caps text-primary uppercase block mb-space-xs font-semibold">
                Resort Guest Comforts
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1.5 text-on-surface-variant font-body-sm text-body-sm">
                {AMENITIES.map(({ icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
