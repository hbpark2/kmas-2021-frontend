import { Redirect, Route, Switch, useLocation } from "react-router";
import useGoogleAnalytics from "../Hook/useGoogleAnalytics";
import Exhibition from "../Screens/Exhibition/Exhibition";
import Home from "../Screens/Home/Home";
import Intro from "../Screens/Intro/Intro";
import Live from "../Screens/Live/Live";
import MarketForm from "../Screens/MarketForm";
import Market from "../Screens/Market/Market";

import News from "../Screens/News/News";
import { useEffect } from "react";
import TreeEvent from "../Screens/Event/components/TreeEvent";
import ReceiptEvent from "../Screens/Event/components/ReceiptEvent";
import PhotoEvent from "../Screens/Event/components/PhotoEvent";
import QuizEvent from "../Screens/Event/components/QuizEvent/QuizEvent";
import ChallangeEvent from "../Screens/Event/components/ChallangeEvent";
import Event from "../Screens/Event/Event";
import Prized from "../Screens/Prized/Prized";

type TEventRouteArrProps = {
  text: string;
  pathname: string;
  component: React.ReactElement;
  active: boolean;
  icon: string;
  iconActive: string;
};

const eventBaseUrl = "/event";

export const eventRouteArr: TEventRouteArrProps[] = [
  {
    text: "EVENT 01<br />영상 퀴즈 이벤트",
    pathname: `${eventBaseUrl}/quiz`,
    component: <QuizEvent />,
    active: true,
    icon: "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png",
    iconActive:
      "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png",
  },
  {
    text: "EVENT 02<br />크확행 챌린지",
    pathname: `${eventBaseUrl}/challange`,
    component: <ChallangeEvent />,
    active: true,
    icon: "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png",
    iconActive:
      "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png",
  },
  {
    text: "현장 이벤트1<br />크확행 트리 EVENT",
    pathname: `${eventBaseUrl}/tree`,
    component: <TreeEvent />,
    active: true,
    icon: "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon.png",
    iconActive:
      "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon-active.png",
  },
  {
    text: "현장 이벤트2<br />영수증 응모 EVENT",
    pathname: `${eventBaseUrl}/receipt`,
    component: <ReceiptEvent />,
    active: true,
    icon: "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon.png",
    iconActive:
      "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon-active.png",
  },
  {
    text: "현장 이벤트3<br />크확행 포토 EVENT",
    pathname: `${eventBaseUrl}/photo`,
    component: <PhotoEvent />,
    active: true,
    icon: "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon.png",
    iconActive:
      "https://thegn.speedgabia.com/kmas-2021/event/event-nav-snow-icon-active.png",
  },
];

const Routes = () => {
  const location = useLocation();
  useGoogleAnalytics();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/intro" component={Intro} />
      <Route exact path="/exhibition" component={Exhibition} />
      <Route exact path="/event/quiz" component={Event} />
      <Route exact path="/event/challange" component={Event} />
      <Route exact path="/event/tree" component={Event} />
      <Route exact path="/event/receipt" component={Event} />
      <Route exact path="/event/photo" component={Event} />
      {/* {eventRouteArr.map(
        (event) =>
          event.active && (
            <Route
              exact
              path={event.pathname}
              component={() => event.component}
            />
          )
      )} */}

      <Route exact path="/live" component={Live} />
      <Route exact path="/news" component={News} />
      <Route exact path="/market" component={Market} />
      <Route exact path="/market/register" component={MarketForm} />
      <Route exact path="/market/modify" component={MarketForm} />
      <Route exact path="/prized" component={Prized} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
