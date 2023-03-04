import React, { useEffect, useState } from 'react'
import { useGetCoursesQuery } from '../../store/services/courseServices'
import Loading from '../loading/Loading'
import CourseTable from './CourseTable'
import SmallScreenTable from './SmallScreenTable'

const Table = () => {
  const {data,isFetching} = useGetCoursesQuery()
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    if(isFetching === false){
      setCourses(data)
    }
  },[isFetching])
  return (
    <div className='bg-white min-h-full w-12/12 rounded-lg p-4 flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl capitalize text-black'>my courses</h1>
        <p className='font-semibold text-lg capitalize text-indigo-400'>view all</p>
      </div> 
      {
        isFetching === false ?
        <>
        <div className='w-full hidden sm:block'>
        <CourseTable courses={courses}/>
      </div>
      <div className='w-full sm:hidden '>
        <SmallScreenTable courses={courses}/>
      </div>
        </>
      : <div className='w-full min-h-screen flex items-center justify-center'>
        <Loading/>
      </div>
      }
    </div>
  )
}

export default Table