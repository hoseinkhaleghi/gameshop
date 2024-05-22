import { useContext, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import styles from "./Products.module.css";
import { useDarkMode } from "../../../GlobalStates/ThemeProvider";
import { DataContext } from "../../../GlobalStates/DataProvider";
import { useTranslation } from "react-i18next";

function Products() {
  const { datalist, handleFavorite, favoritelist } = useContext(DataContext);
  const { isDarkMode } = useDarkMode();
  const { i18n } = useTranslation("global");
  // const [platform, setPlatform] = useState("ps5");

  // const platforme = datalist.map((item)=>item.platform)
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedGameImages, setSelectedGameImages] = useState({});
  const handlePlatformClick = (gameId, platform) => {
    setSelectedPlatform(platform);
    setSelectedGameImages((prevImages) => ({
      ...prevImages,
      [gameId]: datalist.find((game) => game.id === gameId).images[platform],
    }));
  };

  return (
    <div className={styles.cont}>
      {datalist.map((item) => (
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
              />{" "}
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
                    // value={selectedPlatform}
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
      {/* {datalist.map((game) => (
                <div key={game.id}>
                    <h3>{game.title}</h3>
                    {game.platform.map((platform) => (
                        <button key={platform} onClick={() => handlePlatformClick(platform)}>
                            {platform}
                        </button>
                    ))}
                    <div>
                        {selectedPlatform && (
                            <img src={game.images[selectedPlatform]} alt={game.title} />
                        )}
                    </div>
                </div>
            ))} */}
    </div>
  );
}

export default Products;
