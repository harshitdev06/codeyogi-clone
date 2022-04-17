import React from "react";
import LinkComponent from "./LinkComponent";

function SlideBar({ toHideSideBar }) {
  return (
    <div
      className={
        "sticky top-0 h-screen  pt-5 pb-4 bg-gray-800  w-60 flex flex-col justify-between sm:transition-none transition-all pop-up duration-500 delay-700    "
      }>
      <div className=" px-2 space-y-6">
        <div className="flex justify-between  ">
          <h1 className=" px-2 text-3xl  font-extrabold text-white">
            CODEYOGI
          </h1>
          <button className={" sm:hidden block"} onClick={toHideSideBar}>
            <img src="https://img.icons8.com/material-rounded/24/ffffff/cancel--v1.png" />
          </button>
        </div>
        <div className=" flex flex-col">
          <LinkComponent
            src="https://img.icons8.com/material-rounded/24/ffffff/podium-with-audience.png"
            to="/lecture">
            Lecture
          </LinkComponent>
          <LinkComponent
            src="https://img.icons8.com/ios-glyphs/30/ffffff/questions.png"
            to="/quiz">
            Quiz
          </LinkComponent>
          <LinkComponent
            src="https://img.icons8.com/material-outlined/24/ffffff/assignment-return.png"
            to="/assignment">
            Assignments
          </LinkComponent>
          <LinkComponent
            src="https://img.icons8.com/material-outlined/24/ffffff/student-registration.png"
            to="/studentslist">
            Students
          </LinkComponent>
        </div>
      </div>
      <div className="px-2 flex flex-col">
        <LinkComponent
          src="https://img.icons8.com/ios-glyphs/30/ffffff/test-account.png"
          to="/profile">
          Profile
        </LinkComponent>
        <LinkComponent
          src="https://img.icons8.com/material-outlined/24/ffffff/exit.png "
          to="/login">
          LogOut
        </LinkComponent>
      </div>
    </div>
  );
}

export default SlideBar;
