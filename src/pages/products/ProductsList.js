import { Link } from 'react-router-dom'

export default function ProductsList(props) {
  return (
    <div className={`row ${props.classname}`}>
       {props.filterProducts.map(product => (
            <Link className="col l-3 m-6 c-6" to={product.id.toString()} key={product.id}>
            <p>{product.productname}</p>
            <p>Price: {product.productprice}</p>
            <p>Number of stock: {product.stock}</p>
          </Link>
        ))}
    </div>
  )
}
