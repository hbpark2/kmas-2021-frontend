import { BASE_URL, commonErrorResponse, commonResponse } from "../CommonApi";

const LIVE_BASE_URL = `${BASE_URL}/lives/`;

// * 라이브 리스트
export const GET_LIVE_LIST = async (date: string) => {
  return fetch(`${LIVE_BASE_URL}?date=${date}`)
    .then(commonResponse)
    .catch(commonErrorResponse);
};
