import * as yup from "yup";
import {
  REQUIRED_TEXT,
  VALID_EVENT_LINK,
  VALID_LINK_TEXT,
  VALID_NUMBER_TEXT,
  VALID_PHONE_NUMBER_4_TEXT,
} from "../../../../../constants";
import Utils from "../../../../../Utils/Utils";

export const quizFormValidSchema = yup.object().shape(
  {
    name: yup.string().required(REQUIRED_TEXT),
    phone_number: yup
      .string()
      .required(REQUIRED_TEXT)
      .matches(/^[0-9]+$/, VALID_NUMBER_TEXT)
      .min(4, VALID_PHONE_NUMBER_4_TEXT)
      .max(4, VALID_PHONE_NUMBER_4_TEXT),
    answer: yup.string().required(REQUIRED_TEXT),
    url_1: yup.string().when(["url_2", "url_3"], {
      is: (url_2: string, url_3: string) => !url_2 && !url_3,
      then: yup
        .string()
        .required(VALID_EVENT_LINK)
        .test("is-link-test", VALID_LINK_TEXT, (value) => {
          return Utils.checkURL(value);
        }),
      otherwise: yup.string().test("is-link-test", VALID_LINK_TEXT, (value) => {
        if (!value) return true;
        return Utils.checkURL(value);
      }),
    }),
    url_2: yup.string().when(["url_1", "url_3"], {
      is: (url_1: string, url_3: string) => !url_1 && !url_3,
      then: yup
        .string()
        .required(VALID_EVENT_LINK)
        .test("is-link-test", VALID_LINK_TEXT, (value) => {
          return Utils.checkURL(value);
        }),
      otherwise: yup.string().test("is-link-test", VALID_LINK_TEXT, (value) => {
        if (!value) return true;
        return Utils.checkURL(value);
      }),
    }),
    url_3: yup.string().when(["url_1", "url_2"], {
      is: (url_1: string, url_2: string) => !url_1 && !url_2,
      then: yup
        .string()
        .required(VALID_EVENT_LINK)
        .test("is-link-test", VALID_LINK_TEXT, (value) => {
          return Utils.checkURL(value);
        }),
      otherwise: yup.string().test("is-link-test", VALID_LINK_TEXT, (value) => {
        if (!value) return true;
        return Utils.checkURL(value);
      }),
    }),
  },
  [
    ["url_2", "url_3"],
    ["url_1", "url_3"],
    ["url_1", "url_2"],
  ]
);

export const inputArr = [
  {
    text: "성명",
    name: "name",
    type: "text",
    placeholder: "한글만 기입 가능합니다 (5자 내외)",
  },
  {
    text: "핸드폰번호 4자리",
    name: "phone_number",
    type: "text",
    placeholder: "중복자 구분을 위해 뒷번호 4자리를 남겨주세요",
  },
  {
    text: "퀴즈 정답",
    name: "answer",
    type: "text",
    placeholder: "정답을 입력해 주세요 (정답만 입력해 주세요)",
  },
  { text: "link", name: "link" },
];

export type QuizFormValues = {
  name: string;
  phone_number: string;
  answer: string;
  url_1: string;
  url_2: string;
  url_3: string;
  [key: string]: string;
};
