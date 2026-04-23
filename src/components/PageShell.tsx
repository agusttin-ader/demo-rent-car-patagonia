import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description?: string
  children?: ReactNode
}

export function PageShell({ title, description, children }: Props) {
  return (
    <main className="min-h-[65vh] bg-white py-10 min-[400px]:py-12 sm:py-16 min-[1920px]:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl min-[1920px]:max-w-4xl min-[2560px]:max-w-5xl">
          <p className="text-sm font-medium text-brand-orange">
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-brand-teal"
            >
              ← Volver al inicio
            </Link>
          </p>
          <h1 className="mt-5 text-balance text-[clamp(1.5rem,4vw+0.5rem,2.25rem)] font-bold tracking-tight text-brand-ink min-[400px]:text-3xl sm:text-4xl min-[1920px]:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-brand-ink/70 min-[1920px]:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </main>
  )
}
