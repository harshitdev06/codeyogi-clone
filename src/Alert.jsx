import React from "react";
import cn from "classnames";

function Alert({ alert, removeAlert }) {
  const { message, status } = alert;
  const alertClasses = cn("border p-4 shadow rounded-md ", {
    "bg-green-100 border-green-200": status === "success",
    "bg-red-100 border-red-200": status === "error",
  });
  return (
    <div className={alertClasses}>
      <div className="flex justify-between item-center">
        <h1 className="font-medium text-gray-800">{message}</h1>
        <button
          className="font-bold text-medium text-gray-800 p-1"
          onClick={() => {
            removeAlert(alert);
          }}>
          X
        </button>
      </div>
    </div>
  );
}
export default Alert;
