import { BASE_URL, commonErrorResponse, commonResponse } from "../CommonApi";

const MARKET_BASE_URL = `${BASE_URL}/companies/`;

// * 마켓 리스트
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
    `${MARKET_BASE_URL}?page=${page}&page_size=${page_size}&category=${category}&keyword=${keyword}`
  )
    .then(commonResponse)
    .catch(commonErrorResponse);
};

// * 마켓 디테일
export const GET_MARKET = async ({ marketId }: { marketId?: number }) => {
  if (marketId) {
    return fetch(`${MARKET_BASE_URL}${marketId}/`)
      .then(commonResponse)
      .catch(commonErrorResponse);
  }
};

// * 마켓 등록
export const POST_MARKET = async (data: FormData) => {
  return fetch(`${MARKET_BASE_URL}`, {
    method: "POST",
    body: data,
  })
    .then(commonResponse)
    .catch(commonErrorResponse);
};

// * 패스워드 체크
export const POST_PWD_CHECK = async (id: number, data: FormData) => {
  return fetch(`${MARKET_BASE_URL}${id}/password_check/`, {
    method: "POST",
    body: data,
  })
    .then(commonResponse)
    .catch(commonErrorResponse);
};

// * 마켓 업데이트
export const PUT_MARKET = async (id: number, data: FormData) => {
  return fetch(`${MARKET_BASE_URL}${id}/`, { method: "PUT", body: data })
    .then(commonResponse)
    .catch(commonErrorResponse);
};

// * 마켓 삭제
export const DELETE_MARKET = async (id: number, data: FormData) => {
  return fetch(`${MARKET_BASE_URL}${id}/`, { method: "DELETE", body: data })
    .then(commonResponse)
    .catch(commonErrorResponse);
};
