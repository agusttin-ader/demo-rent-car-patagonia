import { Button } from '../components/Button'
import { PageShell } from '../components/PageShell'
import { useBooking } from '../context/useBooking'
import { formatAvailabilityMessage, openWhatsApp } from '../lib/whatsapp'

export default function ReservarWhatsApp() {
  const {
    pickupLocation,
    pickupDateTime,
    dropoffDateTime,
    carType,
  } = useBooking()

  return (
    <PageShell
      title="Reservar vía WhatsApp"
      description="Es nuestro canal principal para confirmar disponibilidad, modelo y puntos de retiro o devolución."
    >
      <p className="mt-6 text-[15px] leading-relaxed text-brand-ink/75">
        Si ya completaste fechas y lugar en el buscador del inicio, podés abrir
        WhatsApp con ese mismo mensaje. Si no, igual podés consultarnos y lo
        definimos en el chat.
      </p>
      <div className="mt-8">
        <Button
          type="button"
          variant="whatsapp"
          className="w-full py-3.5 sm:w-auto sm:min-w-[220px]"
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
          Abrir WhatsApp con mi consulta
        </Button>
      </div>
    </PageShell>
  )
}
