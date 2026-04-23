import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { buildWhatsAppUrl, getWhatsAppNumber } from '../lib/whatsapp'

const waQuick = buildWhatsAppUrl(
  'Hola, quiero consultar un arriendo en Rent a Car Patagonia.',
)

const moreNav = [
  { to: '/acerca-de', label: 'Acerca de' },
  { to: '/condiciones', label: 'Condiciones' },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const phone = getWhatsAppNumber()

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="z-10 shrink-0 font-bold tracking-tight text-brand-ink transition-opacity duration-300 hover:opacity-85"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-sm uppercase tracking-widest text-brand-teal sm:text-base">
            Rent a car
          </span>
          <span className="mt-0.5 block text-xs font-semibold text-brand-orange sm:text-sm">
            Patagonia
          </span>
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] xl:px-3 xl:text-sm ${isActive ? 'text-brand-orange' : 'text-brand-ink/80 hover:text-brand-ink'}`
            }
          >
            Inicio
          </NavLink>
          <a
            href="#como-funciona"
            className="rounded-full px-2.5 py-2 text-[13px] font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm"
          >
            Cómo funciona
          </a>
          <Link
            to="/promociones-temporada"
            className="rounded-full px-2.5 py-2 text-[13px] font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm"
          >
            Ofertas
          </Link>
          <a
            href="#servicios"
            className="rounded-full px-2.5 py-2 text-[13px] font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm"
          >
            Por qué elegirnos
          </a>
          <a
            href="#contacto"
            className="rounded-full px-2.5 py-2 text-[13px] font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm"
          >
            Contacto
          </a>
        </nav>

        <div className="hidden items-center justify-end gap-3 xl:flex">
          <a
            href={waQuick}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-orange"
          >
            WhatsApp
          </a>
          <a
            href={waQuick}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-press rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/20 transition-[color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-brand-orange-hover"
          >
            Consultar
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white text-brand-ink transition-[background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-stone-50 active:scale-95 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-stone-100 bg-white px-4 py-4 lg:hidden ${menuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col gap-1" aria-label="Principal móvil">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-white text-brand-orange shadow-sm' : 'text-brand-ink'}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <a
            href="#como-funciona"
            className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink"
            onClick={() => setMenuOpen(false)}
          >
            Cómo funciona
          </a>
          <Link
            to="/promociones-temporada"
            className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink"
            onClick={() => setMenuOpen(false)}
          >
            Ofertas
          </Link>
          <a
            href="#servicios"
            className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink"
            onClick={() => setMenuOpen(false)}
          >
            Por qué elegirnos
          </a>
          <a
            href="#contacto"
            className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          {moreNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink/70"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <p className="mt-2 px-3 text-xs text-brand-ink/50 tabular-nums">+{phone}</p>
        </nav>
      </div>
    </header>
  )
}
