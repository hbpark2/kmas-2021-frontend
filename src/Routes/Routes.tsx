import { Route, Switch, useLocation } from "react-router";
import useGoogleAnalytics from "../Hook/useGoogleAnalytics";
import Event from "../Screens/Event/Event";
import Exhibition from "../Screens/Exhibition/Exhibition";
import Home from "../Screens/Home/Home";
import Intro from "../Screens/Intro/Intro";
import Live from "../Screens/Live/Live";
import MarketForm from "../Screens/MarketForm";
import Market from "../Screens/Market/Market";

import News from "../Screens/News/News";
import { useEffect } from "react";
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
			<Route exact path="/event" component={Event} />
			<Route exact path="/live" component={Live} />
			<Route exact path="/news" component={News} />
			<Route exact path="/market" component={Market} />
			<Route exact path="/market/register" component={MarketForm} />
			<Route exact path="/market/modify" component={MarketForm} />
		</Switch>
	);
};

export default Routes;
