import { PageShell } from '../components/PageShell'

export default function Condiciones() {
  return (
    <PageShell
      title="Condiciones del arriendo"
      description="Coberturas, requisitos (licencia, edad), kilometraje y políticas dependen del contrato y del vehículo."
    >
      <p className="mt-6 text-[15px] leading-relaxed text-brand-ink/75">
        Para el detalle vigente y tu caso particular, coordiná con nosotros por
        WhatsApp: te enviamos condiciones claras antes de reservar.
      </p>
    </PageShell>
  )
}
