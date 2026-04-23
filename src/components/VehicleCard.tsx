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
    <article className="motion-card-lift flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-md shadow-brand-teal/5">
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50">
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
      <div className="flex min-h-0 flex-1 flex-col px-6 pb-6 pt-3">
        <h3 className="text-xl font-bold text-brand-ink">{name}</h3>
        <p className="mt-2 line-clamp-4 flex-1 text-[15px] leading-relaxed text-brand-ink/70">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand-ink/65">
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-4 text-brand-orange" aria-hidden />
            {specs.seats}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="size-4 text-brand-orange" aria-hidden />
            {specs.transmission}
          </span>
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-teal">
          Valor según temporada — consultá por WhatsApp
        </p>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <Button
            type="button"
            variant="primary"
            className="w-full py-3 text-sm"
            onClick={() => openWhatsApp(waDetails())}
          >
            Detalles
          </Button>
          <Button
            type="button"
            variant="dark"
            className="w-full py-3 text-sm"
            onClick={() => openWhatsApp(waPayload())}
          >
            Reservar
          </Button>
        </div>
      </div>
    </article>
  )
}
