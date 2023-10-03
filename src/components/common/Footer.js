import RaceTrackLogo from "../../assets/images/race_track_footer_logo.svg";
import LinkedinIcon from "../../assets/icons/linkedin_icon.svg";
import PintrestIcon from "../../assets/icons/pintrest_icon.svg";
import VidmatetIcon from "../../assets/icons/vidmate_icon.svg";
import TwitterIcon from "../../assets/icons/twitter_icon.png";
import FacebookIcon from "../../assets/icons/facebook_icon.svg";
import { MenueLink } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-[#222] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://racetracker.com " className="flex items-center">
              <img src={RaceTrackLogo} className="h-14 mr-3" alt="Race Track" />
            </a>
            <p className="text-white text-[16px] font-[400] py-6 md:w-[442px] lg:w-[442px] w-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the of the printing and typesetting industry. Lorem
              Ipsum has been the
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm text-white dark:text-white font-bold">
                Explore
              </h2>
              <ul className="text-white dark:text-gray-400 text-xs">
                {MenueLink.map((linkText) => (
                  <li className="mb-4" key={linkText}>
                    <a href="/" className="hover:underline ">
                      {linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white dark:text-white font-bold">
                Explore
              </h2>
              <ul className="text-white dark:text-gray-400 text-xs">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-[#CFD9DE] sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © Copyright 2023{" "}
            <a href="/" className="hover:underline">
              Racetrack Insights
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="/"
              className="text-white hover:text-white dark:hover:text-white"
            >
              <img src={FacebookIcon} alt="Race Track" />
            </a>
            <a
              href="/"
              className="text-white hover:text-white dark:hover:text-white"
            >
              <img src={TwitterIcon} alt="Race Track" />
            </a>
            <a
              href="/"
              className="text-white hover:text-white dark:hover:text-white"
            >
              <img src={LinkedinIcon} alt="Race Track" />
            </a>
            <a
              href="/"
              className="text-white hover:text-white dark:hover:text-white"
            >
              <img src={PintrestIcon} alt="Race Track" />
            </a>
            <a
              href="/"
              className="text-white hover:text-white dark:hover:text-white"
            >
              <img src={VidmatetIcon} alt="Race track" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
