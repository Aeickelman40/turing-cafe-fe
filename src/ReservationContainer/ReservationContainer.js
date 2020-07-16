import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <ReservationCard
        {...reservation} key={reservation.id} />
    );
  });
  return <div className="reservations">{reservationCards}</div>;
};

export default ReservationContainer;