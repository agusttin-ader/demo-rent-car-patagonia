import { createContext } from 'react'

export type BookingContextValue = {
  pickupLocation: string
  pickupDateTime: string
  dropoffDateTime: string
  carType: string
  setPickupLocation: (v: string) => void
  setPickupDateTime: (v: string) => void
  setDropoffDateTime: (v: string) => void
  setCarType: (v: string) => void
}

export const BookingContext = createContext<BookingContextValue | null>(null)
