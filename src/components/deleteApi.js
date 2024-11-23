import { apiWithTags } from "../api/employeeApi";

const deleteApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    delete: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});
export const { useDeleteMutation } = deleteApi;
