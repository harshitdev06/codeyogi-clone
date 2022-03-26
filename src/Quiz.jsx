import React from "react";

import QuizHeader from "./QuizHeader";
function Quiz() {
  return (
    <div className="h-screen bg-gray-100">
          <QuizHeader></QuizHeader>
          <div className="flex h-screen justify-center items-center ">
            No Active Question.
          </div>
    </div>
  );
}

export default Quiz;
