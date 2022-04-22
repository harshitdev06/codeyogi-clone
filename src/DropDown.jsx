import React from "react";

function DropDown({ handelDropDown }) {
  return (
    <div className="m-1">
      {" "}
      <select
        onChange={handelDropDown}
        type="text"
        className="appearance-none
                  relative block w-full px-3
                  py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  bg-gray-50
                  rounded-md">
        <option value=" Mobile with keybord">Mobile with keybord</option>
        <option value="mobile without keyboard">mobile without keyboard</option>
        <option value="Personal computer">Personal computer</option>
        <option value="College computer">College computer</option>
      </select>
    </div>
  );
}
export default DropDown;
