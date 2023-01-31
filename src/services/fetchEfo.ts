import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../constants/config";
import { mapTermData, getLabelFrequency } from "../utils/dataMapper";

export const efoApi = createApi({
  reducerPath: "efoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.efoApiBaseUrl,
  }),
  endpoints: (builder) => ({
    getEfo: builder.query({
      query: ({ page, size }) => `?page=${page - 1}&size=${size}`,
      transformResponse: (response) => {
        // @ts-ignore
        const { page, _embedded } = response;
        const { terms } = _embedded || [];
        const resultData = mapTermData(terms);
        const labelFrequency = getLabelFrequency(terms);

        return {
          data: resultData,
          labelFrequency,
          totalElements: page.totalElements,
          totalPages: page.totalPages,
        };
      },
    }),
  }),
});

export const { useGetEfoQuery, useLazyGetEfoQuery } = efoApi;
