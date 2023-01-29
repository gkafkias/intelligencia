import "./App.css";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/testSlice";
import { RootState } from "./store/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useGetEfoQuery } from "./services/fetchEfo";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.test);

  const { data, error, isLoading } = useGetEfoQuery(50);

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <Button type="primary" onClick={() => dispatch(increment())}>
          Testing
        </Button>
        <span>Value is: {value}</span>
      </header>
    </div>
  );
}

export default App;
