import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../GlobalStates/ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
// import Burgermenu from "./Burgermenu";
import "swiper/css";
import "swiper/css/scrollbar";
import { IoMenu } from "react-icons/io5";
// import { VscHome } from "react-icons/vsc";
// import { PiUserSquareThin, PiUsersThreeDuotone } from "react-icons/pi";
// import { CiUser } from "react-icons/ci";

function Header() {
  const { t, i18n } = useTranslation("global");
  const [burger, setBurger] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  function burgerhandler() {
    setBurger(!burger);
  }

  return (
    <div
      // dir={i18n.language == "en" ? "ltr" : "rtl"}
      className={
        isDarkMode
          ? "bg-darkblue text-white w-full z-50 fixed"
          : "bg-white w-full  z-50 fixed"
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative z-20">
        <div className="flex lg:flex-1">
          <Link to="/">
            <span className="text-2xl">Wizard</span>
          </Link>
        </div>
        <div className="lg:flex-1 gap-3 hidden lg:flex lg:gap-x-12">
          <Link to="/about">
            <span className="text-2xl">{t("about.messsage")}</span>
          </Link>
          <button
            className="text-2xl"
            onClick={() => i18n.changeLanguage("fa")}
          >
            {t("Persian.messsage")}
          </button>
          <button
            className="text-2xl"
            onClick={() => i18n.changeLanguage("en")}
          >
            {t("English.messsage")}
          </button>
          <Link to="/dashboard/favorite">
            <span className="text-2xl">{t("favorite.messsage")}</span>
          </Link>

          <div>
            <button onClick={toggleDarkMode} className=" text-3xl">
              {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={burgerhandler}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <IoMenu />
          </button>
        </div>
      </nav>
      {!burger ? (
        ""
      ) : (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className={
              isDarkMode
                ? "absolute h-screen inset-y-0 right-0 z-30 w-full overflow-y-auto bg-darkblue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                : "absolute h-screen inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            }
          >
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5 flex flex-row items-center gap-2">
                <Link to="/">
                  <span className="text-2xl ">Wizard</span>
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  onClick={burgerhandler}
                  className="-m-2.5 rounded-md p-2.5 "
                >
                  <IoMenu />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-gray-900">
                    <Link to="/">
                      <span className="text-2xl">{t("about.messsage")}</span>
                    </Link>
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-gray-900">
                    <button
                      className="text-2xl"
                      onClick={() => i18n.changeLanguage("fa")}
                    >
                      {t("Persian.messsage")}
                    </button>
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">
                    <button
                      className="text-2xl"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      {t("English.messsage")}
                    </button>
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">
                    <Link to="/dashboard/favorite">
                      <span className="text-2xl">{t("favorite.messsage")}</span>
                    </Link>
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">
                    <button onClick={toggleDarkMode} className=" text-3xl">
                      {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="fixed top right-0 left-0 z-50 backdrop-blur-md shadow "></header>
    </div>
  );
}
export default Header;
