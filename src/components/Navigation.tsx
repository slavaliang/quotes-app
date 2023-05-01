import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <Link to="/quotes-app" className="font-bold text-2xl">Quotes</Link>
    </nav>
  )
}