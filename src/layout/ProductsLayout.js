
import { Outlet } from 'react-router-dom'

export default function ProductsLayout() {
  return (
    <div className='products-layout grid wide'>
      <h1>All Products</h1>

      <Outlet />
    </div>
  )
}
