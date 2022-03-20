import { configureStore } from "@reduxjs/toolkit";
import { membersApi } from "api/membersApi";

const store = configureStore({
  reducer: {
    [membersApi.reducerPath]: membersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(membersApi.middleware),
});

export default store;
