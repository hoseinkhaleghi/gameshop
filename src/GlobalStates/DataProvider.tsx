import { createContext, useState,  PropsWithChildren } from "react";


export const DataContext = createContext(undefined);

// export const useFavorite = () => {
//   const context = useContext(FavoriteContext);
//   if (!context) {
//     throw new Error("useFavorite must be used within a FavoriteProvider");
//   }
//   return context;
// };

export function DataProvider({ children }: PropsWithChildren) {
  const [datalist, setdatalist] = useState([]);

//   const toggleFavorite = () => {
//     setIsFavorite((prev) => !prev);
//   };
// function handleFavorite(id) {
//     const newFavorites = data.map((item) => {
//       return item.id === id ? { ...item, favorite: !item.favorite } : item;
//     });
//     setIsFavorite(newFavorites);
// }


  return (
    <DataContext.Provider value={{ datalist, setdatalist }}>
      {children}
    </DataContext.Provider>
  );
}
