import { IPagination } from "../CommonApi";

interface IGetNews {
  press: string;
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
  take: boolean;
}

export interface IGetNewsList extends IPagination {
  results: IGetNews[];
}
