import React from "react";
import DropDown from "./DropDown";
import FormikInput from "./FormikInput";

function Profile({ myProfileDetails }) {

    
  const handelDropDown = (event)=>{
       console.log(event.target.value)
  }
  return (
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
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Last Name
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Email Address
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Institution Name
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Year of PassOut
                <span className="text-red-600">*</span>
              </dt>
              <dd className="">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Phone Number
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Date Of Birth
                <span className="text-red-600">*</span>
              </dt>
              <dd className="">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Device you are using for assignment
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <DropDown handelDropDown={handelDropDown} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Institution Roll No.
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Branch
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput />
              </dd>
            </div>
            <div className=" p-5 ">
              <button className="px-10 text-sm font-medium inline-block py-2 bg-indigo-700 text-white rounded-md">
                Update
              </button>
            </div>
          </dl>
        </div>
      </div>
    </form>
  );
}
export default Profile;
