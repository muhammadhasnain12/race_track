import { Chart, ArcElement } from "chart.js";
import ResultChart from "./ResultChart";
import RaceStatsCard from "../../../components/common/RaceStatsCard";
import { RaceTrackStats } from "../../../utils/constants";
import TopLeaderIcon from '../../../assets/icons/top_leader_line_icon.svg'
import BottomLeaderIcon from '../../../assets/icons/bottom_leader_icon.svg'

Chart.register(ArcElement);

const Results = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Race Track",
        data: [300, 170],
        backgroundColor: ["rgb(241, 241, 241, 1)", "rgb(255, 77, 0, 1)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="mt-8 bg-white p-8 shadow rounded-lg">
      <p className="text-[22px] font-[700]">Results</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 mt-10 px-3">
        <div>
          <h5 className="font-[500] text-[18px]">Win%</h5>
          <ResultChart
            bottomResult="8.154 (19.47%)"
            topResult="4.191(10.01%)"
            data={data}
            TopLeaderIcon={TopLeaderIcon}
            BottomLeaderIcon={BottomLeaderIcon}
          />
        </div>

        <div>
          <h5 className="font-[500] text-[18px]">In the Money % (Top 3)</h5>
          <ResultChart
            bottomResult="4.191(10.01%)"
            topResult="8.154 (19.47%)"
            data={data}
            TopLeaderIcon={TopLeaderIcon}
            BottomLeaderIcon={BottomLeaderIcon}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-8 px-4">
        {RaceTrackStats.map((data) => (
          <RaceStatsCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Results;
