import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const courseServices = createApi({
    reducerPath: "course",
  tagTypes: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easy-teal-bear-boot.cyclic.app/api/course/",
    prepareHeaders: (headers, { getState }) => {
        headers.set('Access-Control-Allow-Origin', '*')
        return headers;
      },
  }),
    endpoints:(builder) => {
        return {
            getCourses: builder.query({
                query:() => {
                    return {
                        url:"get-all",
                        method:"GET",
                        
                    }
                },
                providesTags: ["courses"],
            }),
        }
    }
})
export const {useGetCoursesQuery} = courseServices

export default courseServices

