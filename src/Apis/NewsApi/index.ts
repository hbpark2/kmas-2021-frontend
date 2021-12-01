import { BASE_URL, commonErrorResponse, commonResponse } from "../CommonApi";

const MARKET_BASE_URL = `${BASE_URL}/news/`;

// * 뉴스 리스트
export const GET_NEWS_LIST = async ({
  page,
  page_size,
}: {
  page: number;
  page_size: number;
}) => {
  return fetch(`${MARKET_BASE_URL}?page=${page}&page_size=${page_size}`)
    .then(commonResponse)
    .catch(commonErrorResponse);
};
