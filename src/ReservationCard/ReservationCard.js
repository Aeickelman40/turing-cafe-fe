import React from "react";

const ReservationCard = ({ id, name, date, time, number}) => {
  return (
    <div className="reservation-card">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
    </div>
  );
};

export default ReservationCard;
