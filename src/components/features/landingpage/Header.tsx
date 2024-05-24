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
import { useShoppingCart } from "../../../GlobalStates/ShoppingCartContext";
// import { VscHome } from "react-icons/vsc";
// import { PiUserSquareThin, PiUsersThreeDuotone } from "react-icons/pi";
// import { CiUser } from "react-icons/ci";

function Header() {
  const { t, i18n } = useTranslation("global");
  const [burger, setBurger] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { openCart, cartQuantity } = useShoppingCart();

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
        <div className="flex lg:flex-1 gap-6">
          <Link to="/">
            <span className="text-2xl">{t("Cando.messsage")}</span>
          </Link>

          <Link to="/signUp">
            <span className="text-2xl ">{t("SignUp.messsage")}</span>
          </Link>
          <Link to="/signin">
            <span className="text-2xl ">{t("SignIn.messsage")}</span>
          </Link>
        </div>
        <div className="lg:flex-1 gap-3 hidden lg:flex lg:gap-x-12">
          <Link to="/about">
            <span className="text-2xl">{t("about.messsage")}</span>
          </Link>
          {i18n.language === "fa" ? (
            <button
              className="text-2xl"
              onClick={() => i18n.changeLanguage("en")}
            >
              {t("English.messsage")}
            </button>
          ) : (
            <button
              className="text-2xl"
              onClick={() => i18n.changeLanguage("fa")}
            >
              {t("Persian.messsage")}
            </button>
          )}
          <Link to="/dashboard/favorite">
            <span className="text-2xl">{t("Dashboard.messsage")}</span>
          </Link>
          <div>
            <button onClick={toggleDarkMode} className=" text-3xl">
              {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>

        <div className="flex">
          {cartQuantity > 0 && (
            <button onClick={openCart} className="rounded-md w-8 h-8 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-md bg-red-400 w-5 h-5 
                absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 "
              >
                {cartQuantity}
              </div>
            </button>
          )}
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
                  <span className="text-2xl ">{t("Cando.messsage")}</span>
                </Link>
                <Link to="/signUp">
                  <span className="text-2xl ">{t("SignUp.messsage")}</span>
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
                    <Link to="/about">
                      <span className="text-2xl">{t("about.messsage")}</span>
                    </Link>
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-gray-900">
                    {i18n.language === "fa" ? (
                      <button
                        className="text-2xl"
                        onClick={() => i18n.changeLanguage("en")}
                      >
                        {t("English.messsage")}
                      </button>
                    ) : (
                      <button
                        className="text-2xl"
                        onClick={() => i18n.changeLanguage("fa")}
                      >
                        {t("Persian.messsage")}
                      </button>
                    )}
                  </div>
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">
                    <Link to="/dashboard/favorite">
                      <span className="text-2xl">{t("Dashboard.messsage")}</span>
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
