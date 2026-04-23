import { Calendar, Car, MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const steps = [
  {
    key: '1',
    title: 'Elegí ubicación',
    text: 'Puerto Natales, terminal, aeropuertos u otro punto acordado con el equipo.',
    icon: MapPin,
    boxClass: 'bg-stone-100 text-brand-teal',
  },
  {
    key: '2',
    title: 'Fechas de retiro',
    text: 'Indicá retiro y devolución; te respondemos por WhatsApp con disponibilidad.',
    icon: Calendar,
    boxClass: 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30',
  },
  {
    key: '3',
    title: 'Reservá tu auto',
    text: 'Confirmamos modelo, seguro y condiciones antes de cerrar la reserva.',
    icon: Car,
    boxClass: 'bg-stone-100 text-brand-teal',
  },
]

function StepConnector() {
  return (
    <div
      className="hidden h-px flex-1 border-t-2 border-dashed border-brand-orange/40 md:block"
      aria-hidden
    />
  )
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-t border-stone-200/80 bg-brand-cloud py-12 min-[400px]:py-14 sm:py-20 min-[1920px]:py-24"
      aria-labelledby="como-heading"
    >
      <div className="site-container text-center">
        <Reveal>
          <h2
            id="como-heading"
            className="text-balance text-[clamp(1.5rem,4.5vw+0.5rem,2.25rem)] font-bold tracking-tight text-brand-ink min-[400px]:text-3xl sm:text-4xl min-[1920px]:text-5xl"
          >
            Cómo funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-brand-ink/70 min-[400px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl">
            Tres pasos: elegís ubicación y fechas, y cerramos la reserva por
            WhatsApp con disponibilidad real.
          </p>
        </Reveal>

        <div className="mt-10 min-[400px]:mt-14 md:mt-16 min-[1920px]:mt-20">
          <ol className="flex list-none flex-col gap-10 p-0 min-[400px]:gap-12 md:flex-row md:items-start md:justify-between md:gap-4 min-[1920px]:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal
                  key={s.key}
                  as="li"
                  delayMs={i * 90}
                  className="flex flex-1 flex-col items-center text-center"
                >
                  <div className="flex w-full max-w-sm items-center justify-center md:max-w-none md:justify-between">
                    {i > 0 ? <StepConnector /> : <span className="hidden flex-1 md:block" />}
                    <div
                      className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${s.boxClass}`}
                    >
                      <Icon className="size-7" strokeWidth={1.75} aria-hidden />
                    </div>
                    {i < steps.length - 1 ? <StepConnector /> : <span className="hidden flex-1 md:block" />}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-brand-ink min-[400px]:text-xl min-[1920px]:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-base leading-relaxed text-brand-ink/70 min-[1920px]:max-w-sm min-[1920px]:text-lg">
                    {s.text}
                  </p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
