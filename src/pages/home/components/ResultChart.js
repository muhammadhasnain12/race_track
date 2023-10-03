import { Pie } from "react-chartjs-2";

import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const ResultChart = (props) => {
  const { topResult, bottomResult, data, TopLeaderIcon, BottomLeaderIcon } = props;

  return (
    <div className="flex items-start w-full">
      <span className="text-black md:mt-8 mt-5 text-center text-[12px] md:text-[16px] lg:text-[16px] bg-white font-[400] px-5 py-1 rounded shadow-lg">
        {topResult}
      </span>
      <div className="py-6">
        <div className="relative md:top-6 lg:top-6 top-2">
          <img src={TopLeaderIcon} alt="Race Track" />
        </div>
        <div className="md:w-[280px] md:h-[280px] w-[180px] h-[180px]">
          <Pie data={data} />
        </div>

        <div className="relative md:bottom-6 bottom-2">
          <img src={BottomLeaderIcon} alt="Race Track" />
          <div className="relative right-32 mt-1">
            <span className="text-black text-center text-[12px] md:text-[16px] lg:text-[16px] bg-white font-[400] px-5 py-1 rounded shadow-lg">
              {bottomResult}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
