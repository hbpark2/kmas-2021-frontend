import { useQuery } from "react-query";
import { GET_NEWS_LIST } from "../Apis/NewsApi";
import { IGetNewsList } from "../Apis/NewsApi/newsApiTypes";

export const useGetNewsList = ({ page, page_size }: IUseGetNewsListProps) => {
  const { data, isLoading, isError } = useQuery<IGetNewsList>(
    ["GET_NEWS_LIST", { page, page_size }],
    () => GET_NEWS_LIST({ page, page_size }),
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};

interface IUseGetNewsListProps {
  page: number;
  page_size: number;
}
