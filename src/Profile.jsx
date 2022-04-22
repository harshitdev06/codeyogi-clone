import { Form, Formik } from "formik";
import React from "react";
import { object, date, number, string } from "yup";
import DropDown from "./DropDown";
import FormikInput from "./FormikInput";

function Profile({ myProfileDetails }) {
  const handelDropDown = (event) => {
    console.log(event.target.value);
  };
  const onFormSubmit = (data) => {
    console.log(data);
  };
  const validationSchema = object().shape({
    email: string().required().email(),
    phone_number: string().min(10),
    first_name: string().required(),
    last_name: string().required(),
    year_of_passout: date().required(),
    roll_number: number().integer(),
  });

  const intialValues = {
    first_name: "",
    last_name: "",
    email: "",
    institution_name: "",
    year_of_passout: "",
    phone_number: "",
    roll_number: "",
    branch: "",
    dob: "",
  };

  return (
    <div className="h-full  pt-10">
      <div className="p-4 rounded-md bg-white">
        <h1 className="font-medium text-lg"> Personal details</h1>
        <Formik
          onSubmit={onFormSubmit}
          initialValues={intialValues}
          validationSchema={validationSchema}
          className="mt-5 border-t">
          <Form>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                First Name
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"first_name"} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Last Name
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"last_name"} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Email Address
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"email"} type={"email"} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 s items-center">
              <dt className="text-sm gray-600 font-medium">
                Institution Name
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"institution_name"} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Year of PassOut
                <span className="text-red-600">*</span>
              </dt>
              <dd className="">
                <FormikInput name={"year_of_passout"} type={Date} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Phone Number
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"phone_number"} type={Number} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Date Of Birth
                <span className="text-red-600">*</span>
              </dt>
              <dd className="">
                <FormikInput name={"dob"} type={Date} />
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
                <FormikInput name={"roll_number"} type={number} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Branch
                <span className="text-red-600">*</span>
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"branch"} />
              </dd>
            </div>
            <div className=" p-5 ">
              <button className="px-10 text-sm font-medium inline-block py-2 bg-indigo-700 text-white rounded-md">
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default Profile;
