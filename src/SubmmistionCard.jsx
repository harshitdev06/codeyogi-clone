import React from "react";
import axios from "axios";
import {string} from  "yup";
import { toPutAssignmentLink } from "./Api";

function SubmmissionCard({
  toggleReSubmisionPopUp,
  assignment_id,
  toSetSubmittedLink,
  toSetErrorMessage,
}) {
  const [submissionLink, setSubmissionLink] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const toSetSubmitInout = (data) => {
    setSubmissionLink(data.target.value);
  };

  const toPassDataToParent = (e) => {
    e.preventDefault();

    try {
      string()
        .url("This Url is not valid.Please enter a Valid url")
        .validateSync(submissionLink);
    } catch (e) {
      setErrorMessage(e.message);
      toSetErrorMessage(e.message);
      return;
    } finally {
      errorMessage && toggleReSubmisionPopUp();
      toPutAssignmentLink(assignment_id);
    }
    toSetSubmittedLink(submissionLink);
    toPutAssignmentLink(assignment_id, submissionLink);
  };
  return (
    <div className=" h-screen fixed top-0 left-0 w-screen flex justify-center items-center ">
      <div className=" bg-gray-50 p-4 rounded-md p-4 max-w-md sm:max-w-2xl w-full border border-gray-200 shadow-md  ">
        <div className=" border-y py-4 mt-5 ">
          <div className=" flex space-x-10 py-4 items-center ">
            <h1 className=" text-sm text-gray-600 font-medium ">
              Submission Link
            </h1>
            <input
              value={submissionLink}
              onChange={toSetSubmitInout}
              placeholder="Submission Link"
              type="text"
              className={
                " grow shadow px-4 py-2 bg-gray-50 rounded-md border border-gray-400 "
              }
            />
          </div>
          <div className="h-5 flex justify-end text-red-500 font-medium ">
            {errorMessage}
          </div>
        </div>
        <div className="py-4 flex justify-between">
          <button
            onClick={toPassDataToParent}
            type="submit"
            className="px-8 rounded py-2 bg-indigo-600 text-white font-medium inline-block ">
            Submit
          </button>
          <button
            onClick={toggleReSubmisionPopUp}
            className={
              "px-8 rounded py-2 border border-gray-200 shadow-sm font-medium inline-block   "
            }>
            {" "}
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}
export default SubmmissionCard