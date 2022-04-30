import React, { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "./Context";

function AlertList({}) {
  const { alerts, removeAlert } = useContext(AlertContext);
  return (
    <div className={"fixed z-50 max-w-md sm:max-w-5xl w-full "}>
      {alerts.map((a) => (
        <Alert alert={a} key={a.id} removeAlert={removeAlert} />
      ))}
    </div>
  );
}
export default AlertList;
