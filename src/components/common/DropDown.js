import React from "react";
import DropdownIcon from "../../assets/icons/dropdown_icon.svg";

const DropDown = (props) => {

  return (
    <div className="relative">
    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
      <img src={DropdownIcon} alt="Race Treack" className="h-9 w-9.5" />
    </div>
  </div>
  );
};

export default DropDown;
