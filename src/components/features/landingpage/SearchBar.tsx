import { list } from "../../../list";
import RangeSlider from "./RangeSlider";
import SearchInput from "./SearchInput";
import { useDarkMode } from "../../../GlobalStates/ThemeProvider";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../GlobalStates/DataProvider";

function SearchBar() {
  const { datalist, setFinalsearch, setDatalist, finalsearch } =
    useContext(DataContext);

  // const Years = list.map((item) => item.Year);
  // const Year = [...new Set(Years)].sort();
  // const MinYear = Math.min(...Years);
  // const MaxYear = Math.max(...Years);
  // console.log("big:" + MaxYear + "min" + MinYear);
  // const [currentyear , setCurrentyear] = useState("")
  const Companies = list.map((item) => item.company);
  const Company = [...new Set([...Companies, "all"])].sort();
  const genres = list.map((item) => item.genre);
  const genre = [...new Set([...genres, "all"])].sort();
  const [finalgenre, setFinalgenre] = useState("all");
  const [finalcompany, setFinalcompany] = useState("all");
  const [finalrange, setFinalrange] = useState([]);
  const [finalinput, setFinalinput] = useState([]);
  const { isDarkMode } = useDarkMode();
  const { i18n } = useTranslation("global");
  setFinalsearch(finalinput);
  // setDatalist(finalsearch);

  // useEffect(() => {
  // }, [finalsearch]);
if (finalsearch.length === 0) {
  setDatalist(list)
  
}else if (finalsearch.length !== 0){
  setDatalist(finalsearch)
}
  console.log(finalinput);
  console.log(finalrange);

  // const getyaer = (e)=> setCurrentyear(e.target.value)
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
          <p>جستجو</p>
          <div className="text-red-400 text-5xl ">
            <MdOutlineContentPasteSearch />
          </div>
        </div>
        <div className="w-11/12 flex flex-col p-10">
          <SearchInput finalinput={finalinput} setFinalinput={setFinalinput} />
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10 mt-6">
            <label htmlFor="company">سازنده</label>
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
            <label htmlFor="genre">ژانر</label>
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

            <label htmlFor="Year">سال ساخت</label>
            <RangeSlider setFinalrange={setFinalrange} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
