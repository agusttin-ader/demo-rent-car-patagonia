import { PageShell } from '../components/PageShell'

export default function AcercaDe() {
  return (
    <PageShell
      title="Acerca de Rent a Car Patagonia"
      description="Somos un equipo local enfocado en alquiler de vehículos para recorrer Puerto Natales, Punta Arenas y Torres del Paine con respaldo cercano."
    >
      <p className="mt-6 text-base leading-relaxed text-brand-ink/75">
        Esta sección se puede ampliar con historia del equipo y fotos. Por
        consultas comerciales y disponibilidad, escribinos por WhatsApp desde el
        inicio o el botón flotante.
      </p>
    </PageShell>
  )
}
