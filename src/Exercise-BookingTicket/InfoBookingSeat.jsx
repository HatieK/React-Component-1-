import React from "react";
import TableInfo from "./TableInfo";

const InfoBookingSeat = () => {
  return (
    <div>
      <h3 className="text-white text-center" style={{ margin: "0 auto" }}>
        Thông Tin Ghế Đang Chọn
      </h3>
      <div className="info">
        <div className="d-flex gap-3" style={{ marginBottom: 10 }}>
          <div className="bookedSeat"></div> <span>Ghế Đã Đặt</span>
        </div>
        <div className="d-flex gap-3" style={{ marginBottom: 10 }}>
          <div className="bookingSeat"></div> <span>Ghế Đang Chọn</span>
        </div>
        <div className="d-flex gap-3" style={{ marginBottom: 10 }}>
          <div className="numberSeat" style={{ marginLeft: 0 }}></div>{" "}
          <span>Ghế Chưa Chọn</span>
        </div>
      </div>
      <TableInfo />
    </div>
  );
};

export default InfoBookingSeat;
