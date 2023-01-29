import "./App.css";
import logo from "./logo.svg";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/testSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.test);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" onClick={() => dispatch(increment())}>
          Testing
        </Button>
        <span>Value is: {value}</span>
      </header>
    </div>
  );
}

export default App;
