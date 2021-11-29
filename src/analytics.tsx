// 구글 통계
import ReactGA from "react-ga";
import { TRACKING_ID } from "./constants";

const initGA = () => {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  console.log(isDev);
  ReactGA.initialize(TRACKING_ID, { debug: true });
};

type sendEventType = (T: ParamsType) => void;
type ParamsType = {
  category: string | any;
  action: string | any;
  label: string | any;
};

const sendEvent: sendEventType = ({ category, action, label }) => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

const sendPageview = (path: string) => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

export default {
  initGA,
  sendEvent,
  sendPageview,
};
