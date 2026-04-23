import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { buildWhatsAppUrl, getWhatsAppNumber } from '../lib/whatsapp'

/** Actualizá con las URLs reales de la marca cuando estén disponibles. */
const SOCIAL_HREF = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
} as const

const helpLinks = [
  { to: '/faq', label: 'FAQ' },
  { to: '/politicas-de-privacidad', label: 'Políticas de Privacidad' },
  { to: '/mapa-del-parque', label: 'Mapa del Parque' },
] as const

const emergencyTel = [
  { name: 'Carabineros', tel: '133' },
  { name: 'Bomberos', tel: '132' },
  { name: 'Ambulancia (SAMU)', tel: '131' },
  { name: 'PDI', tel: '134' },
] as const

const socialLinks = [
  { href: SOCIAL_HREF.facebook, label: 'Facebook' },
  { href: SOCIAL_HREF.instagram, label: 'Instagram' },
] as const

export function Footer() {
  const phone = getWhatsAppNumber()
  const waHref = buildWhatsAppUrl(
    'Hola, quiero información sobre alquiler de autos en Puerto Natales / Torres del Paine (Rent a Car Patagonia).',
  )

  return (
    <footer className="border-t border-brand-sky/25 bg-brand-teal-dark text-stone-300">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">
              Rent a Car Patagonia
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-300">
              Puerto Natales, Chile · Puerta de Torres del Paine
            </p>
            <p className="mt-4 text-sm">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-sky transition-colors duration-300 hover:text-white"
              >
                WhatsApp
              </a>
              <span className="mx-2 text-stone-600" aria-hidden>
                ·
              </span>
              <span className="tabular-nums text-stone-400">+{phone}</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Enlaces útiles</p>
            <ul className="mt-3 space-y-2 text-sm">
              {helpLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-stone-400 underline decoration-white/15 underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-sky"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Red de emergencia</p>
            <ul className="mt-3 space-y-2 text-sm">
              {emergencyTel.map((e) => (
                <li key={e.tel}>
                  <a
                    href={`tel:${e.tel}`}
                    className="text-stone-400 underline decoration-white/15 underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-sky"
                  >
                    {e.name}: {e.tel}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-stone-500">
              También: CONAF, Armada de Chile, SAG — según sitio oficial.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Redes</p>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 underline decoration-white/15 underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-sky"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <blockquote className="border-l-4 border-brand-sky/70 pl-5 text-sm italic leading-relaxed text-stone-400 transition-[border-color] duration-500">
            “Conecta tu ser interior con la Naturaleza. Respeta la flora y fauna y
            disfruta sin prisa” — Rent a Car Patagonia
          </blockquote>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © {new Date().getFullYear()} Rent a Car Patagonia</p>
            <p>Diseñado por Agustin Ader, developer.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
