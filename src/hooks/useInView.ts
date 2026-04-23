import { useEffect, useLayoutEffect, useRef, useState } from 'react'

type Options = IntersectionObserverInit & {
  /** Si es true, deja de observar tras la primera intersección (por defecto true). */
  once?: boolean
}

/** Comprueba si el elemento ya tiene caja visible en el viewport (fallback si IO tarda o falla). */
function isElementInViewport(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw
}

const ioSupported = typeof IntersectionObserver !== 'undefined'

export function useInView<T extends HTMLElement = HTMLElement>(
  options: Options = {},
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() => !ioSupported)
  const revealedRef = useRef(!ioSupported)
  const {
    once = true,
    root,
    /* % en rootMargin puede fallar en algunos Safari; píxeles + threshold 0 = más fiable */
    rootMargin = '0px 0px -32px 0px',
    threshold = 0,
  } = options

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || revealedRef.current) return
    if (isElementInViewport(el)) {
      revealedRef.current = true
      setInView(true)
    }
  }, [])

  useEffect(() => {
    if (!ioSupported) return

    const el = ref.current
    if (!el || (once && revealedRef.current)) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          revealedRef.current = true
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          revealedRef.current = false
          setInView(false)
        }
      },
      {
        ...(root ? { root } : {}),
        rootMargin,
        threshold,
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, root, rootMargin, threshold])

  return { ref, inView }
}
