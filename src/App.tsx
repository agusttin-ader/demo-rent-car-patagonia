import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { WhatsAppFab } from './components/WhatsAppFab'
import { BookingProvider } from './context/BookingProvider'
import { Footer } from './sections/Footer'
import Home from './pages/Home'

const AcercaDe = lazy(() => import('./pages/AcercaDe'))
const Condiciones = lazy(() => import('./pages/Condiciones'))
const Faq = lazy(() => import('./pages/Faq'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PoliticasPrivacidad = lazy(() => import('./pages/PoliticasPrivacidad'))
const PromocionesTemporada = lazy(() => import('./pages/PromocionesTemporada'))
const ReservarWhatsApp = lazy(() => import('./pages/ReservarWhatsApp'))

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex min-h-[45vh] w-full flex-col items-center justify-center gap-3 bg-white px-6"
    >
      <span className="sr-only">Cargando página…</span>
      <span
        className="inline-block h-1.5 w-20 animate-pulse rounded-full bg-brand-teal/40 motion-reduce:animate-none motion-reduce:opacity-70"
        aria-hidden
      />
    </div>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <WhatsAppFab />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="acerca-de" element={<AcercaDe />} />
              <Route path="condiciones" element={<Condiciones />} />
              <Route path="promociones-temporada" element={<PromocionesTemporada />} />
              <Route path="reservar-via-whatsapp" element={<ReservarWhatsApp />} />
              <Route path="faq" element={<Faq />} />
              <Route path="politicas-de-privacidad" element={<PoliticasPrivacidad />} />
              <Route
                path="mapa-del-parque"
                element={<Navigate to="/#contacto" replace />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BookingProvider>
    </BrowserRouter>
  )
}
