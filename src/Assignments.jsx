import React from "react";
import AssignmentCard from "./AssignmentCard";
import Loader from "./Loader";
import { getAssignmentList, toDecachedData } from "./Api";

function Assignments() {
  const [spinner, setSpinner] = React.useState(true);
  const cashedData = toDecachedData("assignmentList") || [];
  const [assignment, setAssignment] = React.useState(cashedData);

  React.useEffect(() => {
    const promise = getAssignmentList();
    promise.then((assignmentList) => {
      setAssignment(assignmentList);
      setSpinner(false);
    });
  }, []);
  return (
    <div>
      <div className="pt-3 sm:pt-10">
        {spinner && <Loader />}
        <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
      </div>
      <div className="fixed  top-10 right-50"></div>
      <div className="  px-4 py-4 mt-2 bg-gray-50 flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
          <ul className={" space-y-2 "}>
            {!spinner}
            {assignment.map((t) => {
              return <AssignmentCard key={t.id} assignment={t} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
