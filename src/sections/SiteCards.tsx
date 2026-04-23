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
      className="border-t border-stone-200/80 bg-white py-14 sm:py-16"
      aria-labelledby="sitio-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2
            id="sitio-heading"
            className="text-2xl font-bold text-brand-ink sm:text-3xl"
          >
            Más secciones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-ink/70">
            Información útil, reservas y datos de contacto en un solo lugar.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.to} as="li" delayMs={i * 70}>
              <Link
                to={c.to}
                className="motion-card-lift group flex h-full flex-col rounded-3xl border border-stone-200/90 bg-brand-cloud p-6 transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-lg hover:shadow-brand-teal/10"
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
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-ink/70">
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
