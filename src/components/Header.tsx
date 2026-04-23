import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
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

const linkDrawer =
  'touch-manipulation rounded-xl px-4 py-3.5 text-base font-medium text-brand-ink transition-colors duration-200 ease-out hover:bg-stone-100 active:bg-stone-100/80'

const linkDrawerMuted = `${linkDrawer} text-brand-ink/80`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const phone = getWhatsAppNumber()
  const drawerTitleId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const html = document.documentElement
    const body = document.body
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      htmlTouch: html.style.touchAction,
      bodyTouch: body.style.touchAction,
      htmlOverscroll: html.style.overscrollBehavior,
    }
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    html.style.touchAction = 'none'
    body.style.touchAction = 'none'
    html.style.overscrollBehavior = 'none'
    return () => {
      html.style.overflow = prev.htmlOverflow
      body.style.overflow = prev.bodyOverflow
      html.style.touchAction = prev.htmlTouch
      body.style.touchAction = prev.bodyTouch
      html.style.overscrollBehavior = prev.htmlOverscroll
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const drawer = (
    <div
      id="mobile-drawer"
      className={`fixed inset-0 z-[100] lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!menuOpen}
    >
      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        className={`absolute inset-0 bg-brand-ink/50 backdrop-blur-[2px] transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Cerrar menú"
        onClick={closeMenu}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={drawerTitleId}
        className={`absolute inset-y-0 right-0 flex h-[100dvh] w-full max-w-full flex-col bg-white shadow-[-12px_0_40px_-12px_rgba(25,59,89,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div
          className="flex shrink-0 items-center justify-between border-b border-stone-200/90 px-[max(1rem,env(safe-area-inset-left,0px))] py-4 pr-[max(1rem,env(safe-area-inset-right,0px))]"
        >
          <p id={drawerTitleId} className="text-base font-bold text-brand-ink">
            Menú
          </p>
          <button
            type="button"
            tabIndex={menuOpen ? 0 : -1}
            className="motion-press inline-flex size-11 items-center justify-center rounded-full border border-stone-200 bg-white text-brand-ink transition-colors hover:bg-stone-50"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav
          className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-y-contain px-[max(1rem,env(safe-area-inset-left,0px))] py-5 pr-[max(1rem,env(safe-area-inset-right,0px))] [-webkit-overflow-scrolling:touch]"
          aria-label="Principal móvil"
        >
          <NavLink
            to="/"
            end
            tabIndex={menuOpen ? 0 : -1}
            className={({ isActive }) =>
              `${linkDrawer} ${isActive ? 'bg-brand-cloud font-semibold text-brand-orange' : ''}`
            }
            onClick={closeMenu}
          >
            Inicio
          </NavLink>
          <a
            href="#como-funciona"
            tabIndex={menuOpen ? 0 : -1}
            className={linkDrawer}
            onClick={closeMenu}
          >
            Cómo funciona
          </a>
          <Link
            to="/promociones-temporada"
            tabIndex={menuOpen ? 0 : -1}
            className={linkDrawer}
            onClick={closeMenu}
          >
            Ofertas
          </Link>
          <a
            href="#servicios"
            tabIndex={menuOpen ? 0 : -1}
            className={linkDrawer}
            onClick={closeMenu}
          >
            Por qué elegirnos
          </a>
          <a
            href="#contacto"
            tabIndex={menuOpen ? 0 : -1}
            className={linkDrawer}
            onClick={closeMenu}
          >
            Contacto
          </a>
          {moreNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={menuOpen ? 0 : -1}
              className={linkDrawerMuted}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8 border-t border-stone-200/80 pt-6">
            <p className="px-1 text-xs font-medium uppercase tracking-wider text-brand-teal">
              Contacto rápido
            </p>
            <a
              href={waQuick}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
              className="mt-3 flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-4 py-3.5 text-base font-semibold text-white transition-[filter,transform] hover:brightness-95 active:scale-[0.99]"
              onClick={closeMenu}
            >
              WhatsApp
            </a>
            <p className="mt-4 px-1 text-center text-xs text-brand-ink/50 tabular-nums">
              +{phone}
            </p>
          </div>
        </nav>
      </div>
    </div>
  )

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="site-container grid grid-cols-[auto_1fr_auto] items-center gap-2 py-3 min-[400px]:gap-3">
        <Link
          to="/"
          className="col-start-1 z-10 shrink-0 font-bold tracking-tight text-brand-ink transition-opacity duration-300 hover:opacity-85"
          onClick={closeMenu}
        >
          <span className="text-xs uppercase tracking-widest text-brand-teal min-[400px]:text-sm sm:text-base">
            Rent a car
          </span>
          <span className="mt-0.5 block text-[0.65rem] font-semibold text-brand-orange min-[400px]:text-xs sm:text-sm">
            Patagonia
          </span>
        </Link>

        <nav
          className="col-start-2 hidden min-w-0 items-center justify-center justify-self-center gap-0.5 lg:flex xl:gap-1 min-[1920px]:gap-1.5"
          aria-label="Principal"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-2.5 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] xl:px-3 xl:text-sm min-[1920px]:px-3.5 min-[1920px]:text-[0.95rem] ${isActive ? 'text-brand-orange' : 'text-brand-ink/80 hover:text-brand-ink'}`
            }
          >
            Inicio
          </NavLink>
          <a
            href="#como-funciona"
            className="rounded-full px-2.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm min-[1920px]:px-3.5 min-[1920px]:text-[0.95rem]"
          >
            Cómo funciona
          </a>
          <Link
            to="/promociones-temporada"
            className="rounded-full px-2.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm min-[1920px]:px-3.5 min-[1920px]:text-[0.95rem]"
          >
            Ofertas
          </Link>
          <a
            href="#servicios"
            className="rounded-full px-2.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm min-[1920px]:px-3.5 min-[1920px]:text-[0.95rem]"
          >
            Por qué elegirnos
          </a>
          <a
            href="#contacto"
            className="rounded-full px-2.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-ink xl:px-3 xl:text-sm min-[1920px]:px-3.5 min-[1920px]:text-[0.95rem]"
          >
            Contacto
          </a>
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-2 min-[400px]:gap-3">
          <div className="hidden items-center justify-end gap-3 xl:flex min-[1920px]:gap-4">
            <a
              href={waQuick}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-ink/80 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-brand-orange min-[1920px]:text-base"
            >
              WhatsApp
            </a>
            <a
              href={waQuick}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-press rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/20 transition-[color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-brand-orange-hover min-[1920px]:px-6 min-[1920px]:py-3 min-[1920px]:text-base"
            >
              Consultar
            </a>
          </div>

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-brand-ink transition-[background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-stone-50 active:scale-95 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      </header>
      {createPortal(drawer, document.body)}
    </>
  )
}
