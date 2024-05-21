import { useContext, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import styles from "./Products.module.css";
import { useDarkMode } from "../../../GlobalStates/ThemeProvider";
import { DataContext } from "../../../GlobalStates/DataProvider";
import { useTranslation } from "react-i18next";

function Products() {
  const { datalist, handleFavorite } = useContext(DataContext);
  const { isDarkMode } = useDarkMode();
  const { i18n } = useTranslation("global");
  // const [platform, setPlatform] = useState("ps5");

  const platform = datalist.map((item)=>item.platform)


  return (
    <div className={styles.cont}>
      {datalist.map((item) => (
        // <form key={item.id} action="" onSubmit={(e) => e.preventDefault()}>
        <div
          key={item.id}
          className={isDarkMode ? "text-black bg-white " : "text-white bg-black"}
        >
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img
                src={
                  platform === "ps5"
                    ? item.imgps5
                    : platform === "xbox"
                    ? item.imgxbox
                    : item.imgpc
                }
                onClick={(e) => console.log(e)}
              />
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
                  {item.favorite === true ? (
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
              {/* <h4>{item.email}</h4> */}
              <div className={styles.size}>
                {/* {datalist.map((item)=>(<button value={item.platform.pc.name}>{item.platform.xbox.icon}</button>))} */}

                {/* <button
                  value={"pc"}
                  onClick={(item) => console.log(item.target.value)}
                >
                  {item.platform.pc.icon}
                  {item.platform.pc.title}
                </button>
                <button
                  value="xbox"
                  onClick={(item) => console.log(item.target.value)}
                >
                  {item.platform.xbox.icon}
                  {item.platform.xbox.title}
                </button>
                <button
                  value={"ps5"}
                  onClick={(item) => console.log(item.target.value)}
                >
                  {item.platform.ps5.icon}
                  {item.platform.ps5.title}
                </button> */}
              </div>
              <button
                value="xbox"
                onClick={(item) => console.log(item.target.value)}
                className="bg-white  text-black rounded-md"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        // </form>
      ))}
    </div>
  );
}

export default Products;