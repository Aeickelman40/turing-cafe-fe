import React from "react";

const ReservationCard = ({ id, name, date, time, number}) => {
  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Guests: {number}</p>
    </div>
  );
};

export default ReservationCard;
