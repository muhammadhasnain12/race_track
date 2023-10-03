import React from "react";

const CheckBoxes = (props) => {
  const { CheckBoxesData } = props;

  return (
    <div className="flex items-center mr-4">
      <input
        id="checkbox"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 accent-orange-600 focus:ring-orange-600"
      />
      <label className="ml-2 font-[700] text-[16px] text-gray-900">
        {CheckBoxesData}
      </label>
    </div>
  );
};

export default CheckBoxes;
