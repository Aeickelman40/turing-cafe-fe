import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";
// import { MemoryRouter } from 'react-router-dom'

describe("ReservationForm", () => {

  it("should render reservation form", () => {
    // Setup: render the form

    const { getByPlaceholderText, getByRole } = render(<ReservationForm />);

    // Execution: grab the elements we are looking for

    const nameInput = getByPlaceholderText('Name')
    const reservationBtn = getByRole('button')

    // Assertion: Make sure those elements are appearing in the DOM

    expect(nameInput).toBeInTheDocument();
    expect(reservationBtn).toBeInTheDocument();
  });

  it("should know what the input value is", () => {
    // Setup: render the form
    const { getByPlaceholderText } = render(<ReservationForm />);

    // Execution: grab elements we are looking for, fire events
    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const guestInput = getByPlaceholderText('Number of guests')
    fireEvent.change(nameInput, { target: { value: "Alex" }});
    fireEvent.change(dateInput, { target: { value: "7/17" }});
    fireEvent.change(timeInput, {target: { value: "6:30" }});
    fireEvent.change(guestInput, {target: { value: 8 }});

    // Assertion: expect those inputs to be viewable
    expect(nameInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(guestInput).toBeInTheDocument()
  });
});