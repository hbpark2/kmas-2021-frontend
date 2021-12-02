import { useContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Meta from "../Components/Common/Meta";
import Footer from "../Components/Layout/Footer/Footer";
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
	const { modalOpen, menuOpen } = useContext(CurrentContext);

	// MODAL - ARIA-HIDDEN ON/OFF
	useEffect(() => {
		const mainTarget = document.querySelector("main")! as HTMLElement;
		const headerTarget = document.querySelector("nav")! as HTMLElement;
		if (modalOpen || menuOpen) {
			document.body?.classList.remove("overflow-unset");
			document.body?.classList.add("overflow-hidden");
			mainTarget?.setAttribute("aria-hidden", "true");
		} else {
			document.body?.classList.remove("overflow-hidden");
			document.body?.classList.add("overflow-unset");
			mainTarget?.setAttribute("aria-hidden", "false");
		}

		if (menuOpen) {
			headerTarget?.setAttribute("aria-hidden", "false");
		} else {
			headerTarget?.setAttribute("aria-hidden", "true");
		}
	}, [modalOpen, menuOpen]);

	return (
		<QueryClientProvider client={queryClient}>
			<Meta data={{ title: "K-MAS 라이브마켓", description: "K-MAS 라이브마켓", locale: "ko" }} />
			<BrowserRouter>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles />
					<Header />
					<Routes />
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
