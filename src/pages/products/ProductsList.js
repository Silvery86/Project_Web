import { Link } from 'react-router-dom'

export default function ProductsList({filterProducts, classname}) {
  
  return (
    <div className={`row ${classname}`}>
       {filterProducts.map((product) => {
        const {id, productname, productprice, stock} = product;
       return (
            <Link className="col l-3 m-6 c-12" to={id.toString()} key={id}>
            <p>{productname}</p>
            <p>Price: {productprice}</p>
            <p>Number of stock: {stock}</p>
          </Link>
        )}
        )}
    </div>
  )
}
