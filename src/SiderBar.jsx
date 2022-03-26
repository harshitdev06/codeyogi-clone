import React from "react";
import {Link} from "react-router-dom";
import LinkComponent from "./LinkComponent";

function SlideBar() {
  return (
    <div className="fixed h-screen pt-5 pb-4 bg-gray-800  w-60 flex flex-col justify-between z-50 ">
        <div className=" px-2 space-y-6">
            <h1 className=" px-2 text-3xl  font-extrabold text-white">CODEYOGI</h1>
              <div className=" flex flex-col">
                <LinkComponent src="https://img.icons8.com/material-rounded/24/ffffff/podium-with-audience.png" to="/lecture">Lecture</LinkComponent>
                <LinkComponent src="https://img.icons8.com/ios-glyphs/30/ffffff/questions.png" to="/quiz" >Quiz</LinkComponent>
                <LinkComponent src="https://img.icons8.com/material-outlined/24/ffffff/assignment-return.png" to="/assignment">Assignments</LinkComponent> 
            </div>      
        </div>
      <div className="px-2 flex flex-col">
        <LinkComponent src="https://img.icons8.com/ios-glyphs/30/ffffff/test-account.png" to="/profile">Profile</LinkComponent>
      </div>     
    </div>
  );
}

export default SlideBar;
