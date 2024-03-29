import { list } from "../../../list";
import styles from "./Products.module.css"
function Products() {
  return (
    <div>
      {list.map((item,index)=>(
        <div key={index} className={styles.card}>
          <div className={styles.imgBx}>
            <img src={item.img}/>
          </div>
          <div className={styles.details}>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;