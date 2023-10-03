import React from "react";
import ResetButtonIcon from '../../assets/icons/reset_button_icon.png'

const Button = (props) => {
    const {buttonText, btnClasses} = props
  return (
    <button
      type="button"
      className={`${btnClasses} text-[#666] border border-[#666] focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2 text-center inline-flex items-center gap-4`}
    >
      <img src={ResetButtonIcon} alt="Race Track" />
      {buttonText}
    </button>
  );
};

export default Button;
