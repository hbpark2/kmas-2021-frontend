import { useQuery } from "react-query";
import { GET_MARKET, TGetMarket } from "../Apis/marketApi";

export const useGetMarket = (marketId: number | null) => {
  const { data, isLoading, isError } = useQuery<TGetMarket>(
    ["GET_MARKET", { marketId }],
    () => GET_MARKET({ marketId }),
    {
      enabled: !!marketId,
    }
  );

  return { data, isLoading, isError };
};
