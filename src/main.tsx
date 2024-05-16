import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import {GlobalState} from "./state/GlobalState";
import "./index.css";
import * as global_en from "./localization/en/global.json";
import * as global_fa from "./localization/fa/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./GlobalStates/ThemeProvider";
import { DataProvider } from "./GlobalStates/DataProvider";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fa: { global: global_fa },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
