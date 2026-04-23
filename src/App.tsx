import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { WhatsAppFab } from './components/WhatsAppFab'
import { BookingProvider } from './context/BookingProvider'
import { Footer } from './sections/Footer'
import AcercaDe from './pages/AcercaDe'
import Condiciones from './pages/Condiciones'
import Faq from './pages/Faq'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PoliticasPrivacidad from './pages/PoliticasPrivacidad'
import PromocionesTemporada from './pages/PromocionesTemporada'
import ReservarWhatsApp from './pages/ReservarWhatsApp'

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
      </BookingProvider>
    </BrowserRouter>
  )
}
