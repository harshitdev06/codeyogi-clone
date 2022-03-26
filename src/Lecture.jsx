import React from "react";
import { Outlet } from "react-router-dom";
import LectureCard from "./LectureCard";
import lectureData from "./MockData/lecture";
function Lecture() {
  return (
  <>
    <div className="pt-10">
      <h1 className="mb-5 text-xl font-semibold">Lecture list </h1>
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className="space-y-2">
          {
            lectureData.map((t)=>{return (
             <LectureCard 
             lectureNumber={t.id}
             date={t.publishDate}
             duration={t.duration}
             lectureLink={t.lectureLink}
             />)})
          }
        </ul>
        </div>
      </div>
   </>  
);
}

export default Lecture;
