import { configureStore } from "@reduxjs/toolkit";
import courseServices from "./services/courseServices";



const store = configureStore({
  reducer: {
    [courseServices.reducerPath]: courseServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([courseServices.middleware]),
});

export default store;
