import { useContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Meta from "../Components/Common/Meta";
import Header from "../Components/Layout/Header/Header";
import { CurrentContext } from "../Context/ContextStore";

import { GlobalStyles, defaultTheme } from "../Styles/theme";
import Routes from "./Routes";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const App: React.FC = () => {
	const { modalOpen } = useContext(CurrentContext);

	// MODAL - ARIA-HIDDEN ON/OFF
	useEffect(() => {
		const mainTarget = document.querySelector("main")! as HTMLElement;
		const headerTarget = document.querySelector("header")! as HTMLElement;
		if (modalOpen) {
			document.body?.classList.remove("overflow-unset");
			document.body?.classList.add("overflow-hidden");
			mainTarget?.setAttribute("aria-hidden", "true");
			headerTarget?.setAttribute("aria-hidden", "true");
		} else {
			document.body?.classList.remove("overflow-hidden");
			document.body?.classList.add("overflow-unset");
			mainTarget?.setAttribute("aria-hidden", "false");
			headerTarget?.setAttribute("aria-hidden", "false");
		}
	}, [modalOpen]);

	return (
		<QueryClientProvider client={queryClient}>
			<Meta data={{ title: "k-mas", description: "2021 k-mas", locale: "ko" }} />
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles />
					<Header />
					<Routes />
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
