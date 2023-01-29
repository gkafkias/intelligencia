import { configureStore } from "@reduxjs/toolkit";
import { efoApi } from "../services/fetchEfo";
import testSlice from "../slices/testSlice";

export const store = configureStore({
  reducer: {
    test: testSlice,
    [efoApi.reducerPath]: efoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(efoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
