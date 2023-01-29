import { notification } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { config } from "../constants/config";
import { StatusTypes } from "../constants/misc";
import { useGetEfoQuery } from "../services/fetchEfo";
import { RootState } from "../store/store";

export const useEfoTable = () => {
  const { page, pageSize, status } = useSelector(
    (state: RootState) => state.efoSlice
  );

  const { isLoading, data, isUninitialized, isFetching } = useGetEfoQuery({
    page,
    size: pageSize,
  });

  useEffect(() => {
    if (status !== StatusTypes.ERROR) return;

    notification.open({
      message: "Error",
      description:
        "There was an error fetching the data... Please check your connection or refresh the page.",
      duration: 3,
    });
  }, [status]);

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
  ];

  const isTableLoading = isLoading || isUninitialized || isFetching;

  return {
    tableColumns: columns,
    tableDefaultCurrent: config.initialPage,
    data: data?.data || [],
    loading: isTableLoading,
    totalElements: data?.totalElements || 0,
    totalPages: data?.totalPages * pageSize || 0,
    page,
    pageSize,
  };
};
