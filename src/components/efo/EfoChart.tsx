import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEfoChart } from "../../hooks/useEfoChart";

export const EfoChart = () => {
  const { options } = useEfoChart();

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
