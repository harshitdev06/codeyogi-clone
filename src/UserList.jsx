import axios from "axios";
import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import Loader from "./Loader";
import StudentsCard from "./StudentCard";
import { useOutletContext } from "react-router-dom";
import MobileNavBar from "./MoblieNavBar";
import { getUser, toDecachedData } from "./Api";

function UserList({}) {
  const cachedUsers = toDecachedData("users") || [];
  const [user, setUserData] = React.useState(cachedUsers);
  const [spinner, setSpinner] = React.useState(true);

  React.useEffect(() => {
    const promise = getUser();
    promise.then((u) => {
      setUserData(u);
      setSpinner(false);
    });
  }, []);

  return (
    <>
      <div className="pt-3 sm:pt-10 ">
        {spinner && <Loader />}
        <h1 className="mb-5 text-xl font-semibold">Students list </h1>
        <div className=" py-4 mt-2 bg-white flex justify-center items-center ">
          <div className="w-full max-w-4xl ">
            <div className="flex  flex-wrap justify-center items-center  ">
              {user.map((u) => (
                <StudentsCard user={u} toggleSideBar={toggleSideBar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserList;