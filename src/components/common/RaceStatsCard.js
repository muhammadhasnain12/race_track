import React from "react";
import RaceStats from "../../assets/images/race-stats.svg";

const RaceStatsCard = (props) => {
  const {data} = props
  return (
    <div className="box-content bg-[#F3F3F3] p-4 flex flex-row rounded-md gap-5 items-center justify-center">
    <img src={RaceStats} alt="Race Track" className="h-16 w-16" />
    <div>
      <p className="text-[28px] font-[600]">{data.number}</p>
      <p className="font-[400] text-[14px]">{data.text}</p>
    </div>
  </div>
  );
};

export default RaceStatsCard;
