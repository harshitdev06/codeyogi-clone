import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { object, date, number, string } from "yup";
import DropDown from "./DropDown";
import FormikInput from "./FormikInput";
import { DateTime } from "luxon";
import AlertContext from "./Context";

function Profile({ myProfileDetails }) {
  const { showAlerts } = useContext(AlertContext);

  const onFormSubmit = (data) => {
    console.log(data);
    showAlerts("Profile updated sucessfully !!");
  };
    
  const validationSchema = object().shape({
    email: string().required().email(),
    phone_number: string().required().min(10),
    first_name: string().required(),
    last_name: string().required(),
    year_of_passout: date().required(),
    roll_number: number().integer(),
  });

  const intialValues = {
    first_name: myProfileDetails.first_name,
    last_name: myProfileDetails.last_name,
    email: myProfileDetails.email,
    institution_name: myProfileDetails.institute.name,
    year_of_passout: myProfileDetails.year_of_pass_out,
    phone_number: myProfileDetails.phone_no,
    roll_number: myProfileDetails.institute_roll_no,
    branch: myProfileDetails.branch,
    dob: DateTime.fromISO(myProfileDetails.date_of_birth).toFormat(`dd-LL-y`),
  };
  const handelDropDown = (event) => {
    console.log(event.target.value);
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
              <dt className="text-sm gray-600 font-medium">Institution Name</dt>
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
              <dt className="text-sm gray-600 font-medium">Date Of Birth</dt>
              <dd className="">
                <FormikInput name={"dob"} type={Date} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Device you are using for assignment
              </dt>
              <dd className="col-span-2">
                <DropDown handelDropDown={handelDropDown} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">
                Institution Roll No.
              </dt>
              <dd className="col-span-2">
                <FormikInput name={"roll_number"} type={number} />
              </dd>
            </div>
            <div className="p-5 border-b grid grid-cols-3 gap-4 items-center">
              <dt className="text-sm gray-600 font-medium">Branch</dt>
              <dd className="col-span-2">
                <FormikInput name={"branch"} />
              </dd>
            </div>
            <div className=" p-5 ">
              <button
                type="submit"
                className="px-10 text-sm font-medium inline-block py-2 bg-indigo-700 text-white rounded-md">
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
