"use client"

import { useState, useContext } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Slidebar"
import Header from "./Header"
import { ThemeContext } from "../context/ThemeContext"

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`flex h-screen bg-gray-50 ${darkMode ? "dark" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 w-full dark:bg-gray-900">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="h-full overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
