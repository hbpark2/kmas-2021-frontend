import ReactDOM from "react-dom";
import { StoreProvider } from "./Context/ContextStore";
import App from "./Routes/App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
