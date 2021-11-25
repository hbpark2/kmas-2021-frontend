import { Route, Switch } from "react-router";
import useGoogleAnalytics from "../Hook/useGoogleAnalytics";
import Event from "../Screens/Event/Event";
import Exhibition from "../Screens/Exhibition/Exhibition";
import Home from "../Screens/Home/Home";
import Intro from "../Screens/Intro/Intro";
import Live from "../Screens/Live/Live";
import Market from "../Screens/Market/Market";
import News from "../Screens/News/News";
const Routes = () => {
	useGoogleAnalytics();

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/intro" component={Intro} />
			<Route exact path="/exhibition" component={Exhibition} />
			<Route exact path="/event" component={Event} />
			<Route exact path="/live" component={Live} />
			<Route exact path="/news" component={News} />
			<Route exact path="/market" component={Market} />
		</Switch>
	);
};

export default Routes;
