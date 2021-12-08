import { useQuery } from "react-query";
import { GET_CHALLANGE_LIST } from "../Apis/EventApi";
import { IChallange } from "../Apis/EventApi/eventApiTypes";

export const useGetChallangeList = () => {
  const { data, isLoading, isError } = useQuery<IChallange[]>(
    "GET_NEWS_LIST",
    GET_CHALLANGE_LIST,
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};
