const initialState = {
  seatListRaw: [
    {
      row: "",
      seatList: [
        { numberSeat: "1", price: 0 },
        { numberSeat: "2", price: 0 },
        { numberSeat: "3", price: 0 },
        { numberSeat: "4", price: 0 },
        { numberSeat: "5", price: 0 },
        { numberSeat: "6", price: 0 },
        { numberSeat: "7", price: 0 },
        { numberSeat: "8", price: 0 },
        { numberSeat: "9", price: 0 },
        { numberSeat: "10", price: 0 },
        { numberSeat: "11", price: 0 },
        { numberSeat: "12", price: 0 },
      ],
    },
    {
      row: "A",
      seatList: [
        { numberSeat: "A1", price: 75000, booked: false },
        { numberSeat: "A2", price: 75000, booked: false },
        { numberSeat: "A3", price: 75000, booked: false },
        { numberSeat: "A4", price: 75000, booked: false },
        { numberSeat: "A5", price: 75000, booked: false },
        { numberSeat: "A6", price: 75000, booked: false },
        { numberSeat: "A7", price: 75000, booked: false },
        { numberSeat: "A8", price: 75000, booked: false },
        { numberSeat: "A9", price: 75000, booked: false },
        { numberSeat: "A10", price: 75000, booked: false },
        { numberSeat: "A11", price: 0, booked: true },
        { numberSeat: "A12", price: 0, booked: true },
      ],
    },
    {
      row: "B",
      seatList: [
        { numberSeat: "B1", price: 75000, booked: false },
        { numberSeat: "B2", price: 75000, booked: false },
        { numberSeat: "B3", price: 75000, booked: false },
        { numberSeat: "B4", price: 75000, booked: false },
        { numberSeat: "B5", price: 75000, booked: false },
        { numberSeat: "B6", price: 75000, booked: false },
        { numberSeat: "B7", price: 75000, booked: false },
        { numberSeat: "B8", price: 75000, booked: false },
        { numberSeat: "B9", price: 75000, booked: false },
        { numberSeat: "B10", price: 75000, booked: false },
        { numberSeat: "B11", price: 75000, booked: false },
        { numberSeat: "B12", price: 75000, booked: false },
      ],
    },
    {
      row: "C",
      seatList: [
        { numberSeat: "C1", price: 75000, booked: false },
        { numberSeat: "C2", price: 75000, booked: false },
        { numberSeat: "C3", price: 75000, booked: false },
        { numberSeat: "C4", price: 75000, booked: false },
        { numberSeat: "C5", price: 75000, booked: false },
        { numberSeat: "C6", price: 75000, booked: false },
        { numberSeat: "C7", price: 75000, booked: false },
        { numberSeat: "C8", price: 75000, booked: false },
        { numberSeat: "C9", price: 75000, booked: false },
        { numberSeat: "C10", price: 75000, booked: false },
        { numberSeat: "C11", price: 75000, booked: false },
        { numberSeat: "C12", price: 75000, booked: false },
      ],
    },
    {
      row: "D",
      seatList: [
        { numberSeat: "D1", price: 75000, booked: false },
        { numberSeat: "D2", price: 75000, booked: false },
        { numberSeat: "D3", price: 75000, booked: false },
        { numberSeat: "D4", price: 75000, booked: false },
        { numberSeat: "D5", price: 75000, booked: false },
        { numberSeat: "D6", price: 75000, booked: false },
        { numberSeat: "D7", price: 75000, booked: false },
        { numberSeat: "D8", price: 75000, booked: false },
        { numberSeat: "D9", price: 75000, booked: false },
        { numberSeat: "D10", price: 75000, booked: false },
        { numberSeat: "D11", price: 75000, booked: false },
        { numberSeat: "D12", price: 75000, booked: false },
      ],
    },
    {
      row: "E",
      seatList: [
        { numberSeat: "E1", price: 75000, booked: false },
        { numberSeat: "E2", price: 75000, booked: false },
        { numberSeat: "E3", price: 75000, booked: false },
        { numberSeat: "E4", price: 75000, booked: false },
        { numberSeat: "E5", price: 75000, booked: false },
        { numberSeat: "E6", price: 75000, booked: false },
        { numberSeat: "E7", price: 75000, booked: false },
        { numberSeat: "E8", price: 75000, booked: false },
        { numberSeat: "E9", price: 75000, booked: false },
        { numberSeat: "E10", price: 75000, booked: false },
        { numberSeat: "E11", price: 75000, booked: false },
        { numberSeat: "E12", price: 75000, booked: false },
      ],
    },
    {
      row: "F",
      seatList: [
        { numberSeat: "F1", price: 75000, booked: false },
        { numberSeat: "F2", price: 75000, booked: false },
        { numberSeat: "F3", price: 75000, booked: false },
        { numberSeat: "F4", price: 75000, booked: false },
        { numberSeat: "F5", price: 75000, booked: false },
        { numberSeat: "F6", price: 75000, booked: false },
        { numberSeat: "F7", price: 75000, booked: false },
        { numberSeat: "F8", price: 75000, booked: false },
        { numberSeat: "F9", price: 75000, booked: false },
        { numberSeat: "F10", price: 75000, booked: false },
        { numberSeat: "F11", price: 75000, booked: false },
        { numberSeat: "F12", price: 75000, booked: false },
      ],
    },
    {
      row: "G",
      seatList: [
        { numberSeat: "G1", price: 75000, booked: false },
        { numberSeat: "G2", price: 75000, booked: false },
        { numberSeat: "G3", price: 75000, booked: false },
        { numberSeat: "G4", price: 75000, booked: false },
        { numberSeat: "G5", price: 75000, booked: false },
        { numberSeat: "G6", price: 75000, booked: false },
        { numberSeat: "G7", price: 75000, booked: false },
        { numberSeat: "G8", price: 75000, booked: false },
        { numberSeat: "G9", price: 75000, booked: false },
        { numberSeat: "G10", price: 75000, booked: false },
        { numberSeat: "G11", price: 75000, booked: false },
        { numberSeat: "G12", price: 75000, booked: false },
      ],
    },
    {
      row: "H",
      seatList: [
        { numberSeat: "H1", price: 75000, booked: false },
        { numberSeat: "H2", price: 75000, booked: false },
        { numberSeat: "H3", price: 75000, booked: false },
        { numberSeat: "H4", price: 75000, booked: false },
        { numberSeat: "H5", price: 75000, booked: false },
        { numberSeat: "H6", price: 75000, booked: false },
        { numberSeat: "H7", price: 75000, booked: false },
        { numberSeat: "H8", price: 75000, booked: false },
        { numberSeat: "H9", price: 75000, booked: false },
        { numberSeat: "H10", price: 75000, booked: false },
        { numberSeat: "H11", price: 75000, booked: false },
        { numberSeat: "H12", price: 75000, booked: false },
      ],
    },
    {
      row: "I",
      seatList: [
        { numberSeat: "I1", price: 75000, booked: false },
        { numberSeat: "I2", price: 75000, booked: false },
        { numberSeat: "I3", price: 75000, booked: false },
        { numberSeat: "I4", price: 75000, booked: false },
        { numberSeat: "I5", price: 75000, booked: false },
        { numberSeat: "I6", price: 75000, booked: false },
        { numberSeat: "I7", price: 75000, booked: false },
        { numberSeat: "I8", price: 75000, booked: false },
        { numberSeat: "I9", price: 75000, booked: false },
        { numberSeat: "I10", price: 75000, booked: false },
        { numberSeat: "I11", price: 75000, booked: false },
        { numberSeat: "I12", price: 75000, booked: false },
      ],
    },
    {
      row: "J",
      seatList: [
        { numberSeat: "J1", price: 75000, booked: false },
        { numberSeat: "J2", price: 75000, booked: false },
        { numberSeat: "J3", price: 75000, booked: false },
        { numberSeat: "J4", price: 75000, booked: false },
        { numberSeat: "J5", price: 75000, booked: false },
        { numberSeat: "J6", price: 75000, booked: false },
        { numberSeat: "J7", price: 75000, booked: false },
        { numberSeat: "J8", price: 75000, booked: false },
        { numberSeat: "J9", price: 75000, booked: false },
        { numberSeat: "J10", price: 75000, booked: false },
        { numberSeat: "J11", price: 75000, booked: false },
        { numberSeat: "J12", price: 75000, booked: false },
      ],
    },
  ],
  bookedSeatList: [],
};

export const bookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "booked": {
      const newBookedList = [...state.bookedSeatList];
      const index = newBookedList.findIndex((item) => {
        return item.numberSeat === action.value.numberSeat;
      });
      if (index === -1) {
        newBookedList.push(action.value);
        return {
          ...state,
          bookedSeatList: newBookedList,
        };
      } else {
        newBookedList.splice(index, 1);
        return {
          ...state,
          bookedSeatList: newBookedList,
        };
      }
      /*
      index để kiểm tra phần tử đó đã tồn tại trong mảng chưa, nếu rồi thì xóa, chưa
      thì push
      */
    }

    default:
      return state;
  }
};

/*
[]
tìm thấy [1]
duyêt
nếu thấy index cho mảng đó 
*/
