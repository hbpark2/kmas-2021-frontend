type TChannel = {
  id: number;
  name: string;
  image: string;
};

export interface ILive {
  id: number;
  channel: TChannel;
  date: string;
  start_time: string;
  end_time: string;
  item: string;
}
