
import { Outlet } from 'react-router-dom'

export default function ProductsLayout() {
  return (
    <div className='products-layout grid wide'>
      <Outlet />
    </div>
  )
}
