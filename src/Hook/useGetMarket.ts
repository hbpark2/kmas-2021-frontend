import { useQuery } from "react-query";
import { GET_MARKET } from "../Apis/MarketApi";
import { IGetMarket } from "../Apis/MarketApi/marketApiTypes";

export const useGetMarket = (marketId?: number) => {
  const { data, isLoading, isError } = useQuery<IGetMarket>(
    ["GET_MARKET", { marketId }],
    () => GET_MARKET({ marketId }),
    {
      enabled: !!marketId,
    }
  );

  return { data, isLoading, isError };
};

// Promise<void | {
//   status: number;
//   error: string;
//   results: false | Promise<any>;
