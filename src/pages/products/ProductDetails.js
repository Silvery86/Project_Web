import { useLoaderData, useParams } from "react-router-dom"


export default function ProductDetails() {
    const { id } = useParams()
    const product = useLoaderData()
  return (
    <div className="product-detail">
      <h2>{product.productname}</h2>
        <p>Price: {product.productprice}</p>
        <p>Available: {product.stock}</p>
    </div>
  )
}
export const productDetailsLoader = async ( {params} ) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/products/' + id)

    if(!res.ok) {
        throw Error('Could not find that carrer')
    }

    return res.json()
}