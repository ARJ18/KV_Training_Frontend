import { apiWithTags } from "../api/employeeApi";

const getApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "/",
      providesTags:['EMPLOYEE_LIST']
    }),
  }),
});
export const { useGetEmployeesQuery } = getApi;
