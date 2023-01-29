import { createSlice } from "@reduxjs/toolkit";
import { Term } from "../constants/interfaces";
import { StatusTypes } from "../constants/misc";
import { efoApi } from "../services/fetchEfo";
import { mapTermData } from "../utils/dataMapper";

export interface EfoState {
  data: Term[];
  page: number;
  total_pages: number;
  status: StatusTypes;
}

const initialState: EfoState = {
  data: [],
  page: 0,
  total_pages: 0,
  status: StatusTypes.IDLE,
};

export const efoSlice = createSlice({
  name: "efo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      efoApi.endpoints.getEfo.matchPending,
      (state, action) => {
        state.status = StatusTypes.LOADING;
        state.page = action?.meta?.arg?.originalArgs?.page || state.page;
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
        const { page } = action.payload;
        const { terms } = action.payload?._embedded || [];

        const resultData = mapTermData(terms);

        state.data = resultData;
        state.status = StatusTypes.SUCCESS;
        state.total_pages = page.totalPages;
      }
    );
  },
});

export default efoSlice.reducer;
