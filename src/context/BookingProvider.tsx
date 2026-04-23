import { useMemo, useState, type ReactNode } from 'react'
import { BookingContext } from './booking-context'

export function BookingProvider({ children }: { children: ReactNode }) {
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDateTime, setPickupDateTime] = useState('')
  const [dropoffDateTime, setDropoffDateTime] = useState('')
  const [carType, setCarType] = useState('')

  const value = useMemo(
    () => ({
      pickupLocation,
      pickupDateTime,
      dropoffDateTime,
      carType,
      setPickupLocation,
      setPickupDateTime,
      setDropoffDateTime,
      setCarType,
    }),
    [pickupLocation, pickupDateTime, dropoffDateTime, carType],
  )

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
