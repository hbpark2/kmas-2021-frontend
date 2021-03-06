import * as yup from "yup";
import {
  REQUIRED_TEXT,
  VALID_CRN_TEXT,
  VALID_LINK_TEXT,
  VALID_PASSWORD_TEXT,
  VALID_PHONE_NUMBER_TEXT,
} from "../../constants";
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
      .test("is-link-test", VALID_LINK_TEXT, (value) => {
        return Utils.checkURL(value);
      }),
    phone_number: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-phonenumber-test", VALID_PHONE_NUMBER_TEXT, (value) => {
        return Utils.checkPhoneNumber(value);
      }),
    password: yup
      .string()
      .min(4, VALID_PASSWORD_TEXT)
      .max(12, VALID_PASSWORD_TEXT)
      .required(REQUIRED_TEXT),
    crn: yup
      .string()
      .required(REQUIRED_TEXT)
      .test("is-crn-test", VALID_CRN_TEXT, (value) => {
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
      .test("is-link-test", VALID_LINK_TEXT, (value) => {
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
      .test("is-phonenumber-test", VALID_PHONE_NUMBER_TEXT, (value) => {
        return Utils.checkPhoneNumber(value);
      }),
    password: yup
      .string()
      .nullable()
      .notRequired()
      .test(
        "is-password-test",
        VALID_PASSWORD_TEXT,
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
      .test("is-crn-test", VALID_CRN_TEXT, (value) => {
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
      .test("is-link-test", "????????? ????????? ??????????????????.", (value) => {
        return Utils.checkURL(value);
      }),
  })
  .required();

export const inputArr = [
  {
    text: "?????????",
    name: "name",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "????????? ??????",
    name: "crn",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "????????????",
    name: "hompage_link",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "?????? ????????????",
    name: "phone_number",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "??????",
    name: "address",
  },
  {
    text: "?????? ????????????",
    name: "items",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "???????????? ??????",
    name: "promotion",
    type: "text",
    placeholder: "?????? ?????????????????????",
  },
  {
    text: "????????? ??????",
    name: "exhibition_link",
    type: "text",
    placeholder: "",
  },
  {
    text: "?????????",
    name: "image",
  },
  {
    text: "????????????",
    name: "password",
    type: "password",
    placeholder: "?????? ?????????????????????",
  },
];

export const categoryArr = [
  { text: "??????", value: 0 },
  { text: "??????/??????/??????", value: 1 },
  { text: "??????", value: 2 },
  { text: "??????", value: 3 },
  { text: "??????/?????????", value: 4 },
  { text: "?????????/??????/?????????", value: 5 },
  { text: "??????/??????", value: 6 },
  { text: "??????/?????????", value: 7 },
  { text: "??????/?????????", value: 8 },
  { text: "??????", value: 9 },
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
