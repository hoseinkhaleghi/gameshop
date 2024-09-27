import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { list } from "../list";

export interface Game {
  title?: string;
  id: number;
  name: string;
  company: string;
  defaultImage: string;
  Year: number;
  price: number;
  images: {
    PC?: string;
    PS4?: string;
    PS5?: string;
    XBOX?: string;
    ps4?:string;
  };
  genre: string;
  platform: string[];
  story: string;
}

export interface DataContextType {
  datalist: Game[];
  setDatalist: React.Dispatch<React.SetStateAction<Game[]>>;
  favorite: Game[];
  setFavoritelist: React.Dispatch<React.SetStateAction<Game[]>>;
  handleFavorite: (id: number) => void;
  handlePlatformClick: (gameId: number, platform: keyof Game['images']) => void;
  setFinalsearch: React.Dispatch<React.SetStateAction<Game[]>>;
  finalsearch: Game[];
  favoritelist: Game[];
  selectedGameImages: Record<number, string>;
  setSelectedGameImages: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  finalrange: number[];
  setFinalrange: React.Dispatch<React.SetStateAction<number[]>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: PropsWithChildren<object>) {
  const [datalist, setDatalist] = useState<Game[]>([]);
  const [favoritelist, setFavoritelist] = useState<Game[]>([]);

  useEffect(() => {
    setDatalist(list);
  }, []);

  const favorite = [...new Set(favoritelist)].sort((a, b) => a.id - b.id);
  
  const handleFavorite = (id: number) => {
    const includes = favoritelist.some((item) => item.id === id);
    const favoriteItem = datalist.find((item) => item.id === id);
    if (includes) {
      setFavoritelist((prev) => prev.filter((item) => item.id !== id));
    } else if (favoriteItem) {
      setFavoritelist((prev) => [...prev, favoriteItem]);
    }
  };

  const [finalsearch, setFinalsearch] = useState<Game[]>([]);
  const [selectedGameImages, setSelectedGameImages] = useState<Record<number, string>>({});
  
  const handlePlatformClick = (gameId: number, platform: keyof Game['images']) => {
    const imageUrl = datalist.find((game) => game.id === gameId)?.images[platform];
    setSelectedGameImages((prevImages) => ({
      ...prevImages,
      [gameId]: imageUrl || "",
    }));
  };

  useEffect(() => {
    if (finalsearch.length === 0) {
      setDatalist(list);
    } else {
      setDatalist(finalsearch);
    }
  }, [finalsearch]);

  const [finalrange, setFinalrange] = useState<number[]>([]);

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
        finalrange,
        setFinalrange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
