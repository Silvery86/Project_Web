import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>PAGE NOT FOUND</h2>
        <p>Go back to <Link to="/">Homepage</Link>.</p>
      
    </div>
  )
}
