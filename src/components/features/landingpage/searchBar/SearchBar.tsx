import { list } from "../../../../list";
import RangeSlider from "./RangeSlider";
import SearchInput from "./SearchInput";
import { useDarkMode } from "../../../../GlobalStates/ThemeProvider";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../GlobalStates/DataProvider";

function SearchBar() {
  const { t } = useTranslation("global");
  const { setFinalsearch, finalrange } = useContext(DataContext);

  const Companies = list.map((item) => item.company);
  const Company = [...new Set([...Companies, "all"])].sort();
  const genres = list.map((item) => item.genre);
  const genre = [...new Set([...genres, "all"])].sort();
  const { isDarkMode } = useDarkMode();
  const { i18n } = useTranslation("global");

  const [finalgenre, setFinalgenre] = useState("all");
  const [finalcompany, setFinalcompany] = useState("all");
  const [finalinput, setFinalinput] = useState([]);
  const MinYear = Math.min(...finalrange);
  const MaxYear = Math.max(...finalrange);
  const sortedrange = finalrange.sort((a, b) => a - b);

  //Searching
  useEffect(() => {
    if (
      finalinput.length !== 0 &&
      finalcompany === "all" &&
      finalgenre === "all"
    ) {
      setFinalsearch(finalinput);
    } else if (
      finalinput.length === 0 &&
      finalcompany === "all" &&
      finalgenre !== "all"
    ) {
      setFinalsearch(
        list.filter((item) => {
          return (
            item.genre.includes(finalgenre) &&
            item.Year >= sortedrange[0] &&
            item.Year <= sortedrange[1]
          );
        })
      );
    } else if (
      finalinput.length === 0 &&
      finalcompany !== "all" &&
      finalgenre === "all"
    ) {
      setFinalsearch(
        list.filter((item) => {
          return (
            item.company.includes(finalcompany) &&
            item.Year >= sortedrange[0] &&
            item.Year <= sortedrange[1]
          );
        })
      );
    } else if (
      finalinput.length === 0 &&
      finalcompany !== "all" &&
      finalgenre !== "all"
    ) {
      setFinalsearch(
        list.filter((item) => {
          return (
            item.company.includes(finalcompany) &&
            item.genre.includes(finalgenre) &&
            item.Year >= sortedrange[0] &&
            item.Year <= sortedrange[1]
          );
        })
      );
    } else if (
      finalinput.length === 0 &&
      finalcompany === "all" &&
      finalgenre === "all"
    ) {
      setFinalsearch(
        list.filter((item) => {
          return item.Year >= sortedrange[0] && item.Year <= sortedrange[1];
        })
      );
    }
  }, [finalinput, finalcompany, finalgenre, MinYear, MaxYear, sortedrange]);

  //----------------------------------------

  return (
    <>
      <section
        className={
          isDarkMode
            ? "text-white bg-gray-800  lg:flex flex-row rounded-md  m-5 "
            : "text-black bg-stone-50 border-2 lg:flex flex-row rounded-md  m-5 "
        }
      >
        <div
          className={
            i18n.language == "en"
              ? isDarkMode
                ? "text-white bg-gray-900 p-10 lg:flex flex-col rounded-br-full gap-4 justify-center items-center rounded-md hidden "
                : "text-black bg-stone-200 p-10  lg:flex flex-col rounded-br-full gap-4 justify-center items-center rounded-md hidden  "
              : isDarkMode
              ? "text-white bg-gray-900 p-10 lg:flex flex-col rounded-bl-full gap-4 justify-center items-center rounded-md hidden "
              : "text-black bg-stone-200 p-10  lg:flex flex-col rounded-bl-full gap-4 justify-center items-center rounded-md hidden  "
          }
        >
          <p>
          {t("forSearch.messsage")}
          </p>
          <div className="text-red-400 text-5xl ">
            <MdOutlineContentPasteSearch />
          </div>
        </div>
        <div className="w-11/12 flex flex-col p-10">
          <SearchInput setFinalinput={setFinalinput} />
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10 mt-6">
            <label htmlFor="company">{t("Developer.messsage")}</label>
            <select
              onChange={(e) => setFinalcompany(e.target.value)}
              name="company"
              id="company"
              value={finalcompany}
              className="w-72 text-black"
            >
              {Company.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <label htmlFor="genre">{t("Genre.messsage")}</label>
            <select
              onChange={(e) => setFinalgenre(e.target.value)}
              value={finalgenre}
              name="genre"
              id="genre"
              className="w-72 text-black"
            >
              {genre.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <label htmlFor="Year">{t("Year.messsage")}</label>
            <RangeSlider  />
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
