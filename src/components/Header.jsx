"use client"

import { useContext } from "react"
import { Menu, Bell, Sun, Moon, Search } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"
import { AuthContext } from "../context/AuthContext"

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Search input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-primary">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none form-input"
              type="text"
              placeholder="Search for anything..."
              aria-label="Search"
            />
          </div>
        </div>

        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Theme toggler */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleDarkMode}
              aria-label="Toggle color mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </li>

          {/* Notifications menu */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                aria-hidden="true"
              ></span>
            </button>
          </li>

          {/* Profile menu */}
          <li className="relative">
            <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
              <div className="flex items-center">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${user?.name || "User"}&background=6366f1&color=fff`}
                  alt=""
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.name || "User"}
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
