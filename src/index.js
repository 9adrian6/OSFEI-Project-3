import * as ReactDOM from "react-dom/client";
import App from "./App";
import { StorageProvider } from "./hooks/StorageContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <StorageProvider>
    <App />
  </StorageProvider>
);
