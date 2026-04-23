import { PageShell } from '../components/PageShell'

export default function PromocionesTemporada() {
  return (
    <PageShell
      title="Ofertas y temporada"
      description="Las promociones varían según fechas, flota disponible y duración del arriendo."
    >
      <p className="mt-6 text-[15px] leading-relaxed text-brand-ink/75">
        Escribinos por WhatsApp indicando fechas y tipo de vehículo: te
        respondemos con la mejor opción disponible para tu viaje.
      </p>
    </PageShell>
  )
}
