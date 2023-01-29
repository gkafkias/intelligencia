import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../constants/config";

export const efoApi = createApi({
  reducerPath: "efoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.efoApiBaseUrl,
  }),
  endpoints: (builder) => ({
    getEfo: builder.query({
      query: (page) => `?page=${page}&size=${config.efoTermsPerPage}`,
    }),
  }),
});

export const { useGetEfoQuery, useLazyGetEfoQuery } = efoApi;
