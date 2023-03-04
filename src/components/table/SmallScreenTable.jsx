import React from "react";

const SmallScreenTable = ({ courses }) => {
  return (
    <div className="bg-white w-full gap-8 flex flex-col items-center   rounded-lg ">
      {courses?.map((course) => (
        <div key={course.id} className="flex w-full">
          <div
            className="flex w-4/12 
                  border-r flex-col rounded-tl-lg rounded-bl-lg  bg-gray-50"
          >
            <div className="p-4  border-b">
              <p className="capitalize flex   justify-center font-medium text-gray-400">
                course 
              </p>
            </div>
            <div className="p-4  border-b">
              <p className="capitalize flex   justify-center font-medium text-gray-400">
                start date
              </p>
            </div>
            <div className="p-4  border-b">
              <p className="capitalize flex  justify-center font-medium text-gray-400">
                lessons 
              </p>
            </div>
            <div className="p-4 ">
              <p className="capitalize flex  justify-center font-medium text-gray-400">
                duration
              </p>
            </div>
          </div>
          <div className="flex flex-col  w-8/12 rounded-tr-lg rounded-br-lg bg-gray-50">
            <div className="p-4 border-b">
              <p className="capitalize  flex justify-center font-medium text-gray-400">
                {
                    course.courseName.concat(` (${course.lessons})`)
                }
              </p>
            </div>
            <div className="p-4 border-b">
              <p className="capitalize  flex justify-center font-medium text-gray-400">
                {course.startDate}
              </p>
            </div>
            <div className="p-4 border-b">
              <p className="capitalize  flex justify-center font-medium text-gray-400">
                {course.lessonCompleted}
              </p>
            </div>
            <div className="p-4 ">
              <p className="capitalize   flex justify-center  font-medium text-gray-400">
                {course.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallScreenTable;
