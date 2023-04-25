import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Products() {
    const products = useLoaderData();
  return (
    <div className='products row'>
        {products.map(product => (
            <Link className="col l-3 m-6 c-6" to={product.id.toString()} key={product.id}>
            <p>{product.productname}</p>
            <p>Price: {product.productprice}</p>
            <p>Number of stock: {product.stock}</p>
          </Link>
        ))}
      
    </div>
  )
}

export const productsLoader = async () => {
    const res = await fetch('http://localhost:4000/products') // api json data link

    if(!res.ok) {
        throw Error('Could not fetch that carrer')
    }

    return res.json()
}