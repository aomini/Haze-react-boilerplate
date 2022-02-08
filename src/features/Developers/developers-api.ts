import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Developer {
  id: number;
  name: string;
  position: string;
}

export const developersApiSlice = createApi({
  reducerPath: "developers-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
    // here prepareHeaders is optional
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Developer"],
  endpoints(builder) {
    return {
      fetchDevelopers: builder.query<Developer[], void>({
        query: () => "/developers",
        providesTags: (result) =>
          result
            ? [
                ...result.map(
                  ({ id }) =>
                    ({
                      type: "Developer",
                      id,
                    } as const)
                ),
                { type: "Developer", id: "List" },
              ]
            : [{ type: "Developer", id: "List" }],
      }),
      fetchDeveloper: builder.query<Developer, number | void>({
        query: (id) => `/developers/${id}`,
        providesTags: (result, error, id) =>
          id ? [{ type: "Developer", id }] : [],
      }),
      addDevelopers: builder.mutation<Developer, Developer>({
        query: (body) => ({
          url: "/developers",
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: "Developer", id: "List" }],
        // transformResponse: (response: { data: Developer }) => {
        //   console.log(response);
        //   return response;
        // },
      }),
      updateDeveloper: builder.mutation<Developer, Developer>({
        query: ({ id, ...body }) => ({
          url: `/developers/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: (result, error, { id }) => {
          return [{ type: "Developer", id }];
        },
      }),
    };
  },
});
export const {
  useFetchDevelopersQuery,
  useFetchDeveloperQuery,
  useAddDevelopersMutation,
  useUpdateDeveloperMutation,
} = developersApiSlice;
