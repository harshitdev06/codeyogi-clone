import React from "react";
import AssignmentCard from "./AssignmentCard";
import Loader from "./Loader";
import NotificationPopUP from "./NotificationPopUp";
import MobileNavBar from "./MoblieNavBar";
import { useOutletContext } from "react-router-dom";
import { getAssignmentList } from "./Api";

function Assignments() {
  const [spinner, setSpinner] = React.useState(true);
  const cashedData = JSON.parse(localStorage.getItem("assignmentList")) || [];
  const [assignment, setAssignment] = React.useState(cashedData);
  const [notificationPopupText, setNotificationPopUPText] = React.useState("");
  const [toggleSideBar, setTogggleSideBar] = useOutletContext();
  const toToggleSideBar = () => {
    setTogggleSideBar(!toggleSideBar);
  };

  React.useEffect(() => {
    const promise = getAssignmentList();
    promise.then((assignmentList) => {
      setAssignment(assignmentList);
      setSpinner(false);
    });
  }, []);
  return (
    <div>
      <MobileNavBar toToggleSideBar={toToggleSideBar} />
      <div className="pt-10">
        {spinner && <Loader />}
        <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
      </div>
      <div className="fixed flex justify-center items-center top-10">
        {notificationPopupText && (
          <NotificationPopUP notification={notificationPopupText} />
        )}
      </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
          <ul className={" space-y-2 "}>
            {!spinner &&
              assignment.map((t) => {
                return (
                  <AssignmentCard
                    setNotificationPopUPText={setNotificationPopUPText}
                    key={t.id}
                    assignment={t}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
