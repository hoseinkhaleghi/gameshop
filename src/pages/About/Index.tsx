import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../GlobalStates/ThemeProvider";

function About() {
  const { isDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation("global");

  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
    //   className={isDarkMode ? "bg-blue-950 text-white " : ""}
    >
      <div className="flex flex-col gap-5 mx-5 lg:pt-16 ">
        <h3
          className={
            isDarkMode
              ? "mt-10 text-4xl font-bold tracking-tight   sm:text-6xl"
              : "mt-10 text-4xl font-bold tracking-tight  sm:text-6xl"
          }
        >
          {t("HeaderAbout.messsage")}
        </h3>
        <p className="mt-6 text-lg leading-8 ">{t("reactrouter.messsage")}</p>
        <p className="mt-6 text-lg leading-8 ">{t("context.messsage")}</p>
        <p className="mt-6 text-lg leading-8 ">{t("i18next.messsage")}</p>
        <p className="mt-6 text-lg leading-8 ">{t("forsearch.messsage")}</p>
        <p className="mt-6 text-lg leading-8 ">{t("forSignupin.messsage")}</p>
        <p className="mt-6 text-lg leading-8 ">{t("forSwiper.messsage")}</p>
      </div>
    </div>
  );
}

export default About;
