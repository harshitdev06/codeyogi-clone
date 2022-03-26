import React from "react";
import AssignmentCard from "./AssignmentCard";

function Assignments() {
  return (<>
    <div className="pt-10">
      <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className="space-y-2">
          <AssignmentCard></AssignmentCard>
          <AssignmentCard></AssignmentCard>
          <AssignmentCard></AssignmentCard>
          <AssignmentCard></AssignmentCard>
          <AssignmentCard></AssignmentCard>
        </ul>
        </div>
      </div>
    </>  
  );
}

export default Assignments;
