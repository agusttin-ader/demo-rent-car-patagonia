import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description?: string
  children?: ReactNode
}

export function PageShell({ title, description, children }: Props) {
  return (
    <main className="min-h-[65vh] bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-brand-orange">
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-brand-teal"
          >
            ← Volver al inicio
          </Link>
        </p>
        <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-pretty text-[1.05rem] leading-relaxed text-brand-ink/70">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </main>
  )
}
