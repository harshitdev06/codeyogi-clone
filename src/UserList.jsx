import axios from "axios";
import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import Loader from "./Loader";
import StudentsCard from "./StudentCard";
import { useOutletContext } from "react-router-dom";
import MobileNavBar from "./MoblieNavBar";

function UserList({}) {
  const [user, setUserData] = React.useState([]);
  const [spinner, setSpinner] = React.useState(true);
  const [toggleSideBar, setTogggleSideBar] = useOutletContext();
  const toToggleSideBar = () => {
    setTogggleSideBar(!toggleSideBar);
  };

  React.useEffect(() => {
    const promise = axios.get("https://randomuser.me/api/?results=30");
    promise.then((reponse) => {
      setUserData(reponse.data.results);
      setSpinner(false);
    });
  }, []);

  return (
    <>
      <MobileNavBar toToggleSideBar={toToggleSideBar} />
      <div className="pt-10 ">
        {spinner && <Loader />}
        <h1 className="mb-5 text-xl font-semibold">Students list </h1>
        <div className=" py-4 mt-2 bg-white flex justify-center items-center ">
          <div className="w-full max-w-4xl ">
            <div className="flex  flex-wrap justify-center items-center ">
              {!spinner && user.map((u) => <StudentsCard user={u} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserList;