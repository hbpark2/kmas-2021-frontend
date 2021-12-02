import * as yup from "yup";
import { REQUIRED_TEXT } from "../../constants";
import Utils from "../../Utils/Utils";

export const createValidSchema = yup
  .object()
  .shape({
    category: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-category-test", REQUIRED_TEXT, (value) => {
        return value !== "0";
      }),
    name: yup.string().trim().required(REQUIRED_TEXT),
    hompage_link: yup
      .string()
      .trim()
      .required(REQUIRED_TEXT)
      .test("is-link-test", "올바른 링크를 입력해주세요.", (value) => {
        return Utils.checkURL(value);
      }),
    phone_number: yup
      .string()
      .required(REQUIRED_TEXT)
      .test(
        "is-phonenumber-test",
        "올바른 핸드폰 번호를 입력해주세요.",
        (value) => {
          return Utils.checkPhoneNumber(value);
        }
      ),
    password: yup
      .string()
      .min(4, "비밀번호는 4자리 이상 12자리 이하로 작성해주세요.")
      .max(12, "비밀번호는 4자리 이상 12자리 이하로 작성해주세요.")
      .required(REQUIRED_TEXT),
    crn: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-crn-test", "올바른 사업자 번호를 입력해주세요.", (value) => {
        return Utils.checkCrn(value);
      }),
    zonecode: yup.string().required(REQUIRED_TEXT),
    jibun_address: yup.string().required(REQUIRED_TEXT),
    road_address: yup.string().required(REQUIRED_TEXT),
    detail_address: yup.string().trim().required(REQUIRED_TEXT),
    items: yup.string().trim().required(REQUIRED_TEXT),
    promotion: yup.string().trim().required(REQUIRED_TEXT),
    exhibition_link: yup
      .string()
      .trim()
      .test("is-link-test", "올바른 링크를 입력해주세요.", (value) => {
        return Utils.checkURL(value);
      }),
  })
  .required();

export const modifyValidSchema = yup
  .object()
  .shape({
    category: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-category-test", REQUIRED_TEXT, (value) => {
        return value !== "0";
      }),
    name: yup.string().trim().required(REQUIRED_TEXT),
    hompage_link: yup.string().trim().required(REQUIRED_TEXT),
    phone_number: yup
      .string()
      .required(REQUIRED_TEXT)
      .test(
        "is-phonenumber-test",
        "올바른 핸드폰 번호를 입력해주세요.",
        (value) => {
          return Utils.checkPhoneNumber(value);
        }
      ),
    password: yup
      .string()
      .nullable()
      .notRequired()
      .test(
        "is-password-test",
        "비밀번호는 4자리 이상 12자리 이하로 작성해주세요.",
        (value?: string | null) => {
          if (value) {
            return value.length >= 4 && value.length <= 12;
          }
          return true;
        }
      ),
    crn: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-crn-test", "올바른 사업자 번호를 입력해주세요.", (value) => {
        return Utils.checkCrn(value);
      }),
    zonecode: yup.string().required(REQUIRED_TEXT),
    jibun_address: yup.string().required(REQUIRED_TEXT),
    road_address: yup.string().required(REQUIRED_TEXT),
    detail_address: yup.string().trim().required(REQUIRED_TEXT),
    items: yup.string().trim().required(REQUIRED_TEXT),
    promotion: yup.string().trim().required(REQUIRED_TEXT),
    exhibition_link: yup
      .string()
      .trim()
      .test("is-link-test", "올바른 링크를 입력해주세요.", (value) => {
        return Utils.checkURL(value);
      }),
  })
  .required();

export const inputArr = [
  {
    text: "기업명",
    name: "name",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "사업자 번호",
    name: "crn",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "홈페이지",
    name: "hompage_link",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "기업 전화번호",
    name: "phone_number",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "주소",
    name: "address",
  },
  {
    text: "주요 판매품목",
    name: "items",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "프로모션 내용",
    name: "promotion",
    type: "text",
    placeholder: "필수 입력사항입니다",
  },
  {
    text: "기획전 링크",
    name: "exhibition_link",
    type: "text",
    placeholder: "",
  },
  {
    text: "이미지",
    name: "image",
  },
  {
    text: "비밀번호",
    name: "password",
    type: "password",
    placeholder: "필수 입력사항입니다",
  },
];

export const categoryArr = [
  { text: "전체", value: 0 },
  { text: "생활/가구/주방", value: 1 },
  { text: "뷰티", value: 2 },
  { text: "식품", value: 3 },
  { text: "가전/디지털", value: 4 },
  { text: "스포츠/레저/자동차", value: 5 },
  { text: "패션/잡화", value: 6 },
  { text: "문구/오피스", value: 7 },
  { text: "출산/유아동", value: 8 },
  { text: "기타", value: 9 },
];

export type MarketFormValues = {
  category: number;
  name: string;
  hompage_link: string;
  phone_number: string;
  original_password: string;
  password: string;
  crn: string;
  zonecode: string;
  jibun_address: string;
  road_address: string;
  detail_address: string;
  items: string;
  promotion: string;
  exhibition_link: string | null;
  image: File[] | null;
  [key: string]: any;
};
