import { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";

import { list } from "../../../list";
import styles from "./Products.module.css";
function Products() {
  const [platform, setPlatform] = useState("ps5");
  // const [favorite, setFavorite] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(list);
  }, [list]);

  function handleFavorite(id) {
    const newFavorites = data.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setData(newFavorites);
  }
  console.log(data);

  return (
    <div className={styles.cont}>
      {data.map((item) => (
        <form key={item.id} action="" onSubmit={(e) => e.preventDefault()}>
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
              />
            </div>
            <div className={styles.details}>
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                >
                  {item.favorite === true ? (
                    <div className="text-red-500">
                      <MdOutlineFavorite />
                    </div>
                  ) : (
                    <div className="text-white">
                      <GrFavorite />
                    </div>
                  )}
                </button>
                <h3 className="text-wrap">{item.name}</h3>
              </div>
              <h4>{item.email}</h4>
              <ul className={styles.size}>
                <li onClick={() => setPlatform("pc")}>
                  <img src={item.platform.pc} />
                </li>
                <li onClick={() => setPlatform("xbox")}>
                  <img src={item.platform.xbox} />
                </li>
                <li onClick={() => setPlatform("ps5")}>
                  <img src={item.platform.ps} />
                </li>
              </ul>
              <button className="bg-white">Buy</button>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
}

export default Products;
