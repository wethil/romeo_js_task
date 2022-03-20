import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const membersApi = createApi({
  reducerPath: "membersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    searchMembersByFilter: builder.query({
      query: (sorting = "DISTANCE", cursor = null) => {
        const query = new URLSearchParams({
          sorting,
          ...(cursor ? { cursor } : {}),
        }).toString();
        return `search?${query.toString()}`;
      },
    }),
  }),
});

export const { useSearchMembersByFilterQuery } = membersApi;
