import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("should let user add a new reservation on Make Reservation click", () => {
    // Setup: render the app
    const { getByText, getByPlaceholderText } = render(<App />);

    // Execution: grab elements we want to find on the dom, fire events for changing inputs and submit button click
    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const guestInput = getByPlaceholderText('Number of guests')
    const submitReservationBtn = getByText('Make Reservation')
    fireEvent.change(nameInput, { target: { value: "Alex" }});
    fireEvent.change(dateInput, { target: { value: "7/17" }});
    fireEvent.change(timeInput, {target: { value: "6:30" }});
    fireEvent.change(guestInput, {target: { value: 8 }});
    fireEvent.click(submitReservationBtn);

    // Assertion: Check to make sure newly submitted reservation is appearing on the dom
    expect(getByText("Alex")).toBeInTheDocument();
    expect(getByText("7/17")).toBeInTheDocument();
    expect(getByText("6:30 pm")).toBeInTheDocument();
    expect(getByText("Number of guests: 8")).toBeInTheDocument();
  });
});

