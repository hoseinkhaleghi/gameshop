import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { useDarkMode } from "../../../../GlobalStates/ThemeProvider";
import { DataContext } from "../../../../GlobalStates/DataProvider";
import { useTranslation } from "react-i18next";
import { useShoppingCart } from "../../../../GlobalStates/ShoppingCartContext";
import { Link } from "react-router-dom";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

function DetailProducts() {
  const { name } = useParams();
  const {
    datalist,
    handleFavorite,
    favoritelist,
    selectedGameImages,
    handlePlatformClick,
  } = useContext(DataContext);

  //   const details = datalist.find((item) => {
  //     console.log(id)
  //     console.log(1)
  //     return item.id === Number(id)});
  //   console.log(details)
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

  //-------------------------------------------

  return (
    <>
      <div className="border-2  p-10">
        {datalist
          .filter((item) => item.name === name)
          .map((item) => (
            <div key={item.id}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center flex-col gap-1">
                  <img
                  className="flex items-center flex-col gap-1"
                    src={selectedGameImages[item.id] || item.defaultImage}
                    alt={item.title}
                  />
                </div>
                <div>
                  <div className="flex flex-row justify-between">
                    <h1 className="text-wrap text-3xl font-bold">{item.name}</h1>
                    <button
                      onClick={() => {
                        handleFavorite(item.id);
                      }}
                    >
                      {favoritelist.some(
                        (favItem) => favItem.id === item.id
                      ) ? (
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
                  <div className="flex  flex-row justify-center gap-1">
                    {item.platform.map((platform) => (
                      <button
                        className="border-2 cursor-pointer  
                              opacity-50 font-bold px-4 hover:opacity-100
                              hover:border-blue-400 hover:text-blue-400"
                        key={platform}
                        onClick={() => handlePlatformClick(item.id, platform)}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>

                  <div className="">
                    {getItemQuantity(item.id) === 0 ? (
                      <div className="flex items-center flex-col gap-1">
                        <button
                          className="border-2 cursor-pointer  
                            opacity-50 font-bold px-4 hover:opacity-100 
                            hover:border-blue-400 hover:text-blue-400"
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
    </>
  );
}
export default DetailProducts;
