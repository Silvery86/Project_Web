
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div>
      <h1>Sign In and Sign Out</h1>
      <Outlet />
    </div>
  )
}
