import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Search from '../../components/Search';

export default function Products() {
  const [products, setProducts] = useState([])
  let [searchField, setSearchField] = useState('')
  const fetchData = useLoaderData();
  useEffect(() => {
    setProducts(fetchData)
  },[fetchData])
  
  const filterProducts = products.filter((product) => {
    return product.productname.toLocaleLowerCase().includes(searchField);
  })
 

  return (
    <div className='products row'>
        <div className='col l-12 m-12 c-12'>
            <Search searchValue={setSearchField}/>
        </div>
       
        
        {filterProducts.map(product => (
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