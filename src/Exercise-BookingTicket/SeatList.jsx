import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SeatList = () => {
  const dispatch = useDispatch();
  const { seatListRaw, bookedSeatList } = useSelector(
    (state) => state.bookingTicket
  );
  const handleClickBooking = (value) => {
    dispatch({ type: "booked", value });
  };

  let ticket;

  for (let i = 0; i < bookedSeatList.length; i++) {
    ticket = bookedSeatList[i];
  }

  return (
    <div>
      {seatListRaw.map((item, index) => {
        return (
          <div className="d-flex" key={index}>
            <div className="rowNumber">{item.row}</div>

            {item.seatList.map((item, index) => {
              if (item.numberSeat === ticket?.numberSeat) {
                return (
                  <div className="bookingSeat" key={item.numberSeat}>
                    {item.numberSeat}
                  </div>
                );
              }
              if (item.booked === true) {
                return <div className="bookedSeat">{item.numberSeat}</div>;
              } else if (!item.hasOwnProperty("booked")) {
                return <div className="rowNumber">{item.numberSeat}</div>;
              } else {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleClickBooking(item);
                    }}
                    className="numberSeat"
                  >
                    {item.numberSeat}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatList;
