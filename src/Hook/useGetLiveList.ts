import { useQuery } from "react-query";
import { GET_LIVE_LIST } from "../Apis/LiveApi";
import { ILive } from "../Apis/LiveApi/liveApiTypes";

export const useGetLiveList = (date: string) => {
  const { data, isLoading, isError } = useQuery<ILive[]>(
    ["GET_LIVE_LIST", { date }],
    () => GET_LIVE_LIST(date),
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};
