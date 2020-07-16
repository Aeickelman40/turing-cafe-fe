import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationCard from "./ReservationCard";

describe("ReservationCard", () => {
    
  it("should render the reservation data", () => {
    const { getByText } = render(
      <ReservationCard name={"Alex"} date={"7/16"} time={"8:30"} number={5} />
    );
    const name = getByText("Alex");
    const date = getByText("7/16");
    const time = getByText("8:30 pm");
    const guests = getByText("Number of guests: 5");
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
  });
});