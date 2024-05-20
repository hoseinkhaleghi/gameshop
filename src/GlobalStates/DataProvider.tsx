import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { list } from "../list";

export const DataContext = createContext(undefined);

export function DataProvider({ children }: PropsWithChildren) {
  const [datalist, setDatalist] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  useEffect(() => {
    // Set datalist here
    setDatalist(list);
  }, []);
  const handleFavorite = (id) => {
    // Check if the item is already in favoriteList
    const index = favoriteList.findIndex((item) => item.id === id);
    if (index !== -1) {
      // Item exists, remove it from favoriteList
      const updatedList = [...favoriteList];
      updatedList.splice(index, 1);
      setFavoriteList(updatedList);
    } else {
      // Item does not exist, add it to favoriteList
      const item = datalist.find((item) => item.id === id);
      setFavoriteList([...favoriteList, item]);
    }
  };
  console.log(favoriteList);

  return (
    <DataContext.Provider
      value={{
        datalist,
        setDatalist,
        setFavoriteList,
        handleFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
