"use client"

import { useContext } from "react"
import { Users, UserCheck, TrendingUp, DollarSign, CheckCircle } from "lucide-react"
import { AuthContext } from "../context/AuthContext"
import Card from "../components/Card"
import StatsCard from "../components/StatsCard"
import RecentActivities from "../components/RecentActivities"
import UpcomingEvents from "../components/UpComingEvent"

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  // Mock data
  const stats = [
    { title: "Total Students", value: "1,250", icon: Users, change: "+5%", changeType: "increase" },
    { title: "Total Teachers", value: "86", icon: UserCheck, change: "+2%", changeType: "increase" },
    { title: "Attendance Rate", value: "94%", icon: CheckCircle, change: "+1%", changeType: "increase" },
    { title: "Fee Collection", value: "$28,500", icon: DollarSign, change: "-3%", changeType: "decrease" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        <div className="flex space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Welcome back, {user?.name || "User"}!</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card title="Student Performance">
          <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
            <TrendingUp className="w-12 h-12 text-primary" />
            <span className="ml-2 text-gray-600 dark:text-gray-400">Performance Chart</span>
          </div>
        </Card>

        <Card title="Attendance Overview">
          <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
            <UserCheck className="w-12 h-12 text-primary" />
            <span className="ml-2 text-gray-600 dark:text-gray-400">Attendance Chart</span>
          </div>
        </Card>
      </div>

      {/* Recent Activities and Upcoming Events */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <RecentActivities />
        <UpcomingEvents />
      </div>
    </div>
  )
}

export default Dashboard
