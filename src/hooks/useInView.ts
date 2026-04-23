import { useEffect, useRef, useState } from 'react'

type Options = IntersectionObserverInit & {
  /** Si es true, deja de observar tras la primera intersección (por defecto true). */
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: Options = {},
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const {
    once = true,
    root,
    rootMargin = '0px 0px -6% 0px',
    threshold = 0.08,
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el || (once && inView)) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
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
  }, [once, inView, root, rootMargin, threshold])

  return { ref, inView }
}
