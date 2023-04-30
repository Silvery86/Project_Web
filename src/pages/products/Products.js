import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Search from '../../components/Search';
import ProductsList from './ProductsList';

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
    <div className='row'>
        <div className='col l-12 m-12 c-12'>
            <Search searchValue={setSearchField}/>
        </div>    
       <div className='col l-12 m-12 c-12'>
            <ProductsList filterProducts={filterProducts} />
       </div>
      
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