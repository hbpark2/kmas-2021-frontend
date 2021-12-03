import { hydrate, render } from "react-dom";
import App from "./Routes/App";
import { StoreProvider } from "./Context/ContextStore";

const rootElement = document.getElementById("root")! as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(
    <StoreProvider>
      <App />
    </StoreProvider>,
    rootElement
  );
} else {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>,
    rootElement
  );
}
