import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const orbRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const orb = orbRef.current
    if (!orb) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx, cy = my
    let raf

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove, { passive: true })

    function animate() {
      cx += (mx - cx) * 0.072
      cy += (my - cy) * 0.072
      orb.style.left = cx + 'px'
      orb.style.top = cy + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <div ref={orbRef} id="cursor-glow" aria-hidden="true" />
}
