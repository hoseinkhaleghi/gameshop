import { useState } from "react";
import { list } from "../../../list";
import styles from "./Products.module.css";
function Products() {
  // const platform = list.map((item)=>(item.platform))
  const [platform, setPlatform] = useState("ps5");
  return (
    <div className={styles.cont}>
      {list.map((item) => (
        <div key={item.id} className={styles.card}>
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
            <h3>{item.name}</h3>
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
              {/* {platform.map((item)=>(
                  <li><img src={item.pc} alt="" /></li>
                ))} */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
