/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bars3Icon } from "@heroicons/react/24/solid";
import RaceTrackLogo from "../../assets/images/race_track_logo.svg";
import SelectIcon from "../../assets/icons/select_icon.svg";
import LoginAvatar from "../../assets/images/login_user_avatar.png";

import { MenueLink } from "../../utils/constants";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="px-4 sm:px-[5%] md:px-[5%] lg:px-[5%] flex flex-wrap items-center justify-between mx-auto py-4 mt-2 bg-[#FFF]">
        <a href="#" className="flex items-center">
          <img src={RaceTrackLogo} className="h-12 mr-3" alt="race Track" />
        </a>
        <div className="flex md:order-2">
          <div className="flex items-center justify-between gap-3">
            <img className="h-9" alt="Race Track" src={LoginAvatar} />
            <p className="text-[16px] text-[#000] font-[500]">
              Usman
            </p>
            <img src={SelectIcon} alt="Race Track" />
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon onClick={() => setToggle(!toggle)} />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            toggle ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col font-sans font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:border-0 ">
            {MenueLink.map((linkText) => (
              <li key={linkText}>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 font-sans ${
                    selected === linkText ? "text-[#FF4D00]" : "text-black"
                  }`}
                  aria-current="page"
                  onClick={() => setSelected(linkText)}
                >
                  {linkText}
                </a>
                {selected === linkText && (
                  <div className="bg-[#FF4D00] h-1 w-full bottom-0"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
