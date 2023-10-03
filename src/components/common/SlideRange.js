import React, { useState } from "react";

const SlideRange = (props) => {
  const [values, setValues] = useState([25, 75]); // Initial values for the thumbs

  const handleChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };
  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={values[0]}
        onChange={(e) => handleChange(0, parseInt(e.target.value))}
        className="w-32 h-4 bg-blue-300 appearance-none focus:outline-none focus:bg-blue-400 rounded-lg"
      />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={values[1]}
        onChange={(e) => handleChange(1, parseInt(e.target.value))}
        className="w-32 h-4 bg-blue-300 appearance-none focus:outline-none focus:bg-blue-400 rounded-lg"
      />
    </div>
  );
};

export default SlideRange;
