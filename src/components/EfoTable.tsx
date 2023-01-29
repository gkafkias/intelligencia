import { useState } from "react";
import { Pagination, Table } from "antd";
import { config } from "../constants/config";
import { useGetEfoQuery } from "../services/fetchEfo";

export const EfoTable = () => {
  const [page, setPage] = useState(config.initialPage);
  const [pageSize, setPageSize] = useState(config.efoTermsPerPage);

  const { isError, isLoading, data, isUninitialized, isFetching } =
    useGetEfoQuery({ page, size: pageSize });

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
        columns={columns}
        pagination={false}
        scroll={{ y: "75vh" }}
        dataSource={data?.data || []}
        loading={isLoading || isUninitialized || isFetching}
      />
      <Pagination
        pageSize={pageSize}
        current={page}
        defaultCurrent={config.initialPage}
        total={data?.totalPages * pageSize || 0}
        showTotal={() => `Total ${data?.totalElements} items`}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};
