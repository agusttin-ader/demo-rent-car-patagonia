import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const cards = [
  {
    to: '/acerca-de',
    title: 'Acerca de',
    text: 'Historia, equipo y propuesta para recorrer Torres del Paine con respaldo local.',
  },
  {
    to: '/condiciones',
    title: 'Condiciones',
    text: 'Coberturas, requisitos y políticas del arriendo.',
  },
  {
    to: '/reservar-via-whatsapp',
    title: 'Reservar vía WhatsApp',
    text: 'Canal principal para cerrar fechas, puntos de retiro y disponibilidad de flota.',
  },
]

export function SiteCards() {
  return (
    <section
      className="border-t border-stone-200/80 bg-white py-12 min-[400px]:py-14 sm:py-16 min-[1920px]:py-20"
      aria-labelledby="sitio-heading"
    >
      <div className="site-container">
        <Reveal className="text-center">
          <h2
            id="sitio-heading"
            className="text-[clamp(1.35rem,3.5vw+0.5rem,1.875rem)] font-bold text-brand-ink min-[400px]:text-2xl sm:text-3xl min-[1920px]:text-4xl"
          >
            Más secciones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-ink/70">
            Información útil, reservas y datos de contacto en un solo lugar.
          </p>
        </Reveal>
        <ul className="mt-8 grid list-none gap-5 p-0 min-[400px]:mt-10 min-[400px]:gap-6 md:grid-cols-3 min-[1920px]:mt-12 min-[1920px]:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.to} as="li" delayMs={i * 70}>
              <Link
                to={c.to}
                className="motion-card-lift group flex h-full flex-col rounded-3xl border border-stone-200/90 bg-brand-cloud p-5 transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-lg hover:shadow-brand-teal/10 min-[400px]:p-6 min-[1920px]:p-8"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-brand-ink group-hover:text-brand-teal">
                    {c.title}
                  </h3>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-brand-orange opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 flex-1 text-base leading-relaxed text-brand-ink/70">
                  {c.text}
                </p>
                <span className="mt-5 text-sm font-semibold text-brand-orange">
                  Abrir página
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
