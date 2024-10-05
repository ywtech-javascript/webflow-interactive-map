import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

function main() {
    const rootEl = document.getElementById("app");
    const root = createRoot(rootEl);
    root.render(<App />);
}

main();
