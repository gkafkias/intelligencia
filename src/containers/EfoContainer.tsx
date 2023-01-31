import { EfoTable } from "../components/efo/EfoTable";
import { Typography } from "antd";
import { EfoChart } from "../components/efo/EfoChart";

export const EfoContainer = () => {
  const { Title } = Typography;

  return (
    <>
      <Title>Efo Table</Title>
      <EfoTable />
      <Title>Efo Chart</Title>
      <EfoChart />
    </>
  );
};
