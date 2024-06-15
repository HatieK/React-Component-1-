import React from "react";
import { useSelector } from "react-redux";

const TableInfo = () => {
  const { bookedSeatList } = useSelector((state) => state.bookingTicket);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Số ghế</td>
          <td>Gía</td>
          <td>Hủy</td>
        </tr>
      </thead>
      <tbody>
        {bookedSeatList.map((ticket, item) => {
          return (
            <tr>
              <td>{ticket.numberSeat}</td>
              <td>{ticket.price}</td>
              <td>
                <button className="btn btn-danger">X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableInfo;
