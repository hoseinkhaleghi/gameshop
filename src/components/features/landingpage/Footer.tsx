import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Button from '../../common/button/button';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("global");

  return (
    <div>
      <footer className=" p-4  border-t-2 ">
        <div className="lg:flex lg:flex-row lg:gap-8">
          <div className="gap-3 lg:flex lg:flex-col md:justify-center ">
            <h1 className=" font-bold text-xl">{t("amazing.messsage")}</h1>
            <p className="font-medium text-sm">{t("footerexplain.messsage")}</p>
            <Link to="tel:+989391515850">
              <button className="rounded-xl bg-red-700 text-xs font-bold h-10 w-72  bg-red  uppercase leading-normal text-neutral-50 ">
                <span className="font-normal text-sm">
                  {t("contactus.messsage")}
                </span>
              </button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row  sm:gap-32 md:gap-16 ">
            <div className="flex  flex-row gap-20 sm:gap-32 md:gap-20">
              <div>
                <h1 className="text-xl font-bold pt-5 ">
                  {t("Services.messsage")}
                </h1>
                <ul className="text-sm pt-2 ">
                  <li className="flex-1">{t("console.messsage")}</li>
                  <li>{t("Disk.messsage")}</li>
                  <li>{t("gameaccount.messsage")}</li>
                  <li>{t("multigamecombo.messsage")}</li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5">
                  {t("Cando.messsage")}
                </h1>
                <ul className="text-sm pt-2 ">
                  <Link to="/about" className="flex flex-row justify-start">
                    <li>{t("about.messsage")}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 pt-10 ">
          <div className="flex gap-2 text-3xl py-3">
            <IoLogoLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>

          <div className="py-3 ">
            <h1
              onClick={() => {
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-bold cursor-pointer"
            >
              {t("Cando.messsage")}
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
