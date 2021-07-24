import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { CartContextProvider } from "./store/CartContext";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
