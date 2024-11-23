import { apiWithTags } from "../api/employeeApi";

const createApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});
export const { useCreateMutation } = createApi;
