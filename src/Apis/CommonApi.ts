import { UNAUTHORIZED_TEXT } from "../constants";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const errorObjGenerator = ({
  status,
  message,
}: {
  status: number;
  message: string;
}) => {
  return { status, message, results: false };
};

export const commonResponse = async (res: Response) => {
  if (res.status === 200) {
    return res.json();
  } else if (res.status === 401) {
    return errorObjGenerator({
      status: res.status,
      message: UNAUTHORIZED_TEXT,
    });
  }
};

export interface ISuccessProps {
  results: boolean;
  message?: string;
}

export const commonErrorResponse = async (error: Error) => {
  console.log(error);
};

export interface IPagination {
  count: number;
  hasMore: boolean;
}
