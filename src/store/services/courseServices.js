import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const courseServices = createApi({
    reducerPath: "course",
  tagTypes: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/course/",
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

