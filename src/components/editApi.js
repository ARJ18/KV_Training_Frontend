import { apiWithTags } from "../api/employeeApi";

const editApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    edit: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});
export const { useEditMutation} = editApi;
