'use client'

import { useState } from 'react'

interface HeaderProps {
  title: string
  userName?: string
}

const Header = ({ title, userName }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/auth'
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          {userName && <span className="text-gray-600">{userName}</span>}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Menu
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
