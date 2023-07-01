import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c78d42fe3cmsh97f1cc518130ee2p1a662djsncccc0a7a8017",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// fetch("https://shazam.p.rapidapi.com/charts/track", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c78d42fe3cmsh97f1cc518130ee2p1a662djsncccc0a7a8017"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/track", // Return the endpoint URL
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
