import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-16">
      <p
        className="hero-motion-item text-sm font-semibold tabular-nums text-brand-orange"
        style={{ '--hero-delay': '30ms' } as CSSProperties}
      >
        Error 404
      </p>
      <h1
        className="hero-motion-item mt-2 max-w-md text-balance text-center text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl"
        style={{ '--hero-delay': '100ms' } as CSSProperties}
      >
        Página no encontrada
      </h1>
      <p
        className="hero-motion-item mt-4 max-w-sm text-center text-[15px] leading-relaxed text-brand-ink/70"
        style={{ '--hero-delay': '170ms' } as CSSProperties}
      >
        La página que buscás no existe o fue movida. Volvé al inicio para seguir
        navegando.
      </p>
      <div
        className="hero-motion-item mt-8"
        style={{ '--hero-delay': '240ms' } as CSSProperties}
      >
        <Button type="button" variant="primary" onClick={() => navigate('/')}>
          Volver al inicio
        </Button>
      </div>
    </main>
  )
}
