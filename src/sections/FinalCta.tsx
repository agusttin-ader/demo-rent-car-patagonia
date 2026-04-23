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
    <section className="border-t border-stone-200/80 bg-white py-14 min-[400px]:py-16 sm:py-24 min-[1920px]:py-28">
      <div className="site-container text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            También para caminos exigentes
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-balance text-[clamp(1.35rem,3.8vw+0.4rem,1.875rem)] font-bold text-brand-ink min-[400px]:text-2xl sm:text-3xl min-[1920px]:max-w-5xl min-[1920px]:text-4xl min-[2560px]:text-[2.75rem]">
            Alquilamos vehículos pensados para la Patagonia
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p
            className="motion-mask-drift mx-auto mt-8 max-w-5xl bg-clip-text py-2 text-[clamp(1.85rem,11vw+0.5rem,7.5rem)] font-black leading-none tracking-tight text-transparent [-webkit-background-clip:text] min-[400px]:mt-10 min-[1920px]:max-w-6xl min-[2560px]:mt-12"
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
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base text-brand-ink/70 min-[400px]:mt-8 min-[400px]:text-lg min-[1920px]:max-w-2xl min-[1920px]:text-xl">
            Torres del Paine, rutas patagónicas y la libertad de manejar tu propio
            itinerario.
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <Button
            type="button"
            variant="primary"
            className="mt-8 min-h-11 px-8 py-3.5 text-base min-[400px]:mt-10 min-[400px]:px-10 min-[400px]:py-4 min-[1920px]:min-h-12 min-[1920px]:px-12 min-[1920px]:text-lg"
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
