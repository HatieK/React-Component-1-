import React from "react";
import "./bookingTicket.css";
import Screen from "./Screen";
import InfoBookingSeat from "./InfoBookingSeat";
import SeatList from "./SeatList";

const BookingTicket = () => {
  return (
    <div className="bookingMovie ">
      <h1>Booking Ticket</h1>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <Screen />
            <SeatList />
          </div>
          <div className="col-5">
            <InfoBookingSeat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
