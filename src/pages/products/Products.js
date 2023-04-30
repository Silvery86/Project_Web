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
  
  // filter products array keep product meet the search field from input then store in new array
  const filterProducts = products.filter((product) => {
    return product.productname.toLocaleLowerCase().includes(searchField);
  })

  // when user input in search box will change value of search field value
  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  }

  return (
    <div className='row'>
        <div className='col l-12 m-12 c-12'>
            <Search onSearchHandler={onSearchChange}
            placeholder="Search for product name"
            classname="search-box"
            />
        </div>    
       <div className='col l-12 m-12 c-12'>
            <ProductsList 
            filterProducts={filterProducts}
            classname="products"
             />
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