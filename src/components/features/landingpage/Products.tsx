import { useContext, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import styles from "./Products.module.css";
import { useDarkMode } from "../../../GlobalStates/ThemeProvider";
import { DataContext } from "../../../GlobalStates/DataProvider";
import { useTranslation } from "react-i18next";
// import { list } from "../../../list";

function Products() {
  const { datalist, handleFavorite, favoritelist,selectedGameImages , handlePlatformClick } = useContext(DataContext);
  const { isDarkMode } = useDarkMode();
  const { i18n } = useTranslation("global");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); 
  const recordsPerPage = 6;
  const endIndex = currentPage * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;
  const dataForPage = datalist.slice(startIndex, endIndex);
  const npage = Math.ceil(datalist.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log([startIndex,endIndex,recordsPerPage]);
  const prevPage = ()=>{
    if (currentPage !== 1) {
      setCurrentPage( currentPage - 1)
      window.scroll({ top: 800, behavior: "smooth" });
  }}
  const nextPage = ()=>{
    if (currentPage !== npage) {
      setCurrentPage( currentPage + 1)
      window.scroll({ top: 800, behavior: "smooth" });
  }}
  const changePage = (id)=>{
      setCurrentPage(id)
      window.scroll({ top: 800, behavior: "smooth" });
  }
  //-------------------------------------------

  // const [selectedPlatform, setSelectedPlatform] = useState(null);
  // const [] = useState({});
  // const handlePlatformClick = (gameId, platform) => {
  //   setSelectedPlatform(platform);
  //   setSelectedGameImages((prevImages) => ({
  //     ...prevImages,
  //     [gameId]: datalist.find((game) => game.id === gameId).images[platform],
  //   }));
  // };

  return (
    <>
        <div className={styles.cont}>
      {dataForPage.map((item) => (
        <div
          key={item.id}
          className={
            isDarkMode ? "text-black bg-white " : "text-white bg-black"
          }
        >
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img
                src={selectedGameImages[item.id] || item.defaultImage}
                alt={item.title}
              />
            </div>
            <div
              className={
                i18n.language == "en" ? styles.rightdetails : styles.leftdetails
              }
            >
              <div className="flex flex-row justify-between">
                <h3 className="text-wrap">{item.name}</h3>
                <button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                >
                  {favoritelist.some((favItem) => favItem.id === item.id) ? (
                    <div className="text-yellow-500">
                      <MdOutlineFavorite />
                    </div>
                  ) : (
                    <div className="text-yellow-500">
                      <GrFavorite />
                    </div>
                  )}
                </button>
              </div>
              <h1 className="text-wrap hidden lg:flex">{item.story}</h1>
              <div className={styles.size}>
                {item.platform.map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handlePlatformClick(item.id, platform)}
                  >
                    {platform}
                  </button>
                ))}
              </div>
              <button
                onClick={(item) => console.log(item.target.value)}
                className="bg-white  text-black rounded-md"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>
    <nav className="flex flex-row flex-1 w-full items-center justify-center my-16">
        <ul className="flex flex-row gap-2 ">
          <li className="border-2 p-4 cursor-pointer" onClick={prevPage}>
            Prev
          </li>
          {numbers.map((number, index) => (
            <li key={index} className="border-2 p-4 cursor-pointer" onClick={()=>changePage(number)}>
              {number}
            </li>
          ))}
          <li className="border-2  p-4 cursor-pointer" onClick={nextPage}>
            Next
          </li>
        </ul>
      </nav>


    </>
  );
}

export default Products;
