import { useContext } from "react";
import { DataContext } from "../../GlobalStates/DataProvider";
import { MdOutlineFavorite } from "react-icons/md";
import EmptyList from "../../assets/images/bag.png";
import { useTranslation } from "react-i18next";
import { GrFavorite } from "react-icons/gr";
import { useShoppingCart } from "../../GlobalStates/ShoppingCartContext";

function Favorite() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const {
    favorite,
    handleFavorite,
    favoritelist,
    selectedGameImages,
    handlePlatformClick,
  } = useContext(DataContext);
  const { t } = useTranslation("global");
  // function handleFavorite(id) {
  //   const newFavorites = datalist.map((item) => {
  //     return item.id === id ? { ...item, favorite: !item.favorite } : item;
  //   });
  //   setDatalist(newFavorites);
  // }
  // const fav = datalist

  // const filterfav=(data)=>{
  //   return data.map()
  // }
  return (
    <div className="px-60">
      <h1 className="text-3xl font-semibold pb-5 cursor-pointer border-b-2 border-red-500">
        {t("yourlist.messsage")}
      </h1>

      <section className="flex flex-row gap-5 mt-3 flex-wrap ">
        <div className="flex flex-row justify-center gap-10">
          {/* {modelItemsreg.length} */}
          <div></div>
        </div>
        {favorite.length == 0 ? (
          <div className="pb-28">
            <h1 className="font-bold text-2xl">{t("emptylist.messsage")}</h1>
            <img className=" w-72 h-72" src={EmptyList} alt="" />
          </div>
        ) : (
          favorite.map((item) => (
            // item.favorite === true ? (
            <form
              key={item.id}
              className="flex flex-col gap-2 hover:border-2 p-2 rounded-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <img
                  className="max-w-60 max-h-60"
                  src={selectedGameImages[item.id] || item.defaultImage}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-row justify-between">
                <h1>{item.name}</h1>
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
              <p className="text-wrap max-w-60">{item.story}</p>
              <div className="flex flex-row gap-3">
                {item.platform.map((platform) => (
                  <button
                    className="border-2 p-4 rounded-md"
                    key={platform}
                    onClick={() => handlePlatformClick(item.id, platform)}
                  >
                    {platform}
                  </button>
                ))}
              </div>

              <div className="">
                {getItemQuantity(item.id) === 0 ? (
                  <div
                    className="border-2 cursor-pointer  
                  opacity-50 font-bold px-4 hover:opacity-100 
                  hover:border-blue-400 hover:text-blue-400"
                  >
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
            </form>
          ))
        )}
      </section>
    </div>
  );
}

export default Favorite;
