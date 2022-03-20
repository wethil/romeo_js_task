import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import createUrlParamsString from "utils/createUrlParamsString";
import arrayToMap from "utils/arrayToMap";
const defaultArgs = {
  sorting: "DISTANCE",
  cursor: null,
};

export const membersApi = createApi({
  reducerPath: "membersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    searchMembersByFilter: builder.query({
      // eslint-disable-next-line no-unused-vars
      async queryFn(args = defaultArgs, queryApi, extraOptions, fetchWithBQ) {
        const { cursor, sorting } = args;
        const query = {
          sorting,
          ...(cursor ? { cursor } : {}),
        };
        const userBaseList = await fetchWithBQ(
          createUrlParamsString(query, "search")
        );
        if (userBaseList.error) throw userBaseList.error;

        let userInfoRequestByIdURLMap = "";
        const { items } = userBaseList?.data || [];
        const userListMap = arrayToMap(items);
        Object.keys(userListMap).forEach((u, index) => {
          userInfoRequestByIdURLMap += `ids=${u}`;
          if (index - 1 !== Object.keys(userListMap).length) {
            userInfoRequestByIdURLMap += "&";
          }
        });

        const userInfos = await fetchWithBQ(
          `profiles?${userInfoRequestByIdURLMap}`
        );

        if (userInfos?.data) {
          const mappedUserInfos = [];
          userInfos.data.forEach((user) => {
            mappedUserInfos.push({
              ...user,
              ...userListMap[user.id],
            });
          });
          return {
            data: {
              ...userBaseList.data,
              items: mappedUserInfos,
            },
          };
        }
        return { error: userInfos.error, data: { items: [] } };
      },
    }),
  }),
});

export const { useSearchMembersByFilterQuery } = membersApi;
