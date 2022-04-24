import React, { useContext } from "react";
import AlertContext from "./Context";

function NotificationPopUP({ notification }) {

  return (
    <>
      <div
        className={
          " bg-red-100 p-4 w-full shadow rounded-md transition-all fade-in fade-out delay-200 duration-200"
        }>
        <div className="flex space-x-2 items-center">
          <h1 className="text-red-400 font-medium ">Failed</h1>
          <img src="https://img.icons8.com/material-rounded/24/fa314a/error--v1.png" />
        </div>
        <h1 className="font-medium text-gray-800">Reason : {} </h1>
      </div>
    </>
  );
}
export default NotificationPopUP;
