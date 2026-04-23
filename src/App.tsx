import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { WhatsAppFab } from './components/WhatsAppFab'
import { BookingProvider } from './context/BookingProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <WhatsAppFab />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  )
}
