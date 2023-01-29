import { EfoTable } from "../components/efo/EfoTable";
import { Typography } from "antd";

export const EfoContainer = () => {
  const { Title } = Typography;

  return (
    <>
      <Title>Efo Table</Title>
      <EfoTable />
    </>
  );
};
