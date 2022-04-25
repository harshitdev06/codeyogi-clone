import React, { useContext } from "react";
import AlertContext from "./Context";

function NotificationPopUP({}) {
  const { message, setMessage } = useContext(AlertContext);
  return (
    <div
      className={
        " bg-green-100 fixed z-50 max-w-md sm:max-w-5xl border w-full border-green-2 p-4 shadow rounded-md "
      }>
      <div className="flex justify-between item-center">
        <div>
          <h1 className="text-green-400 font-medium ">Success !!</h1>
          <h1 className="font-medium text-gray-800">{message}</h1>
        </div>
        <button
          className="font-bold text-medium text-gray-800 p-1"
          onClick={() => setMessage("")}>
          X
        </button>
      </div>
    </div>
  );
}
export default NotificationPopUP;
