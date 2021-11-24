import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Meta from "../Components/Common/Meta";
import Header from "../Components/Layout/Header/Header";

import { GlobalStyles, defaultTheme } from "../Styles/theme";
import Routes from "./Routes";

const App: React.FC = () => {
	return (
		<>
			<Meta data={{ title: "k-mas", description: "2021 k-mas", locale: "ko" }} />
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles />
					<Header />
					<Routes />
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
