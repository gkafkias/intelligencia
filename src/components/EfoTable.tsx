import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { StatusTypes } from "../constants/misc";
import { useGetEfoQuery } from "../services/fetchEfo";
import { RootState } from "../store/store";

export const EfoTable = () => {
  const { data, status, page, total_pages } = useSelector(
    (state: RootState) => state.efo
  );

  const { isLoading } = useGetEfoQuery(0);

  const isTableLoading =
    isLoading || status === StatusTypes.LOADING || status === StatusTypes.IDLE;

  const columns = [
    {
      title: "Obo ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string[]) => (
        <>
          {description.map((desc) => {
            return <p>{desc}</p>;
          })}
        </>
      ),
    },
    // {
    //   title: "Synonyms",
    //   dataIndex: "synonyms",
    //   key: "synonyms",
    //   render: (synonyms: string[]) => (
    //     <Space size={[2, 2]} wrap>
    //       {synonyms.map((synonym) => {
    //         const color = synonym.length > 5 ? "geekblue" : "green";

    //         return (
    //           <Tag color={color} key={synonym}>
    //             {synonym}
    //           </Tag>
    //         );
    //       })}
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div>
      <Table
        bordered
        loading={isTableLoading}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};
