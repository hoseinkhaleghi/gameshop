import { list } from "../../../list";
// import "./Products.css"
function Products() {
  return (
    <div>
      {list.map((item,index)=>(
        <div key={index} className="card">
          <div className="imgBx">
            <img src={item.img}/>
          </div>
          <div className="details">
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;