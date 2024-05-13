import Header from "../../components/features/landingpage/Header";
import Products from "../../components/features/landingpage/Products";
import SearchBar from "../../components/features/landingpage/SearchBar";
import Slider from "../../components/features/landingpage/Slider";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../GlobalStates/GlobalContext";

function Landingpage() {
  const { i18n } = useTranslation("global");
  const { isDarkMode } = useDarkMode();

  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className={
        isDarkMode
          ? "text-white bg-black z-50"
          : "bg-white  "
      }
    >
      <Header />
      <Slider />
      <SearchBar />
      <Products />
    </div>
  );
}

export default Landingpage;
