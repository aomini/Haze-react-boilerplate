import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { developersApiSlice } from "../features/Developers/developers-api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [developersApiSlice.reducerPath]: developersApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(developersApiSlice.middleware);
  },
});
