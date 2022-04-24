import React, { useContext } from "react";
import { useField } from "formik";
import AlertContext from "./Context";

function FormikInput({ name, type }) {
  const [field, meta] = useField(name);

  return (
    <div className="m-1">
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={name}
        type={type || " text "}
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-50 rounded-md"
      />
      <div className="h-5 text-red-500">
        {meta.error && meta.touched && meta.error}
      </div>
    </div>
  );
}
export default FormikInput;
