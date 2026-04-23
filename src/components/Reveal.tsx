import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  /** Retraso extra tras entrar en vista (ms). */
  delayMs?: number
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  delayMs = 0,
  style,
  ...rest
}: Props<T>) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, inView } = useInView({ once: true })

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delayMs ? ({ '--reveal-delay': `${delayMs}ms` } as CSSProperties) : {}),
  }

  return (
    <Tag
      {...rest}
      ref={ref as never}
      className={`motion-reveal ${inView ? 'motion-reveal-visible' : ''} ${className}`.trim()}
      style={mergedStyle}
    >
      {children}
    </Tag>
  )
}
