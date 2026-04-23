import { Gauge, Users } from 'lucide-react'
import { Button } from './Button'
import { useBooking } from '../context/useBooking'
import {
  formatVehicleInquiryMessage,
  openWhatsApp,
} from '../lib/whatsapp'

export type VehicleSpecs = {
  seats: string
  transmission: string
  note: string
}

type Props = {
  name: string
  description: string
  imageUrl: string
  imageAlt: string
  specs: VehicleSpecs
  /** Para cuando agregues srcSet: ayuda al navegador a elegir densidad. */
  imageSizes?: string
  /** Primera card: carga prioritaria (LCP). */
  priority?: boolean
}

export function VehicleCard({
  name,
  description,
  imageUrl,
  imageAlt,
  specs,
  imageSizes = '(max-width: 1023px) 90vw, 25vw',
  priority = false,
}: Props) {
  const {
    pickupLocation,
    pickupDateTime,
    dropoffDateTime,
    carType,
  } = useBooking()

  const waPayload = () =>
    formatVehicleInquiryMessage(
      name,
      pickupLocation,
      pickupDateTime,
      dropoffDateTime,
      carType,
    )

  const waDetails = () =>
    `Hola, quiero más información sobre la categoría "${name}" (${specs.note}). ${pickupLocation.trim() ? `Retiro previsto en: ${pickupLocation}.` : ''}`

  return (
    <article className="motion-card-lift flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md shadow-brand-teal/5 sm:rounded-3xl">
      <div className="relative aspect-[16/10] w-full max-h-[200px] shrink-0 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50 sm:aspect-[3/2] sm:max-h-none">
        <img
          src={imageUrl}
          alt={imageAlt}
          width={1200}
          height={800}
          sizes={imageSizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          decoding="async"
          className="motion-img-zoom h-full w-full object-cover object-[center_52%]"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col px-3 pb-4 pt-2.5 sm:px-4 sm:pb-5 sm:pt-3 min-[400px]:px-6 min-[400px]:pb-6 min-[1920px]:px-7 min-[1920px]:pb-7">
        <h3 className="text-base font-bold text-brand-ink sm:text-lg min-[400px]:text-xl min-[1920px]:text-2xl">
          {name}
        </h3>
        <p className="mt-1.5 line-clamp-3 flex-1 text-sm leading-snug text-brand-ink/70 sm:mt-2 sm:line-clamp-4 sm:text-base sm:leading-relaxed min-[1920px]:text-lg">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-brand-ink/65 sm:mt-4 sm:gap-4 sm:text-base">
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-3.5 shrink-0 text-brand-orange sm:size-4" aria-hidden />
            {specs.seats}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="size-3.5 shrink-0 text-brand-orange sm:size-4" aria-hidden />
            {specs.transmission}
          </span>
        </div>
        <p className="mt-2 text-sm font-semibold leading-snug text-brand-teal sm:mt-3 sm:text-base">
          Valor según temporada — consultá por WhatsApp
        </p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4 min-[400px]:gap-3 min-[400px]:pt-6 min-[1920px]:gap-4">
          <Button
            type="button"
            variant="primary"
            className="w-full min-h-10 px-2 py-2 text-xs sm:py-2.5 sm:text-sm min-[400px]:py-3 min-[400px]:text-base min-[1920px]:min-h-11 min-[1920px]:text-lg"
            onClick={() => openWhatsApp(waDetails())}
          >
            Detalles
          </Button>
          <Button
            type="button"
            variant="dark"
            className="w-full min-h-10 px-2 py-2 text-xs sm:py-2.5 sm:text-sm min-[400px]:py-3 min-[400px]:text-base min-[1920px]:min-h-11 min-[1920px]:text-lg"
            onClick={() => openWhatsApp(waPayload())}
          >
            Reservar
          </Button>
        </div>
      </div>
    </article>
  )
}
