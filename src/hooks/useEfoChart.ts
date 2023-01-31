import { useSelector } from "react-redux";
import { useGetEfoQuery } from "../services/fetchEfo";
import { RootState } from "../store/store";

export const useEfoChart = () => {
  const { page, pageSize } = useSelector((state: RootState) => state.efoSlice);

  const { data } = useGetEfoQuery({
    page,
    size: pageSize,
  });

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      height: "75%",
    },
    title: {
      text: "Efo term label frequency chart",
    },
    xAxis: {
      type: "category",
      categories: [...(data?.labelFrequency.keys() || [])],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Max frequency of word in page",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
      scrollbar: {
        enabled: true,
      },
    },
    series: [
      {
        type: "bar",
        name: "Frequency of word in page",
        data: [...(data?.labelFrequency.values() || [])],
      },
    ],
  };

  return {
    options,
  };
};
