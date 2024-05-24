import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { list } from "../list";

export const DataContext = createContext(undefined);

export function DataProvider({ children }: PropsWithChildren) {
  const [datalist, setDatalist] = useState([]);
  const [favoritelist, setFavoritelist] = useState([]);
  useEffect(() => {
     setDatalist(list);
  }, []);
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

  const [finalsearch, setFinalsearch] = useState([]);

  //Select Platform
  const [selectedGameImages, setSelectedGameImages] = useState({});
  // const [selectedPlatform, setSelectedPlatform] = useState(null);
  const handlePlatformClick = (gameId, platform) => {
    // setSelectedPlatform(platform);
    setSelectedGameImages((prevImages) => ({
      ...prevImages,
      [gameId]: datalist.find((game) => game.id === gameId).images[platform],
    }));
  };
  //-----------------------------------------------------
  

  return (
    <DataContext.Provider
      value={{
        datalist,
        setDatalist,
        favorite,
        setFavoritelist,
        handleFavorite,
        handlePlatformClick,
        setFinalsearch,
        finalsearch,
        favoritelist,
        selectedGameImages,
        setSelectedGameImages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
