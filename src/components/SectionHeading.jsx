import { useEffect, useRef } from 'react'

export default function SectionHeading({ overline, overlineIcon, title, subtitle, center = false }) {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('line-revealed'), 160)
          observer.unobserve(el)
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={center ? 'text-center' : ''}>
      {overline && (
        <div className={`inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container mb-space-xs border border-outline-variant/30 ${center ? 'mx-auto' : ''}`}>
          {overlineIcon && <span className="material-symbols-outlined text-primary text-[16px]">{overlineIcon}</span>}
          <span className="font-label-caps text-label-caps tracking-[0.2em] text-primary uppercase">{overline}</span>
        </div>
      )}
      <h2 ref={headingRef} className="font-headline-xl text-headline-xl text-on-surface heading-draw">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body-md text-body-md text-on-surface-variant mt-1 ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
