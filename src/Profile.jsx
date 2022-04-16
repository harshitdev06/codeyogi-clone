import React from "react";
import { useOutletContext } from "react-router-dom";
import MobileNavBar from "./MoblieNavBar";

function Profile() {
  const [toggleSideBar, setTogggleSideBar] = useOutletContext();
  console.log(toggleSideBar);
  const toToggleSideBar = () => {
    setTogggleSideBar(!toggleSideBar);
  };
  return (
    <>
      <MobileNavBar toToggleSideBar={toToggleSideBar} />
      <form className="h-full  pt-10">
        <div className="p-4 rounded-md bg-white">
          <h1 className="font-medium text-lg"> Personal details</h1>
          <div className="mt-5 border-t">
            <dl>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  First Name
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Last Name
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Email Address
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Institution Name
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Year of PassOut
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Phone Number
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="number"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Date Of Birth
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Device you are using for assignment
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <select
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md">
                      <option value="">Mobile with keybord</option>
                      <option value="">mobile without keyboard</option>
                      <option value="">Personal computer</option>
                      <option value="">Collage computer</option>
                    </select>
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Institution Roll No.
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
                <dt className="text-sm gray-600 font-medium">
                  Branch
                  <span className="text-red-600">*</span>
                </dt>
                <dd className="col-span-2">
                  <div className="m-1">
                    {" "}
                    <input
                      type="text"
                      className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md"
                    />
                  </div>
                </dd>
              </div>
              <div className=" p-5 ">
                <button className="px-10 text-sm font-medium inline-block py-2 bg-indigo-700 text-white rounded-md">
                  {" "}
                  Update
                </button>
              </div>
            </dl>
          </div>
        </div>
      </form>
    </>
  );
}

export default Profile;
