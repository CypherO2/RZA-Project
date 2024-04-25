import { useEffect } from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { COUNTRY_DROPDOWN_OPTIONS } from "../constants/Countries";
import BookingForm from "../components/BookingForm";

function List() {
  return (
    <>
      {COUNTRY_DROPDOWN_OPTIONS.map((item, index) => {
        return <option value={index}>{item}</option>;
      })}
    </>
  );
}

/* The `export default function Booking() {` statement is exporting a default function component named
`Booking`. This component represents a booking form for a zoo, containing fields for the user's full
name, contact details, address, and country selection dropdown. The component also sets the document
title to "Riget Zoo | Booking Form" using the `useEffect` hook. */
export default function Booking() {
  useEffect(() => {
    document.title = "Riget Zoo | Booking Form";
  });
  return (
    <>
      <BookingForm />
    </>
  );
}
