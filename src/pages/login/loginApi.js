import { apiWithTags } from "../../api/employeeApi";

const loginApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useLoginMutation } = loginApi;
