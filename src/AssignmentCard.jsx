import React from "react";
import { Link } from "react-router-dom";
import SubmmissionCard from "./SubmmistionCard";
import {DateTime} from "luxon"
 
function AssignmentCard({ assignment }) {
  console.log(assignment);
  const [reSubmissionPopUp, setReSubmissionPopUp] = React.useState(false);

  const toggleReSubmisionPopUp = () => {
    setReSubmissionPopUp(!reSubmissionPopUp);
  };
  const submittedLink = assignment.submissions.length
    ? assignment.submissions[0].submission_link
    : null;

  const submitted = (
    <h1 className=" py-2 font-medium text-green-600">Submitted</h1>
  );
  const notSubmitted = (
    <h1 className=" py-2 font-medium text-red-600">Not Submitted</h1>
  );

  return (
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
      <div>
        <Link to={`${assignment.id}/assignmentdetail`}>
          <div className="p-3">
            <div className="flex-flex-col sm:flex sm:flex-row items-start">
              <h1 className="flex font-medium text-gray-900">
                #{assignment.id}
                <span className="ml-2">{assignment.title}</span>
              </h1>
              <span className="ml-2 text-gray-500 ">
                (
                {DateTime.fromISO(assignment.created_at).toFormat(
                  `ccc LLL dd y`
                )}
                )
              </span>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-between sm:items-center flex flex-col ">
              <h1 className="text-red-500 mt-2 ">
                Due Date :{" "}
                {DateTime.fromISO(assignment.due_date).toFormat(`ccc LLL dd y`)}
              </h1>
              <div className=" sm:my-0 my-5">
                {assignment.submissions.length ? submitted : notSubmitted}
              </div>
            </div>
          </div>
        </Link>
        {assignment.submissions.length ? (
          <div className="flex ">
            <div className=" flex flex-1">
              <button
                onClick={toggleReSubmisionPopUp}
                className=" text-green-600 hover:text-green-700 font-semibold text-medium h-full w-full py-4 flex justify-center items-center ">
                <img
                  className="mr-2"
                  src="https://img.icons8.com/windows/32/26e07f/--checkmark-yes.png"
                />
                Re-Submit
              </button>
            </div>
            <div className=" flex flex-1  border-l">
              <a
                target="_blank"
                href={submittedLink}
                className="h-full w-full underline text-blue-600 hover:text-blue-700 font-semibold text-medium py-4 flex justify-center items-center">
                <img
                  className="mr-2"
                  src="https://img.icons8.com/material-rounded/24/4a90e2/external-link.png"
                />
                See your Submission
              </a>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center ">
            <button
              onClick={toggleReSubmisionPopUp}
              className=" text-green-600 hover:text-green-700 font-semibold text-medium   h-full w-full py-4 flex justify-center items-center ">
              <img
                className="mr-2"
                src="https://img.icons8.com/windows/32/26e07f/--checkmark-yes.png"
              />
              Submit
            </button>
          </div>
        )}
        {reSubmissionPopUp && (
          <SubmmissionCard
            assignment_id={assignment.id}
            toggleReSubmisionPopUp={toggleReSubmisionPopUp}
          />
        )}
      </div>
    </li>
  );
}
export default AssignmentCard;