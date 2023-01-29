import { useState } from "react";
import { Pagination, Table } from "antd";
import { config } from "../../constants/config";
import { useGetEfoQuery } from "../../services/fetchEfo";

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
      title: "Action(s)",
      dataIndex: "",
      key: "x",
      render: ({ url }: { url?: string }) =>
        !!url ? (
          <a href={url || ""} target="_blank" rel="noreferrer">
            Visit Page
          </a>
        ) : null,
    },
  ];

  return (
    <div>
      <Table
        bordered
        columns={columns}
        pagination={false}
        scroll={{ y: "75vh" }}
        dataSource={data?.data || []}
        expandable={{
          expandedRowRender: (record) => <p>{record.description}</p>,
          rowExpandable: (record) =>
            !!record?.description && record?.description.length > 0,
        }}
        rowKey={(record) => record.id}
        loading={isLoading || isUninitialized || isFetching}
      />
      <Pagination
        pageSize={pageSize}
        current={page}
        defaultCurrent={config.initialPage}
        total={data?.totalPages * pageSize || 0}
        showTotal={() => `Total ${data?.totalElements || 0} items`}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        showQuickJumper
      />
    </div>
  );
};
