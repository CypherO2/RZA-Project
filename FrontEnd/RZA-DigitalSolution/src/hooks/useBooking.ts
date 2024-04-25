/* Setting up a TypeScript file that defines an interface
`BookingType` and an interface `BookingContextType`. It also imports the `useState` hook from React. */
import { useState } from "react";

interface BookingType {
  reservationName: String;
  checkin: String;
  checkout: String;
}

export interface BookingContextType {
  booking: BookingType;
  setBooking: (booking: BookingType | null) => void;
}
const BOOKING_KEY = "booking-details";

/* The `useBooking` function is a custom React hook that is used to manage booking details in a React
component. */
function useBooking() {
  const bookingString = sessionStorage.getItem(BOOKING_KEY);
  const bookingObject = bookingString ? JSON.parse(bookingString) : null;

  const [booking, setBooking] = useState(bookingObject);

  const saveBooking = (newBooking: BookingType | null) => {
    if (newBooking) {
      sessionStorage.setItem(BOOKING_KEY, JSON.stringify(newBooking));
    } else {
      sessionStorage.removeItem(BOOKING_KEY);
    }
    setBooking(newBooking);
  };
  return { booking, setBooking: saveBooking };
}
// exporting Function
export default useBooking;
