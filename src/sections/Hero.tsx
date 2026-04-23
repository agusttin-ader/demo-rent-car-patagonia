import type { CSSProperties, FormEvent } from 'react'
import {
  Building2,
  Bus,
  Car,
  CarFront,
  CircleHelp,
  Hotel,
  MapPin,
  MessageCircle,
  MountainSnow,
  Plane,
  Truck,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { CustomSelect, type CustomSelectOption } from '../components/CustomSelect'
import { useBooking } from '../context/useBooking'

const CAR_TYPES: CustomSelectOption[] = [
  { value: '', label: 'Tipo de vehículo', icon: Car },
  { value: 'Auto económico / citycar', label: 'Auto económico', icon: Car },
  { value: 'SUV', label: 'SUV', icon: CarFront },
  { value: 'Pickup', label: 'Pickup', icon: Truck },
  { value: '4x4 / AWD', label: '4x4 / AWD', icon: MountainSnow },
  { value: 'Lo define el asesor', label: 'A definir con asesor', icon: CircleHelp },
]

/** Puntos de retiro frecuentes — Puerto Natales, Punta Arenas y alrededores. */
const PICKUP_LOCATIONS: CustomSelectOption[] = [
  { value: '', label: 'Lugar de retiro', icon: MapPin },
  {
    value: 'Puerto Natales — centro',
    label: 'Puerto Natales — centro',
    icon: Building2,
  },
  {
    value: 'Aeropuerto Punta Arenas (PUQ)',
    label: 'Aeropuerto Punta Arenas (PUQ)',
    icon: Plane,
  },
  {
    value: 'Aeropuerto Puerto Natales (PNT)',
    label: 'Aeropuerto Puerto Natales (PNT)',
    icon: Plane,
  },
  {
    value: 'Terminal de buses — Puerto Natales',
    label: 'Terminal de buses — Puerto Natales',
    icon: Bus,
  },
  {
    value: 'Punta Arenas — centro',
    label: 'Punta Arenas — centro',
    icon: Building2,
  },
  {
    value: 'Puerto Natales — hoteles / Costanera',
    label: 'Puerto Natales — hoteles / Costanera',
    icon: Hotel,
  },
  {
    value: 'Zona Torres del Paine — coordinar punto',
    label: 'Zona Torres del Paine — coordinar punto',
    icon: MountainSnow,
  },
  {
    value: 'Otro — coordinar por WhatsApp',
    label: 'Otro — coordinar por WhatsApp',
    icon: MessageCircle,
  },
]

/** Imagen hero — `public/images/cars/suvhero.jpg`. */
const HERO_CAR = '/images/cars/suvhero.jpg'

export function Hero() {
  const {
    pickupLocation,
    pickupDateTime,
    dropoffDateTime,
    carType,
    setPickupLocation,
    setPickupDateTime,
    setDropoffDateTime,
    setCarType,
  } = useBooking()

  const navigate = useNavigate()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/404')
  }

  return (
    <section
      className="relative bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="site-container grid items-center gap-6 py-8 min-[400px]:gap-8 min-[400px]:py-10 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16 min-[1920px]:gap-14 min-[1920px]:py-20 min-[2560px]:gap-16 min-[2560px]:py-24">
        <div className="relative z-20 min-w-0">
          <p
            className="hero-motion-item text-sm font-semibold uppercase tracking-wider text-brand-teal"
            style={{ '--hero-delay': '40ms' } as CSSProperties}
          >
            Rent a Car Patagonia
          </p>
          <h1
            id="hero-heading"
            className="hero-motion-item mt-3 text-balance text-[clamp(1.6rem,6vw+0.2rem,2.25rem)] font-bold leading-[1.12] tracking-tight text-brand-ink min-[400px]:text-4xl sm:text-[2.75rem] sm:leading-[1.1] lg:text-[3rem] min-[1920px]:text-[3.35rem] min-[2560px]:text-[3.65rem] min-[3840px]:text-[4rem]"
            style={{ '--hero-delay': '110ms' } as CSSProperties}
          >
            Forma rápida y simple de alquilar tu auto
          </h1>
          <p
            className="hero-motion-item mt-4 max-w-lg text-pretty text-base leading-relaxed text-brand-ink/75 min-[400px]:text-lg min-[1920px]:max-w-xl min-[1920px]:text-xl min-[2560px]:text-[1.35rem]"
            style={{ '--hero-delay': '180ms' } as CSSProperties}
          >
            Una experiencia única, confiable y segura para recorrer Torres del
            Paine. Completá el buscador y abrimos WhatsApp con tu consulta
            lista.
          </p>

          <form
            onSubmit={onSubmit}
            className="hero-motion-item mt-6 space-y-3 sm:mt-8 sm:space-y-3.5"
            style={{ '--hero-delay': '250ms' } as CSSProperties}
          >
            <div className="grid min-w-0 gap-2.5 min-[400px]:gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="min-w-0 text-left sm:col-span-2">
                <label htmlFor="hero-car-type" className="mb-1.5 block text-sm font-medium text-brand-ink sm:mb-2 sm:text-base">
                  Tipo de vehículo
                </label>
                <CustomSelect
                  id="hero-car-type"
                  options={CAR_TYPES}
                  value={carType}
                  onChange={setCarType}
                  placeholder="Tipo de vehículo"
                />
              </div>
              <div className="min-w-0 text-left sm:col-span-2">
                <label htmlFor="hero-pickup" className="mb-1.5 block text-sm font-medium text-brand-ink sm:mb-2 sm:text-base">
                  Lugar de retiro
                </label>
                <CustomSelect
                  id="hero-pickup"
                  options={PICKUP_LOCATIONS}
                  value={pickupLocation}
                  onChange={setPickupLocation}
                  placeholder="Lugar de retiro"
                />
              </div>
              <div className="min-w-0 text-left">
                <label htmlFor="hero-pickup-dt" className="mb-1.5 block text-sm font-medium text-brand-ink sm:mb-2 sm:text-base">
                  Retiro — fecha y hora
                </label>
                <input
                  id="hero-pickup-dt"
                  type="datetime-local"
                  value={pickupDateTime}
                  onChange={(e) => setPickupDateTime(e.target.value)}
                  className="input-pill min-h-10 sm:min-h-11"
                />
              </div>
              <div className="min-w-0 text-left">
                <label htmlFor="hero-dropoff-dt" className="mb-1.5 block text-sm font-medium text-brand-ink sm:mb-2 sm:text-base">
                  Devolución — fecha y hora
                </label>
                <input
                  id="hero-dropoff-dt"
                  type="datetime-local"
                  value={dropoffDateTime}
                  onChange={(e) => setDropoffDateTime(e.target.value)}
                  className="input-pill min-h-10 sm:min-h-11"
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full min-h-10 py-2.5 text-sm sm:w-auto sm:min-h-11 sm:min-w-[190px] sm:py-3.5 sm:text-base min-[1920px]:min-h-12 min-[1920px]:px-8 min-[1920px]:text-[1.05rem]"
            >
              Buscar disponibilidad
            </Button>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="hero-motion-media absolute -right-2 top-1/2 z-0 hidden h-[min(100%,460px)] w-[min(100%,480px)] -translate-y-1/2 rounded-[2.5rem] bg-brand-teal md:block lg:-right-6 lg:h-[min(92vh,520px)] lg:w-[min(100%,560px)] xl:h-[min(92vh,580px)] xl:w-[min(100%,600px)] min-[1920px]:lg:h-[min(92vh,600px)] min-[1920px]:lg:w-[min(100%,640px)] min-[2560px]:lg:h-[min(92vh,680px)] min-[2560px]:lg:w-[min(100%,720px)]"
            style={{ '--hero-media-delay': '80ms' } as CSSProperties}
            aria-hidden
          />
          <div className="relative z-10 flex justify-center md:justify-end">
            <div
              className="hero-motion-media w-full max-w-md overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-brand-teal/10 sm:max-w-lg sm:p-3 md:max-w-xl md:rounded-[2rem] md:bg-transparent md:p-0 md:shadow-none lg:max-w-2xl min-[1920px]:lg:max-w-[48rem] min-[2560px]:lg:max-w-[52rem]"
              style={{ '--hero-media-delay': '140ms' } as CSSProperties}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 sm:aspect-[16/10] md:rounded-[1.75rem] lg:aspect-[16/9]">
                <img
                  src={HERO_CAR}
                  alt="SUV en ruta — Rent a Car Patagonia"
                  width={1600}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_46%] drop-shadow-2xl md:drop-shadow-[0_26px_48px_rgba(25,59,89,0.28)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
