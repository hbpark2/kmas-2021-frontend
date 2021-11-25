const BASE_URL = process.env.REACT_APP_BASE_URL;

export interface IPagination {
  count: number;
  hasMore: boolean;
}

export const GET_MARKETS = async ({
  page,
  page_size,
  keyword,
  category,
}: {
  page: number;
  page_size: number;
  keyword: string;
  category: number;
}) => {
  return fetch(
    `${BASE_URL}/companies/?page=${page}&page_size=${page_size}`
  ).then((res) => res.json());
};

export const POST_MARKET = async (data: FormData) => {
  return fetch(`${BASE_URL}/companies/`, {
    method: "POST",
    body: data,
  }).then((res) => res.json);
};

type TGetMarket = {
  id: number;
  name: string;
  phone_number: string;
  promotion: string;
  road_address: string;
};

export interface IGetMarkets extends IPagination {
  results: TGetMarket[];
}
