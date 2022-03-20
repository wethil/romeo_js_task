import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import createUrlParamsString from "utils/createUrlParamsString";
import arrayToMap from "utils/arrayToMap";
import { DISTANCE } from "constants/constants";

const defaultArgs = {
  sorting: DISTANCE,
  cursor: null,
};

// Api for members is created here and integrated with rtk-query
export const membersApi = createApi({
  reducerPath: "membersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    searchMembersByFilter: builder.query({
      // eslint-disable-next-line no-unused-vars
      // Used queryFn here because Two requests' response should be merged before rendering
      async queryFn(args = defaultArgs, queryApi, extraOptions, fetchWithBQ) {
        const { cursor, sorting } = args;
        const query = {
          sorting,
          ...(cursor ? { cursor } : {}),
        };
        /* Fetch Search API first to get members with Ids   */
        const userBaseList = await fetchWithBQ(
          createUrlParamsString(query, "search")
        );
        if (userBaseList.error) throw userBaseList.error;

        let userInfoRequestByIdURLMap = "";
        const { items } = userBaseList?.data || [];

        /* To prevent a lot of iteration on merging the responses, an user map oject created  */
        const userListMap = arrayToMap(items);

        /* Preparing for fetch profiles by ids */
        Object.keys(userListMap).forEach((u, index) => {
          userInfoRequestByIdURLMap += `ids=${u}`;
          if (index - 1 !== Object.keys(userListMap).length) {
            userInfoRequestByIdURLMap += "&";
          }
        });

        const userInfos = await fetchWithBQ(
          `profiles?${userInfoRequestByIdURLMap}`
        );

        /* Now we are merging 'Search API' and 'Profile API' responses */
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
