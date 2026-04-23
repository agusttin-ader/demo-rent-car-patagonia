import type { FormEvent } from 'react'
import { useState } from 'react'
import { Car, Search } from 'lucide-react'
import { Button } from '../components/Button'
import { CustomSelect } from '../components/CustomSelect'
import { Reveal } from '../components/Reveal'
import { openWhatsApp } from '../lib/whatsapp'

const vehicleOptions = [
  '— Elegí tu vehículo —',
  'Changan CS35 Plus',
  'Changan CS35',
  'Kia Sportage 4x4',
  'Suzuki Dzire',
  'Suzuki Celerio',
  'Suzuki S-Presso',
  'Suzuki Baleno',
  'Suzuki XL7',
  'Hyundai Creta',
  'New Changan Alsvin',
  'New Subaru XV',
  'Otro / a definir',
] as const

const vehicleSelectOptions = vehicleOptions.map((opt) => ({
  value: opt,
  label: opt,
  icon: Car,
}))

const MAP_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-73.55%2C-51.18%2C-72.55%2C-50.75&layer=mapnik'

const zones = [
  { id: 'natales', label: 'Puerto Natales' },
  { id: 'punta', label: 'Punta Arenas' },
  { id: 'paine', label: 'Torres del Paine' },
] as const

export function ContactFormMap() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [vehicle, setVehicle] = useState<string>(vehicleOptions[0])
  const [message, setMessage] = useState('')
  const [zone, setZone] = useState<(typeof zones)[number]['id']>('natales')
  const [branchQuery, setBranchQuery] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      'Hola, les escribo desde el formulario de contacto del sitio web.',
      `Zona de interés: ${zones.find((z) => z.id === zone)?.label}.`,
      name.trim() && `Nombre: ${name.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      phone.trim() && `Celular: ${phone.trim()}`,
      vehicle !== vehicleOptions[0] && `Vehículo de interés: ${vehicle}`,
      message.trim() && `Mensaje: ${message.trim()}`,
    ].filter(Boolean)
    openWhatsApp(lines.join('\n'))
  }

  const onSearchBranches = (e: FormEvent) => {
    e.preventDefault()
    const q = branchQuery.trim() || 'alquiler de auto en Patagonia'
    openWhatsApp(
      `Hola, busco información de retiro / sucursal: ${q}. Zona: ${zones.find((z) => z.id === zone)?.label}.`,
    )
  }

  return (
    <section
      id="contacto"
      className="border-t border-stone-200/80 bg-white py-12 min-[400px]:py-14 sm:py-20 min-[1920px]:py-24"
      aria-labelledby="contacto-heading"
    >
      <div className="site-container">
        <Reveal>
          <h2
            id="contacto-heading"
            className="text-balance text-[clamp(1.5rem,4.5vw+0.5rem,2.25rem)] font-bold tracking-tight text-brand-ink min-[400px]:text-3xl sm:text-4xl min-[1920px]:text-5xl"
          >
            Encontranos en la Patagonia
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base text-brand-ink/70 min-[400px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl">
            Buscá punto de retiro o elegí zona; coordinamos el detalle por
            WhatsApp.
          </p>
        </Reveal>

        <Reveal delayMs={50}>
          <form
            onSubmit={onSearchBranches}
            className="mt-8 flex max-w-3xl flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 min-[1920px]:max-w-4xl"
          >
          <div className="relative flex-1">
            <input
              type="search"
              value={branchQuery}
              onChange={(e) => setBranchQuery(e.target.value)}
              placeholder="Busco alquiler en…"
              className="input-pill w-full pr-10 sm:pr-12"
              aria-label="Buscar punto de retiro"
            />
            <Search
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-brand-ink/35 sm:right-4 sm:size-5"
              aria-hidden
            />
          </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full shrink-0 py-2.5 text-sm sm:w-auto sm:py-3 sm:px-8 sm:text-base"
            >
              Buscar
            </Button>
          </form>
        </Reveal>

        <Reveal delayMs={90} className="mt-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Zona">
            {zones.map((z) => (
              <button
                key={z.id}
                type="button"
                onClick={() => setZone(z.id)}
                className={`rounded-2xl px-3 py-2.5 text-xs font-semibold transition-[color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-press min-[400px]:px-4 min-[400px]:text-sm min-[1920px]:px-5 min-[1920px]:text-base ${zone === z.id ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20' : 'bg-stone-100 text-brand-ink ring-1 ring-stone-200 hover:bg-stone-50'}`}
              >
                {z.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 min-[400px]:mt-12 lg:grid-cols-2 lg:gap-10 lg:items-start min-[1920px]:mt-14 min-[1920px]:gap-12">
          <Reveal delayMs={40}>
            <form
              onSubmit={onSubmit}
              className="motion-card-lift space-y-3 rounded-2xl border border-stone-200/90 bg-white p-3 shadow-sm shadow-stone-200/40 sm:space-y-4 sm:rounded-3xl sm:p-7 min-[1920px]:p-8"
            >
            <div className="border-b border-stone-200/80 pb-3 sm:pb-4">
              <h3 className="text-base font-bold text-brand-ink sm:text-lg">Envíanos tu consulta</h3>
              <p className="mt-1 text-xs text-brand-ink/60 sm:text-sm">
                Completá los datos y abrimos WhatsApp con el mensaje listo para enviar.
              </p>
            </div>
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-brand-ink sm:mb-1.5 sm:text-base">
                Tu nombre
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-pill"
                placeholder="Nombre y apellido"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-brand-ink sm:mb-1.5 sm:text-base">
                Tu email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-pill"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-brand-ink sm:mb-1.5 sm:text-base">
                Tu celular
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-pill"
                placeholder="+56 9 …"
              />
            </div>
            <div>
              <label htmlFor="contact-vehicle" className="mb-1 block text-sm font-medium text-brand-ink sm:mb-1.5 sm:text-base">
                Elegí tu vehículo
              </label>
              <CustomSelect
                id="contact-vehicle"
                name="vehicle"
                options={vehicleSelectOptions}
                value={vehicle}
                onChange={setVehicle}
                placeholder="— Elegí tu vehículo —"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-brand-ink sm:mb-1.5 sm:text-base">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea-field"
                placeholder="Fechas, lugar de retiro, dudas…"
              />
            </div>
              <div className="pt-0.5 sm:pt-1">
                <Button
                  type="submit"
                  variant="dark"
                  className="w-full py-2.5 text-sm sm:max-w-xs sm:py-3.5 sm:text-base"
                >
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delayMs={100} className="flex flex-col">
            <h3 className="text-lg font-bold text-brand-ink">
              Mapa · Parque Nacional Torres del Paine
            </h3>
            <p className="mt-2 text-base leading-relaxed text-brand-ink/70">
              Referencia de la zona del parque para planificar salidas desde Puerto
              Natales.
            </p>
            <div className="mt-4 overflow-hidden rounded-3xl bg-brand-teal p-2 shadow-inner shadow-black/20 ring-1 ring-brand-teal-dark/30">
              <div className="relative aspect-[16/10] min-h-[220px] w-full overflow-hidden rounded-2xl bg-brand-teal-dark/20 min-[400px]:min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-0 min-[1920px]:aspect-[16/9] min-[1920px]:min-h-[min(22rem,42svh)] min-[2560px]:min-h-[min(26rem,45svh)]">
                <iframe
                  title="Mapa Torres del Paine — OpenStreetMap"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-brand-ink/50">
              ©{' '}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors duration-300 hover:text-brand-orange"
              >
                OpenStreetMap
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
