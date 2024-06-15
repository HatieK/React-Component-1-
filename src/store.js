import { configureStore } from "@reduxjs/toolkit";
import { bookingTicketReducer } from "./reducer/bookingTicketReducer";

const store = configureStore({
  reducer: {
    bookingTicket: bookingTicketReducer,
  },
});

export default store;
