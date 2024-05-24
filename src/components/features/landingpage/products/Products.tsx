import { SetStateAction, useContext, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import styles from "./Products.module.css";
import { useDarkMode } from "../../../../GlobalStates/ThemeProvider";
import { DataContext } from "../../../../GlobalStates/DataProvider";
import { useTranslation } from "react-i18next";
import { useShoppingCart } from "../../../../GlobalStates/ShoppingCartContext";
import { Link } from "react-router-dom";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

function Products() {
  const {
    datalist,
    handleFavorite,
    favoritelist,
    selectedGameImages,
    handlePlatformClick,
  } = useContext(DataContext);
  //-----------------------------------
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  // const quantity = getItemQuantity();
  // console.log(quantity)
  //------------------------------------
  const { isDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation("global");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const endIndex = currentPage * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;
  const dataForPage = datalist.slice(startIndex, endIndex);
  const npage = Math.ceil(datalist.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scroll({ top: 800, behavior: "smooth" });
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      window.scroll({ top: 800, behavior: "smooth" });
    }
  };
  const changePage = (id: SetStateAction<number>) => {
    setCurrentPage(id);
    window.scroll({ top: 800, behavior: "smooth" });
  };
  //-------------------------------------------

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
                  i18n.language == "en"
                    ? styles.rightdetails
                    : styles.leftdetails
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
                <Link to={`/products/${item.name}`}>
                  <div className="text-blue-500 flex flex-row gap-4">
                  <BiSolidMessageSquareDetail />
                  <p>{t("Details.messsage")}</p>
                  </div>
                </Link>
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

                <div className="">
                  {getItemQuantity(item.id) === 0 ? (
                    <div className={styles.size}>
                      <button
                        className="w-100"
                        onClick={() => increaseCartQuantity(item.id)}
                      >
                        {t("AddToCart.messsage")}
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center flex-col gap-1">
                      <div className="flex items-center justify-center gap-4">
                        <button
                          className="border-2 cursor-pointer  
                          opacity-50 font-bold px-4 hover:opacity-100 
                          hover:border-blue-400 hover:text-blue-400"
                          onClick={() => decreaseCartQuantity(item.id)}
                        >
                          -
                        </button>
                        <div className="gap-2 flex ">
                          <span className="font-semibold">
                            {getItemQuantity(item.id)}
                          </span>
                          {t("InCart.messsage")}
                        </div>
                        <button
                          className="border-2 cursor-pointer  
                          opacity-50 font-bold px-4 hover:opacity-100 
                          hover:border-green-400 hover:text-green-400"
                          onClick={() => increaseCartQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="border-2 cursor-pointer  
                        opacity-50 font-bold px-4 hover:opacity-100 
                        hover:border-red-400 hover:text-red-400"
                        onClick={() => removeFromCart(item.id)}
                      >
                        {t("Remove.messsage")}
                      </button>
                    </div>
                  )}
                </div>
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
            <li
              key={index}
              className="border-2 p-4 cursor-pointer"
              onClick={() => changePage(number)}
            >
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
