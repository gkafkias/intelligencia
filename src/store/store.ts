import { configureStore } from "@reduxjs/toolkit";
import { efoApi } from "../services/fetchEfo";
import efoSlice from "../slices/efoSlice";
import testSlice from "../slices/testSlice";

export const store = configureStore({
  reducer: {
    test: testSlice,
    efoSlice: efoSlice,
    [efoApi.reducerPath]: efoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(efoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
