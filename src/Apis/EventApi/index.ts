import { BASE_URL, commonErrorResponse, commonResponse } from "../CommonApi";

const EVENT_BASE_URL = `${BASE_URL}/events/`;

// * 퀴즈 이벤트 등록
export const POST_QUIZ = async (data: FormData) => {
  return fetch(`${EVENT_BASE_URL}quiz/`, {
    method: "POST",
    body: data,
  })
    .then(commonResponse)
    .catch(commonErrorResponse);
};

// * 챌린지 참여 리스트
export const GET_CHALLANGE_LIST = async () => {
  return fetch(`${EVENT_BASE_URL}challange/`)
    .then(commonResponse)
    .catch(commonErrorResponse);
};
