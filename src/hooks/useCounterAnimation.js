import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` when the element enters the viewport.
 * Returns [ref, displayValue].
 */
export function useCounterAnimation(target, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)

        const start = performance.now()
        const isLarge = target >= 1000

        function step(now) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.floor(eased * target)
          setValue(isLarge ? current.toLocaleString() : current)
          if (progress < 1) requestAnimationFrame(step)
          else setValue(isLarge ? target.toLocaleString() : target)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}
