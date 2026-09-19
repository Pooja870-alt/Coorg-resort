import { useEffect, useRef } from 'react'
import MistCanvas from './MistCanvas'
import { useCounterAnimation } from '../hooks/useCounterAnimation'
import { useScrollReveal } from '../hooks/useScrollReveal'

const HEADLINE_WORDS = [
  { text: 'Awaken', delay: '0.28s', italic: false },
  { text: 'Above', delay: '0.38s', italic: false },
  { text: 'The', delay: '0.48s', italic: false },
  { text: 'Clouds,', delay: '0.58s', italic: false },
  { text: 'Gather', delay: '0.72s', italic: true },
  { text: 'by', delay: '0.82s', italic: true },
  { text: 'the', delay: '0.92s', italic: true },
  { text: 'Embers', delay: '1.02s', italic: true },
]

function Counter({ target }) {
  const [ref, value] = useCounterAnimation(target)
  return <span ref={ref}>{value || 0}</span>
}

export default function HeroSection() {
  const revealRef = useScrollReveal()
  const glowRef = useRef(null)

  // Parallax glow on scroll
  useEffect(() => {
    const onScroll = () => {
      const el = glowRef.current
      if (el && window.scrollY < 800) {
        el.style.transform = `translate3d(-50%, ${window.scrollY * 0.22}px, 0)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="relative w-full pt-16 pb-space-2xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-lowest to-surface"
      id="sanctuary"
      ref={revealRef}
    >
      <MistCanvas />

      {/* Parallax glow aura */}
      <div
        ref={glowRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-primary/15 via-primary-container/5 to-transparent blur-3xl pointer-events-none rounded-full"
        id="heroParallaxGlow"
      />

      <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center relative z-10">

        {/* Overline badge */}
        <div className="hero-load-1 inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/40 backdrop-blur-md shadow-sm mb-space-md hover:border-primary/50 transition-colors">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-caps text-label-caps tracking-[0.25em] text-primary uppercase">
            Private Hilltop Sanctuary • Madikeri <Counter target={3800} /> FT
          </span>
        </div>

        {/* Split-word headline */}
        <h1 className="hero-load-2 font-display-hero text-display-hero text-on-surface max-w-5xl tracking-tight mb-space-md">
          {HEADLINE_WORDS.map(({ text, delay, italic }) => (
            <span
              key={text + delay}
              className={`split-word${italic ? ' italic font-normal text-primary' : ''}`}
              style={{ animationDelay: delay }}
            >
              {text}{' '}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="hero-load-3 font-body-lg text-body-lg text-on-surface-variant max-w-3xl font-light leading-relaxed mb-space-xl">
          Thirteen bespoke hillside suites elevated along the unbroken ridges of Madikeri. Enveloped by
          heirloom coffee estates, fresh montane mists, starlit evening bonfires, and central connectivity
          with zero commute fatigue.
        </p>

        {/* CTA buttons */}
        <div className="hero-load-4 flex flex-wrap items-center justify-center gap-space-md mb-space-xl">
          <a
            href="#reservation"
            className="btn-sheen inline-flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md px-space-xl py-3.5 rounded font-semibold transition-all duration-300 shadow-[0_0_30px_0_rgba(212,175,55,0.3)] hover:shadow-[0_0_42px_0_rgba(212,175,55,0.55)] hover:-translate-y-0.5 active:scale-98"
          >
            <span>Direct Host Inquiry</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="#suites"
            className="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-tertiary border border-outline-variant/40 hover:border-primary/40 font-label-md text-label-md px-space-xl py-3.5 rounded transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
          >
            <span className="material-symbols-outlined text-[18px]">hotel</span>
            <span>Explore 13 Hill Suites</span>
          </a>
        </div>

        {/* Hero media frame */}
        <div
          className="hero-load-5 w-full max-w-5xl rounded-lg overflow-hidden border border-outline-variant/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-surface-container-lowest relative mb-space-2xl group"
          id="heroMediaFrame"
        >
          <div className="relative w-full h-80 sm:h-[420px] md:h-[500px] overflow-hidden">
            <img
              src="/images/IMG-20260916-WA0030.jpg"
              alt="Balcony wicker chairs overlooking lush green Coorg valley"
              className="w-full h-full object-cover animate-ken-burns transition-transform duration-700 group-hover:scale-110 img-shimmer"
              onLoad={(e) => e.currentTarget.classList.add('img-loaded')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />
          </div>
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row items-center justify-between pointer-events-none gap-2">
            <div className="bg-surface-container-lowest/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-outline-variant/30 text-primary font-label-caps text-label-caps uppercase shadow-lg">
              Hilltop Ridge Horizon • <Counter target={3800} /> FT Elevation
            </div>
            <div className="bg-surface-container-lowest/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-outline-variant/30 text-on-surface-variant font-label-caps text-label-caps shadow-lg">
              Zero Commute Fatigue • Centered in Madikeri
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-sm max-w-5xl">
          {[
            { icon: 'villa', value: <><Counter target={13} /> Suites</>, sub: 'Exclusive Hilltop Reserve', delay: '100ms' },
            { icon: 'landscape', value: <><Counter target={100} />% Hill View</>, sub: 'Unbroken Balcony Horizons', delay: '200ms' },
            { icon: 'explore', value: 'Central Hub', sub: '5-10 Mins to Key Attractions', delay: '300ms' },
            { icon: 'ring_volume', value: '+91 9019563004', sub: 'Direct Host Attention', delay: '400ms' },
          ].map(({ icon, value, sub, delay }) => (
            <div
              key={icon}
              className="reveal-item bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md p-space-md rounded flex flex-col items-center text-center hover:border-primary/50 hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{ transitionDelay: delay }}
            >
              <span className="material-symbols-outlined text-primary text-[28px] mb-1 icon-pop">{icon}</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">{value}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-1">{sub}</span>
            </div>
          ))}
        </div>

        {/* Veranda feature block */}
        <div className="reveal-item mt-space-2xl w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center text-left bg-surface-container-low/70 border border-outline-variant/40 p-space-lg rounded-lg shadow-2xl hover:border-primary/40 transition-all duration-500">
          <div className="md:col-span-5 relative rounded overflow-hidden shadow-xl aspect-[3/4] max-h-[500px] group">
            <img
              src="/images/IMG-20260916-WA0030.jpg"
              alt="Veranda balcony wicker chairs overlooking lush Coorg valley"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent group-hover:from-surface-container-lowest/90 transition-colors duration-500" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-label-caps text-label-caps text-primary uppercase">The Veranda Perspective</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Wicker Sunrise Terraces</h4>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between h-full space-y-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase block mb-1">
                Private Hilltop Horizons
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs">
                Veranda Overlook of Emerald Coffee Valleys
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                Every suite opens onto an expansive private balcony overlooking native areca palms, misted
                ridges, and vibrant plantation flora. Enjoy hot estate filter coffee served straight to your
                cane chairs as morning sunlight pierces the Ghats clouds.
              </p>
            </div>

            <div className="relative rounded overflow-hidden shadow-lg border border-outline-variant/30 h-48 group">
              <img
                src="/images/IMG-20260916-WA0038.jpg"
                alt="Coorg Heritage Hill View glass suite with panoramic hill windows"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-on-surface">
                <span className="font-label-caps text-label-caps text-tertiary">Panoramic Window Alcove</span>
                <p className="font-body-sm text-body-sm font-semibold">Gazing across untamed Kodagu hillscapes</p>
              </div>
            </div>

            <div className="pt-space-xs flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Elevation: <Counter target={3800} /> ft MSL
              </span>
              <a
                href="#reservation"
                className="group inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold hover:text-primary-fixed transition-colors duration-300"
              >
                <span>Check Available Dates</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
