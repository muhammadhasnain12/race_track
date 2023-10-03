import React from "react";
import HelpIcon from "../../assets/icons/help_icon.svg";
import Button from "../../components/common/Button";
import RecentRace from "./components/RecentRace";
import PreviousRace from "./components/PreviousRace";
import QuickFilters from "./components/QuickFilters";
import Results from "./components/Results";
import TrendIcon from "../../assets/icons/trend_icon.svg";

const Home = () => {
  const SaveTrendButton = (
    <button
      type="button"
      className="gap-4 w-full md:w-auto text-white bg-[#FF4D00] hover:bg-[#FF4D00] focus:outline-none font-[600] rounded-md text-[18px] px-7 py-2 h-[40px] text-center inline-flex items-center"
    >
      <img src={TrendIcon} alt="Race Track" className="h-5 w-5" />
      Save Trend
    </button>
  );
  return (
    <section className="home__container">
      <div className="px-4 sm:px-[5%] md:px-[5%] lg:px-[5%] py-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-[22px] font-[700]">Create a Trend Tool</p>
          <div className="flex flex-wrap gap-4 mt-5 md:mt-0">
            {SaveTrendButton}
            <Button
              buttonText="Reset All Filters"
              btnClasses="w-full md:w-auto h-[40px] text-[14px] font-[700] border-2 border-[#666]"
            />

            <button className="flex items-center space-x-2">
              <img src={HelpIcon} alt="Race Track" />
              <span className="underline">Help</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full sm:w-full md:w-1/4 lg:w-1/4">
            <QuickFilters />
          </div>
          <div className="w-full sm:w-full md:lg:w-3/4 lg:w-3/4 md:pl-2 p-0">
            <RecentRace />
            <PreviousRace />
            <Results />
          </div>
        </div>
        <div className="text-center py-12">{SaveTrendButton}</div>
      </div>
    </section>
  );
};

export default Home;
