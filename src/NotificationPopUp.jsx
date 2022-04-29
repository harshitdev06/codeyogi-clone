import React, { useContext } from "react";
import AlertContext from "./Context";
import cn from "classnames";

function NotificationPopUP({}) {
  const { alert, removeAlert } = useContext(AlertContext);
  if (!alert) return <></>;
  const { message, status } = alert;
  const alertClasses = cn({
    "bg-green-100 border-green-200": status === "success",
    "bg-red-100 border-red-200": status === "error",
  });
  return (
    <div
      className={
        "fixed z-50 max-w-md sm:max-w-5xl border w-full p-4 shadow rounded-md " +
        alertClasses
      }>
      <div className="flex justify-between item-center">
        <h1 className="font-medium text-gray-800">{message}</h1>
        <button
          className="font-bold text-medium text-gray-800 p-1"
          onClick={() => {
            removeAlert();
          }}>
          X
        </button>
      </div>
    </div>
  );
}
export default NotificationPopUP;
