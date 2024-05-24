import { useTranslation } from "react-i18next";
import { useDarkMode } from "./GlobalStates/ThemeProvider";
import Router from "./routes/routes";
import React from "react";

function App() {
  const { i18n } = useTranslation("global");
  const { isDarkMode } = useDarkMode();

  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className={isDarkMode ? "text-white bg-darkblue z-50 w-full h-full" : "bg-white  "}
    >
      <Router />
    </div>
  );
}

export default App;
