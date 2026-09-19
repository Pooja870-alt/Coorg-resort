import { useEffect, useRef } from 'react'

export default function MistCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const section = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let raf
    const COUNT = 55

    function rand(min, max) { return Math.random() * (max - min) + min }

    function resize() {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const particles = Array.from({ length: COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(1.5, 4.5),
      dx: rand(-0.18, 0.18),
      dy: rand(-0.12, 0.06),
      alpha: rand(0.06, 0.22),
      dAlpha: rand(-0.0006, 0.0006),
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        g.addColorStop(0, `rgba(212,175,55,${p.alpha})`)
        g.addColorStop(1, 'rgba(212,175,55,0)')
        ctx.fillStyle = g
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.dx; p.y += p.dy; p.alpha += p.dAlpha
        if (p.alpha <= 0.04 || p.alpha >= 0.24) p.dAlpha *= -1
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="mist-canvas" />
}
