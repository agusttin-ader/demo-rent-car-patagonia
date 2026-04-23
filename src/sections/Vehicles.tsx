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
      className="border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="flota-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2
              id="flota-heading"
              className="text-balance text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl"
            >
              Flota más consultada
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-brand-ink/70">
              Cuatro categorías con fotos propias; el modelo exacto y la disponibilidad los
              confirmamos por WhatsApp.
            </p>
          </Reveal>
        </div>

        <ul
          className="mt-12 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto pb-3 p-0 sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-5 sm:overflow-visible sm:pb-0 sm:snap-none sm:[grid-auto-rows:1fr] lg:grid-cols-4 lg:gap-6"
        >
          {fleet.map((v, i) => (
            <Reveal
              key={v.id}
              as="li"
              delayMs={i * 55}
              className="h-full min-h-[28rem] min-w-[min(100%,280px)] shrink-0 snap-center sm:min-h-0 sm:min-w-0"
            >
              <div className="h-full">
                <VehicleCard
                  name={v.name}
                  description={v.description}
                  imageUrl={v.imageSrc}
                  imageAlt={v.imageAlt}
                  specs={v.specs}
                  imageSizes="(max-width: 639px) 85vw, (max-width: 1023px) 45vw, 22vw"
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
