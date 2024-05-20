import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { list } from "../list";

export const DataContext = createContext(undefined);

export function DataProvider({ children }: PropsWithChildren) {
  const [datalist, setDatalist] = useState([]);
  const [favoritelist, setFavoritelist] = useState([]);
  // useEffect(() => {
  //   setDatalist(list);
  //   const storeFavorite = window.localStorage.getItem("My Favorite");
    
  //   setFavoritelist(JSON.parse((storeFavorite))
  // );
  // }, []);

  // useEffect(() => {
  //   setDatalist(list);
  //   window.localStorage.setItem("My Favorite", JSON.stringify(favoritelist));
  // }, [favoritelist]);

  const favorite = [...new Set(favoritelist)].sort();
  function handleFavorite(id) {
    const includes = favoritelist.some((item) => item.id == id);
    const favoriteitem = datalist.find((item) => item.id == id);
    if (includes)
      return setFavoritelist((favoritelist) =>
        favoritelist.filter((item) => item.id !== id)
      );
    setFavoritelist((favoritelist) => [...favoritelist, favoriteitem]);
  }

  const [platform, setPlatform] = useState("ps5");
  function handlePlatform(icon) {
    const includes = favorite.some((item) => item.icon == icon);
    const platformitem = datalist.find((item) => item.icon == icon);
    if (includes)
      return setFavoritelist((favoritelist) =>
        favoritelist.filter((item) => item.id !== id)
      );
    setFavoritelist((favoritelist) => [...favoritelist, platformitem]);
  }


  return (
    <DataContext.Provider
      value={{
        datalist,
        setDatalist,
        favorite,
        setFavoritelist,
        handleFavorite,
        handlePlatform
      }}
    >
      {children}
    </DataContext.Provider>
  );
}