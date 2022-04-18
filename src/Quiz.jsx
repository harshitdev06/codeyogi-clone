import React from "react";

import QuizHeader from "./QuizHeader";
function Quiz() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <QuizHeader></QuizHeader>
      <div className="flex m-auto justify-center items-center ">
        No Active Question.
      </div>
    </div>
  );
}

export default Quiz;
