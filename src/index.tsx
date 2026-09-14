import App from "@/components/App";
import cssGlobal from "@/css/global.css";
import { render } from "preact";

// Add global styles
GM_addStyle(cssGlobal);

// Mount the app
const appWrapper = document.createElement("div");
document.body.appendChild(appWrapper);
render(<App />, appWrapper);
