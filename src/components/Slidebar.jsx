"use client"

import { useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Home,
  Users,
  UserCheck,
  Calendar,
  Clock,
  BookOpen,
  GraduationCap,
  DollarSign,
  Settings,
  X,
  LogOut,
} from "lucide-react"
import { AuthContext } from "../context/AuthContext"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation()
  const { user, logout } = useContext(AuthContext)

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Students", href: "/students", icon: Users },
    { name: "Teachers", href: "/teachers", icon: UserCheck },
    { name: "Timetable", href: "/timetable", icon: Clock },
    { name: "Attendance", href: "/attendance", icon: UserCheck },
    { name: "Assignments", href: "/assignments", icon: BookOpen },
    { name: "Gradebook", href: "/gradebook", icon: GraduationCap },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Fee Management", href: "/fees", icon: DollarSign },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-20 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 z-30 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden transition-all transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <div className="flex justify-between items-center px-6 py-2">
            <a href="/" className="text-lg font-bold text-gray-800 dark:text-gray-200">
              School MS
            </a>
            <button
              className="md:hidden rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <MobileNavigation navigation={navigation} pathname={pathname} />
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <a href="/" className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
            School MS
          </a>
          <DesktopNavigation navigation={navigation} pathname={pathname} />

          <div className="px-6 my-6">
            <button
              onClick={logout}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple"
            >
              Logout
              <LogOut className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

const MobileNavigation = ({ navigation, pathname }) => {
  return (
    <ul className="mt-6">
      {navigation.map((item) => (
        <li className="relative px-6 py-3" key={item.name}>
          {pathname === item.href && (
            <span
              className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
          )}
          <NavLink
            to={item.href}
            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
              pathname === item.href ? "text-gray-800 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="ml-4">{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const DesktopNavigation = ({ navigation, pathname }) => {
  return (
    <ul className="mt-6">
      {navigation.map((item) => (
        <li className="relative px-6 py-3" key={item.name}>
          {pathname === item.href && (
            <span
              className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
          )}
          <NavLink
            to={item.href}
            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
              pathname === item.href ? "text-gray-800 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="ml-4">{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
