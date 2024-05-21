import { useContext } from "react";
import { DataContext } from "../../GlobalStates/DataProvider";
import { MdOutlineFavorite } from "react-icons/md";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrFavorite } from "react-icons/gr";

function Favorite() {
  const { favorite, handleFavorite ,favoritelist } =
    useContext(DataContext);
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
          <div>لیست شما خالیه</div>
        ) : (
          favorite.map(
            (item) => (
              // item.favorite === true ? (
              <form
                key={item.id}
                className="flex flex-col gap-2 hover:border-2 p-2 rounded-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <img className="max-w-60 max-h-60" src={item.imgps5} alt="" />
                </div>
                <div className="flex flex-row justify-between">
                  <h1>{item.name}</h1>
                  <button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                  >
                    {favoritelist.some(favItem => favItem.id === item.id) ? (
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
                <button className="bg-white text-black rounded-md border-2">
                  Buy
                </button>
              </form>
            )
            // ) : null
          )
        )}
      </section>
    </div>
  );
}

export default Favorite;
