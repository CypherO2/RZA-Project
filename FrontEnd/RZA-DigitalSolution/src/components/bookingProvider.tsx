import { ReactNode, createContext } from "react";
import useBooking, { BookingContextType } from "../hooks/useBooking";


/* This line of code is creating a context object named `BookingContext` using the `createContext`
function from React. The `createContext` function accepts a generic type parameter
`<BookingContextType | null>` to define the shape of the context value that will be provided. In
this case, the context value can either be of type `BookingContextType` or `null`. */
export const BookingContext = createContext<BookingContextType | null>(null);


/* The `BookingProvider` function is a React component that serves as a provider for the
`BookingContext`. It takes in a `children` prop of type `ReactNode`, which represents the child
components that will be wrapped by this provider. */
function BookingProvider({ children }: { children: ReactNode }) {
  const bookingContext = useBooking();

  return (
    // details how the Provider should wrap around the App
    <BookingContext.Provider value={bookingContext}>
      {children}
    </BookingContext.Provider>
  );
}
//exporting of Account Provider
export default BookingProvider;
