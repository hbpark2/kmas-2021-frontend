import { IPagination } from "../CommonApi";

export interface IGetMarket {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  hompage_link: string;
  phone_number: string;
  crn: string;
  zonecode: string;
  jibun_address: string;
  road_address: string;
  detail_address: string;
  items: string;
  promotion: string;
  exhibition_link: string | null;
  image: string | null;
}

type TGetMarkets = {
  id: number;
  name: string;
  phone_number: string;
  promotion: string;
  road_address: string;
};

export interface IGetMarkets extends IPagination {
  results: TGetMarkets[];
}
