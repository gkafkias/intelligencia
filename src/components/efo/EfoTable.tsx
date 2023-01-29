import { Divider, Pagination, Row, Table } from "antd";
import { useDispatch } from "react-redux";
import { useEfoTable } from "../../hooks/useEfoTable";
import { setPageData } from "../../slices/efoSlice";

export const EfoTable = () => {
  const {
    data,
    loading,
    page,
    pageSize,
    tableColumns,
    tableDefaultCurrent,
    totalElements,
    totalPages,
  } = useEfoTable();

  const dispatch = useDispatch();

  const columns = [
    ...tableColumns,
    {
      title: "Action(s)",
      dataIndex: "",
      key: "x",
      render: ({ url }: { url?: string }) =>
        !!url ? (
          <a href={url || ""} target="_blank" rel="noreferrer">
            View More
          </a>
        ) : null,
    },
  ];

  return (
    <div>
      <Table
        dataSource={data}
        loading={loading}
        columns={columns}
        pagination={false}
        scroll={{ y: "75vh" }}
        bordered
        expandable={{
          expandedRowRender: (record) => <p>{record.description}</p>,
          rowExpandable: (record) =>
            !!record?.description && record?.description.length > 0,
        }}
        rowKey={(record) => record.id}
      />
      <Divider type="vertical" />
      <Row justify={"center"}>
        <Pagination
          current={page}
          total={totalPages}
          pageSize={pageSize}
          defaultCurrent={tableDefaultCurrent}
          showTotal={() => `Total ${totalElements} items`}
          onChange={(page, pageSize) =>
            dispatch(setPageData({ page, pageSize }))
          }
          showQuickJumper
        />
      </Row>
    </div>
  );
};
