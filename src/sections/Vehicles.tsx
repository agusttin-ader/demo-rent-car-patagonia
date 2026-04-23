import { Reveal } from '../components/Reveal'
import { VehicleCard, type VehicleSpecs } from '../components/VehicleCard'

type FleetItem = {
  id: string
  name: string
  description: string
  /** Ruta bajo /public — ej. /images/cars/economico.jpg */
  imageSrc: string
  imageAlt: string
  specs: VehicleSpecs
}

const fleet: FleetItem[] = [
  {
    id: 'economico',
    name: 'Económico',
    description:
      'Citycar o compacto eficiente para Puerto Natales y ruta pavimentada; ideal para presupuesto ajustado.',
    imageSrc: '/images/cars/economico.jpg',
    imageAlt: 'Auto económico de la flota',
    specs: {
      seats: '5 plazas',
      transmission: 'Manual / automático',
      note: 'Bajo consumo',
    },
  },
  {
    id: 'suv',
    name: 'SUV',
    description:
      'Espacio, altura y buena visibilidad para Torres del Paine y tramos de ripio moderado.',
    imageSrc: '/images/cars/suv.jpg',
    imageAlt: 'SUV de la flota',
    specs: {
      seats: '5 plazas',
      transmission: 'Automático',
      note: 'Altura libre cómoda',
    },
  },
  {
    id: 'sedan',
    name: 'Sedán',
    description:
      'Mayor comodidad en viajes largos y baúl amplio; perfecto si priorizás asfalto y equipaje.',
    imageSrc: '/images/cars/sedan.jpg',
    imageAlt: 'Sedán de la flota',
    specs: {
      seats: '5 plazas',
      transmission: 'Manual / automático',
      note: 'Baúl amplio',
    },
  },
  {
    id: 'todoterreno',
    name: '4x4 · Todoterreno',
    description:
      'Tracción y despeje para caminos más exigentes; consultá modelo y disponibilidad por WhatsApp.',
    imageSrc: '/images/cars/todoterreno.jpg',
    imageAlt: 'Camioneta 4x4 todoterreno de la flota',
    specs: {
      seats: '5 plazas',
      transmission: 'Manual / automático',
      note: 'Tracción 4x4',
    },
  },
]

export function Vehicles() {
  return (
    <section
      id="flota"
      className="border-t border-stone-200/80 bg-white py-12 min-[400px]:py-14 sm:py-20 min-[1920px]:py-24"
      aria-labelledby="flota-heading"
    >
      <div className="site-container">
        <div className="text-center">
          <Reveal>
            <h2
              id="flota-heading"
              className="text-balance text-[clamp(1.5rem,4.5vw+0.5rem,2.25rem)] font-bold tracking-tight text-brand-ink min-[400px]:text-3xl sm:text-4xl min-[1920px]:text-5xl min-[2560px]:text-[3.25rem]"
            >
              Flota más consultada
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-brand-ink/70 min-[400px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl">
              Cuatro categorías con fotos propias; el modelo exacto y la disponibilidad los
              confirmamos por WhatsApp.
            </p>
          </Reveal>
        </div>

        <ul
          className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:items-stretch sm:gap-5 sm:[grid-auto-rows:1fr] lg:grid-cols-4 lg:gap-6 min-[1920px]:mt-14 min-[1920px]:gap-7 min-[2560px]:gap-8"
        >
          {fleet.map((v, i) => (
            <Reveal
              key={v.id}
              as="li"
              delayMs={i * 55}
              className="h-full w-full min-h-0"
            >
              <div className="h-full">
                <VehicleCard
                  name={v.name}
                  description={v.description}
                  imageUrl={v.imageSrc}
                  imageAlt={v.imageAlt}
                  specs={v.specs}
                  imageSizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, (max-width: 1919px) 22vw, 18vw"
                  priority={i === 0}
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
