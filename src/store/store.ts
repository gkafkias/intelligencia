import { configureStore } from "@reduxjs/toolkit";
import { efoApi } from "../services/fetchEfo";
import efoSlice from "../slices/efoSlice";

export const store = configureStore({
  reducer: {
    efoSlice: efoSlice,
    [efoApi.reducerPath]: efoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(efoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
