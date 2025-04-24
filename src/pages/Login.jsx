"use client"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { ChevronDown, Mail, Lock, GraduationCap, BookOpen } from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("admin")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // Mock successful login
        login({
          id: 1,
          name: "John Doe",
          email,
          role,
        })
        navigate("/")
      } else {
        setError("Please enter both email and password")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f1521]">
      <div className="w-full max-w-5xl flex overflow-hidden rounded-lg shadow-2xl">
        {/* Left side - Image/Branding */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-indigo-800 to-indigo-900 p-8 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-white mr-2" />
              <h1 className="text-xl font-bold text-white">EduManage</h1>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Welcome Back</h2>
              <p className="text-indigo-200 text-base mb-6">Access all your school management tools in one place.</p>
              <div className="flex space-x-3">
                <div className="h-2 w-8 bg-white rounded-full opacity-100"></div>
                <div className="h-2 w-8 bg-white rounded-full opacity-50"></div>
                <div className="h-2 w-8 bg-white rounded-full opacity-30"></div>
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-indigo-200 text-xs">© 2023 EduManage. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 bg-[#1a2236] p-6">
          <div className="max-w-sm mx-auto h-full flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-indigo-500 mr-2" />
              <h1 className="text-2xl font-bold text-gray-100">School Management</h1>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm text-gray-300">Email</label>
                <div className="relative">
                  <input
                    className="w-full bg-[#232b3e] text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="jane@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm text-gray-300">Password</label>
                <div className="relative">
                  <input
                    className="w-full bg-[#232b3e] text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="••••••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm text-gray-300">Login as</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-[#232b3e] text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="admin">Administrator</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-3 w-3 text-indigo-500 focus:ring-indigo-500 border-gray-700 rounded bg-[#232b3e]"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-300">
                  Remember me
                </label>
              </div>

              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  "Log in"
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors duration-200"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
