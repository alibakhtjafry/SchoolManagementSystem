"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, CalendarIcon, Clock, MapPin } from 'lucide-react'
import Card from "../components/Card"

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Mock data
  const events = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      date: "2023-05-15",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      type: "meeting",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "2023-05-20",
      time: "9:00 AM - 4:00 PM",
      location: "School Hall",
      type: "event",
    },
    {
      id: 3,
      title: "Annual Sports Day",
      date: "2023-05-25",
      time: "All Day",
      location: "School Grounds",
      type: "event",
    },
    {
      id: 4,
      title: "Final Exams Begin",
      date: "2023-06-05",
      time: "9:00 AM",
      location: "Examination Halls",
      type: "exam",
    },
    {
      id: 5,
      title: "Staff Meeting",
      date: "2023-05-10",
      time: "3:00 PM - 4:30 PM",
      location: "Conference Room",
      type: "meeting",
    },
    {
      id: 6,
      title: "Holiday - Memorial Day",
      date: "2023-05-29",
      time: "All Day",
      location: "",
      type: "holiday",
    },
  ]

  // Helper functions for calendar
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (date) => {
    return date.toISOString().split("T")[0]
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleDateClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setSelectedDate(newDate)
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 dark:border-gray-700"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const dateString = formatDate(date)
      const isToday = new Date().toDateString() === date.toDateString()
      const isSelected = selectedDate.toDateString() === date.toDateString()
      const dayEvents = events.filter((event) => event.date === dateString)

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 dark:border-gray-700 p-1 overflow-hidden ${
            isToday ? "bg-blue-50 dark:bg-blue-900/20" : ""
          } ${isSelected ? "ring-2 ring-primary" : ""}`}
          onClick={() => handleDateClick(day)}
        >
          <div className="flex justify-between">
            <span
              className={`text-sm font-semibold ${
                isToday ? "bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center" : ""
              }`}
            >
              {day}
            </span>
            {dayEvents.length > 0 && (
              <span className="text-xs bg-primary/10 text-primary px-1 rounded">
                {dayEvents.length} {dayEvents.length === 1 ? "event" : "events"}
              </span>
            )}
          </div>
          <div className="mt-1 space-y-1 overflow-y-auto max-h-16">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${
                  event.type === "meeting"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                    : event.type === "event"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                    : event.type === "exam"
                    ? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                }`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 dark:text-gray-400">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      )
    }

    return days
  }

  // Get events for selected date
  const selectedDateEvents = events.filter((event) => event.date === formatDate(selectedDate))

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Calendar</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </button>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-0">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="h-10 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  {day}
                </div>
              ))}
              {generateCalendarDays()}
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="flex items-center mb-4">
              <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {selectedDate.toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric" })}
              </h3>
            </div>

            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">{event.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          event.type === "meeting"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                            : event.type === "event"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                            : event.type === "exam"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                        }`}
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                      {event.location && (
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {event.location}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <CalendarIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>No events scheduled for this day</p>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-primary hover:underline">
                  + Add New Event
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Calendar
