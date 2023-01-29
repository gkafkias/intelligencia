import { createSlice } from "@reduxjs/toolkit";
import { config } from "../constants/config";
import { StatusTypes } from "../constants/misc";
import { efoApi } from "../services/fetchEfo";

export interface EfoState {
  page: number;
  pageSize: number;
  status: StatusTypes;
}

const initialState: EfoState = {
  page: config.initialPage,
  pageSize: config.efoTermsPerPage,
  status: StatusTypes.IDLE,
};

export const efoSlice = createSlice({
  name: "efo",
  initialState,
  reducers: {
    setPageData: (state, action) => {
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      efoApi.endpoints.getEfo.matchPending,
      (state, action) => {
        state.status = StatusTypes.LOADING;
      }
    );
    builder.addMatcher(
      efoApi.endpoints.getEfo.matchRejected,
      (state, action) => {
        state.status = StatusTypes.ERROR;
      }
    );
    builder.addMatcher(
      efoApi.endpoints.getEfo.matchFulfilled,
      (state, action) => {
        state.status = StatusTypes.SUCCESS;
      }
    );
  },
});

export const { setPageData } = efoSlice.actions;

export default efoSlice.reducer;
