import { useQuery } from "react-query";
import { GET_MARKETS } from "../Apis/MarketApi";
import { IGetMarkets } from "../Apis/MarketApi/marketApiTypes";

export const useGetMarkets = ({
  page,
  page_size,
  keyword,
  category,
}: IUseGetMarketsProps) => {
  const { data, isLoading, isError } = useQuery<IGetMarkets>(
    ["GET_MARKETS", { page, page_size, keyword, category }],
    () => GET_MARKETS({ page, page_size, keyword, category }),
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};

interface IUseGetMarketsProps {
  page: number;
  page_size: number;
  keyword: string;
  category: number;
}
