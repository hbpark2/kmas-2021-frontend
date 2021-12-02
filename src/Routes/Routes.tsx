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
import OnlineEvent from "../Screens/Event/components/OnlineEvent";

type TEventRouteArrProps = {
  text: string;
  pathname: string;
  component: React.ReactElement;
  active: boolean;
};

const eventBaseUrl = "/event";

export const eventRouteArr: TEventRouteArrProps[] = [
  {
    text: "크확행 트리 이벤트",
    pathname: `${eventBaseUrl}/tree`,
    component: <TreeEvent />,
    active: true,
  },
  {
    text: "영수증 이벤트",
    pathname: `${eventBaseUrl}/receipt`,
    component: <ReceiptEvent />,
    active: true,
  },
  {
    text: "포토 이벤트",
    pathname: `${eventBaseUrl}/photo`,
    component: <PhotoEvent />,
    active: true,
  },
  {
    text: "온라인 이벤트",
    pathname: `${eventBaseUrl}/online`,
    component: <OnlineEvent />,
    active: true,
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

      {eventRouteArr.map(
        (event) =>
          event.active && (
            <Route
              key={event.pathname}
              exact
              path={event.pathname}
              component={() => event.component}
            />
          )
      )}

      <Route exact path="/live" component={Live} />
      <Route exact path="/news" component={News} />
      <Route exact path="/market" component={Market} />
      <Route exact path="/market/register" component={MarketForm} />
      <Route exact path="/market/modify" component={MarketForm} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
