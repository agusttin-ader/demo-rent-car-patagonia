import { Headphones, MapPinned, ShieldCheck } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const features = [
  {
    title: 'Atención y soporte',
    text: 'Asistencia y respuesta por WhatsApp cuando la necesites, incluso fuera de horario habitual.',
    icon: Headphones,
  },
  {
    title: 'Muchos puntos de retiro',
    text: 'Flexibilidad en retiro y entrega: ciudad, terminal y aeropuertos de la región, según disponibilidad.',
    icon: MapPinned,
  },
  {
    title: 'Seguro y tranquilidad',
    text: 'Seguro incluido y flota en buen estado para rutas patagónicas y acceso a Torres del Paine.',
    icon: ShieldCheck,
  },
]

/** Imagen en public/images/cars/seccionsuv.jpg */
const FEATURE_IMG = '/images/cars/seccionsuv.jpg'

export function Benefits() {
  return (
    <section
      id="servicios"
      className="border-t border-stone-200/80 bg-white py-12 min-[400px]:py-14 sm:py-20 min-[1920px]:py-24"
      aria-labelledby="servicios-heading"
    >
      <div className="site-container">
        <Reveal>
          <h2
            id="servicios-heading"
            className="max-w-3xl text-balance text-[clamp(1.5rem,4.5vw+0.5rem,2.25rem)] font-bold tracking-tight text-brand-ink min-[400px]:text-3xl sm:text-4xl min-[1920px]:max-w-4xl min-[1920px]:text-5xl"
          >
            Mejor servicio y flota para tu viaje
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base text-brand-ink/70 min-[400px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl">
            Soporte cercano, puntos de retiro flexibles y flota preparada para la
            región.
          </p>
        </Reveal>

        <div className="mt-10 grid items-center gap-8 min-[400px]:mt-12 min-[400px]:gap-10 lg:grid-cols-2 lg:gap-16 min-[1920px]:mt-14 min-[1920px]:gap-20">
          <Reveal delayMs={80} className="overflow-hidden rounded-3xl bg-stone-100 shadow-xl shadow-brand-teal/10 ring-1 ring-stone-200/80">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={FEATURE_IMG}
                alt="SUV de la flota — mejor servicio para tu viaje"
                width={1200}
                height={800}
                sizes="(max-width: 1023px) 100vw, (max-width: 1919px) 50vw, 40vw"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_45%] transition-transform duration-[1.05s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <ul className="space-y-10">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} as="li" delayMs={120 + i * 75} className="flex gap-5 text-left">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-stone-100 text-brand-teal ring-1 ring-stone-200 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
                    <Icon className="size-7" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-ink min-[400px]:text-xl min-[1920px]:text-2xl">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-brand-ink/70 min-[1920px]:text-lg">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
