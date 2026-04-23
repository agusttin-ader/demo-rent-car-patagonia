import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { useBooking } from '../context/useBooking'
import {
  formatAvailabilityMessage,
  openWhatsApp,
} from '../lib/whatsapp'

/** Paisaje para rellenar el texto (tipografía máscara). */
const PATAGONIA_MASK_IMG =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80'

export function FinalCta() {
  const {
    pickupLocation,
    pickupDateTime,
    dropoffDateTime,
    carType,
  } = useBooking()

  return (
    <section className="border-t border-stone-200/80 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            También para caminos exigentes
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-balance text-2xl font-bold text-brand-ink sm:text-3xl">
            Alquilamos vehículos pensados para la Patagonia
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p
            className="motion-mask-drift mx-auto mt-10 max-w-5xl bg-clip-text py-2 text-[clamp(2.4rem,14vw,7.5rem)] font-black leading-none tracking-tight text-transparent [-webkit-background-clip:text]"
            style={{
              backgroundImage: `url(${PATAGONIA_MASK_IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            PATAGONIA
          </p>
        </Reveal>
        <Reveal delayMs={140}>
          <p className="mx-auto mt-8 max-w-lg text-pretty text-lg text-brand-ink/70">
            Torres del Paine, rutas patagónicas y la libertad de manejar tu propio
            itinerario.
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <Button
            type="button"
            variant="primary"
            className="mt-10 px-10 py-4 text-base"
            onClick={() =>
              openWhatsApp(
                formatAvailabilityMessage(
                  pickupLocation,
                  pickupDateTime,
                  dropoffDateTime,
                  carType,
                ),
              )
            }
          >
            Consultar ahora por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
