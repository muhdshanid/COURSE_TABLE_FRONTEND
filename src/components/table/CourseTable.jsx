import React from "react";
import {FaLayerGroup} from 'react-icons/fa'
import {HiComputerDesktop} from 'react-icons/hi2'
import {BiCode} from 'react-icons/bi'
import {BsFillCalendar2RangeFill} from 'react-icons/bs'
import {MdWidgets} from 'react-icons/md';
const CourseTable = ({ courses }) => {
  return (
    <table className=" w-full">
      <thead className="w-full">
        <tr className="flex w-full    justify-between items-center">
          <th className="capitalize flex w-5/12 font-medium text-gray-400">course name</th>
          <th className="capitalize flex w-2/12 font-medium text-gray-400">start date</th>
          <th className="capitalize flex justify-center w-3/12 font-medium text-gray-400">
            lesson completed
          </th>
          <th className="capitalize flex justify-center  w-2/12 font-medium text-gray-400">duration</th>
        </tr>
      </thead>
      <tbody>
        {courses?.map((course) => (
          <tr key={course.id} className="flex gap-6 w-full items-center justify-between">
            <td className="py-4 text-sm w-5/12 text-gray-700">
              <div className="flex items-center gap-4">
                {
                    course.id === 1 ? <div className="bg-purple-100 rounded-lg p-4">
                    <FaLayerGroup color="purple" size={20}/>
                </div>
                : course.id === 2 ?
                <div className="bg-blue-100 rounded-lg p-4">
                    <BiCode color="blue" size={20}/>
                </div>
                : course.id === 3 ?
                <div className="bg-orange-100 rounded-lg p-4">
                <MdWidgets color="orange" size={20}/>
            </div>
            : course.id === 4 ? <div className="bg-green-100 rounded-lg p-4">
            <HiComputerDesktop color="green" size={20}/>
        </div>
            : <div className="bg-red-100 rounded-lg p-4">
            <BsFillCalendar2RangeFill color="red" size={20}/>
            </div>
                }
              <div className="flex justify-center flex-col">
                <h6 className="font-semibold  text-lg text-black/70">
                  {course?.courseName}
                </h6>
                <p className="font-normal text-sm text-black/70 capitalize">
                  {course.lessons} lessons
                </p>
              </div>
              </div>
            </td>
            <td className="w-3/12">
              <div>
                <p className="font-semibold text-lg text-black/70">{course.startDate}</p>
              </div>
            </td>
            <td className="w-2/12">
              <div>
                <p className="font-semibold text-lg text-black/70">{course.lessonCompleted}</p>
              </div>
            </td>
            <td className="w-2/12">
              <div>
                <p className="font-semibold text-lg text-black/70">{course.duration}</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
