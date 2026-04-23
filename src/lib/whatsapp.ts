function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, '')
}

/** Número para wa.me; configurar VITE_WHATSAPP_NUMBER (ver .env.example). */
export function getWhatsAppNumber(): string {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined
  const n = raw ? digitsOnly(raw) : ''
  if (n.length > 0) return n
  return '5491155555555'
}

export function buildWhatsAppUrl(text: string): string {
  const phone = getWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(text: string): void {
  window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
}

function formatDateTimeEs(val: string): string {
  if (!val.trim()) return 'a definir'
  const d = new Date(val)
  if (Number.isNaN(d.getTime())) return val.trim()
  return d.toLocaleString('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatAvailabilityMessage(
  location: string,
  pickupDateTime: string,
  dropoffDateTime: string,
  carType: string,
): string {
  const place = location.trim() || 'lugar a definir'
  const car = carType.trim() || 'tipo de vehículo a definir'
  const from = formatDateTimeEs(pickupDateTime)
  const to = formatDateTimeEs(dropoffDateTime)
  return `Hola, quiero consultar disponibilidad: ${car}, retiro el ${from} en ${place}, devolución el ${to}.`
}

export function formatVehicleInquiryMessage(
  vehicleName: string,
  location: string,
  pickupDateTime: string,
  dropoffDateTime: string,
  carType: string,
): string {
  const place = location.trim() || 'lugar a definir'
  const from = formatDateTimeEs(pickupDateTime)
  const to = formatDateTimeEs(dropoffDateTime)
  const typeHint = carType.trim()
  const extra = typeHint ? ` Categoría elegida en el buscador: ${typeHint}.` : ''
  return `Hola, quiero consultar por el ${vehicleName}.${extra} Retiro: ${from} en ${place}. Devolución: ${to}.`
}
