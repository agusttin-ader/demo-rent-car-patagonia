import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const reviews = [
  {
    id: '1',
    name: 'Valentina Arriagada Thielemann',
    initials: 'VA',
    quote:
      'Muy buena experiencia arrendando autos aquí. Entrega y retiro rápidos y fluidos; gran disposición con los horarios.',
  },
  {
    id: '2',
    name: 'Ruben Arias',
    initials: 'RA',
    quote:
      'Trámite súper rápido, auto en excelente estado y devolución de la garantía al tiro.',
  },
  {
    id: '3',
    name: 'Isaac Dorgan',
    initials: 'ID',
    quote:
      'Pick up and drop off sin fricción, depósito devuelto al instante. El auto ideal para las rutas del parque.',
  },
  {
    id: '4',
    name: 'Lucía Fernández',
    initials: 'LF',
    quote:
      'Coordinamos todo por WhatsApp en un día. Muy claros con horarios y punto de retiro en el aeropuerto.',
  },
  {
    id: '5',
    name: 'Martín Acosta',
    initials: 'MA',
    quote:
      'Auto impecable para ir al parque. Sin sorpresas al devolver y buena onda en la entrega.',
  },
  {
    id: '6',
    name: 'Emma Lindström',
    initials: 'EL',
    quote:
      'Great English on WhatsApp, quick replies, and the SUV felt solid on gravel roads near Torres del Paine.',
  },
  {
    id: '7',
    name: 'Carolina Méndez',
    initials: 'CM',
    quote:
      'Viajamos en familia y el SUV familiar cumplió perfecto. Recomiendo consultar con anticipación en temporada alta.',
  },
]

const AUTO_MS = 5200
const VISIBLE = 3

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-hidden>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="size-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({
  r,
  animationDelayMs,
}: {
  r: (typeof reviews)[number]
  animationDelayMs: number
}) {
  return (
    <article
      className="reviews-carousel-panel relative flex h-full flex-col rounded-3xl border border-stone-200/90 bg-white px-5 pb-7 pt-9 shadow-md shadow-brand-teal/5 sm:px-6 sm:pb-8 sm:pt-10"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <Quote
        className="absolute right-4 top-4 size-9 text-brand-orange/20 sm:right-5 sm:top-5 sm:size-10"
        strokeWidth={1.25}
        aria-hidden
      />
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-sm font-bold text-brand-teal sm:size-12">
          {r.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-brand-ink sm:overflow-visible sm:whitespace-normal sm:text-clip">
            {r.name}
          </p>
          <Stars />
        </div>
      </div>
      <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-brand-ink/75 sm:text-[15px]">
        “{r.quote}”
      </blockquote>
    </article>
  )
}

export function ClientReviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [])

  const visible = Array.from({ length: VISIBLE }, (_, k) => reviews[(index + k) % reviews.length])

  return (
    <section
      className="border-t border-stone-200/80 bg-brand-cloud py-16 sm:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 text-center sm:text-left md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="reviews-heading"
                className="text-balance text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl"
              >
                Opiniones de clientes
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-brand-ink/70 md:mx-0">
                Comentarios de quienes ya alquilaron y recorrieron la región con
                nosotros.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold tabular-nums text-brand-ink">5.0</span>
                <span className="text-sm text-brand-ink/65">Valoración destacada</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={70} className="relative mx-auto mt-12 max-w-6xl">
          <div
            className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3"
            aria-live="polite"
            aria-atomic="true"
          >
            {visible.map((r, k) => (
              <ReviewCard key={`${index}-${r.id}-${k}`} r={r} animationDelayMs={k * 70} />
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120} className="mt-10 text-center text-sm text-brand-ink/50">
          ¿Viajaste con nosotros? Podés dejar tu opinión en Google Maps.
        </Reveal>
      </div>
    </section>
  )
}
