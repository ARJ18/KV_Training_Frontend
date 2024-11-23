import { apiWithTags } from "../api/employeeApi";

const getByIdApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getById: builder.query({
      query: (id) => `/${id}`,
      providesTags:['EMPLOYEE_LIST']
    }),
  }),
});
export const { useGetByIdQuery } = getByIdApi;
