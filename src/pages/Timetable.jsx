"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Edit } from 'lucide-react'
import Card from "../components/Card"

const Timetable = () => {
  const [currentClass, setCurrentClass] = useState("10-A")
  const [currentWeek, setCurrentWeek] = useState("Current Week")

  // Mock data
  const classes = ["10-A", "10-B", "10-C", "11-A", "11-B", "12-A", "12-B"]
  const weeks = ["Previous Week", "Current Week", "Next Week"]
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const periods = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const timeSlots = [
    "8:00 - 8:45",
    "8:50 - 9:35",
    "9:40 - 10:25",
    "10:40 - 11:25",
    "11:30 - 12:15",
    "12:20 - 13:05",
    "13:30 - 14:15",
    "14:20 - 15:05",
  ]

  // Mock timetable data
  const timetableData = {
    "10-A": {
      Monday: [
        { subject: "Mathematics", teacher: "Dr. Anderson", room: "101" },
        { subject: "Physics", teacher: "Prof. Wilson", room: "Lab 1" },
        { subject: "English", teacher: "Mr. Thompson", room: "102" },
        { subject: "Break", teacher: "", room: "" },
        { subject: "Chemistry", teacher: "Dr. Martin", room: "Lab 2" },
        { subject: "History", teacher: "Mrs. Davis", room: "103" },
        { subject: "Lunch", teacher: "", room: "" },
        { subject: "Computer Science", teacher: "Dr. Martin", room: "Lab 3" },
      ],
      Tuesday: [
        { subject: "Physics", teacher: "Prof. Wilson", room: "Lab 1" },
        { subject: "Mathematics", teacher: "Dr. Anderson", room: "101" },
        { subject: "Chemistry", teacher: "Dr. Martin", room: "Lab 2" },
        { subject: "Break", teacher: "", room: "" },
        { subject: "English", teacher: "Mr. Thompson", room: "102" },
        { subject: "Computer Science", teacher: "Dr. Martin", room: "Lab 3" },
        { subject: "Lunch", teacher: "", room: "" },
        { subject: "History", teacher: "Mrs. Davis", room: "103" },
      ],
      Wednesday: [
        { subject: "English", teacher: "Mr. Thompson", room: "102" },
        { subject: "Mathematics", teacher: "Dr. Anderson", room: "101" },
        { subject: "Physics", teacher: "Prof. Wilson", room: "Lab 1" },
        { subject: "Break", teacher: "", room: "" },
        { subject: "Computer Science", teacher: "Dr. Martin", room: "Lab 3" },
        { subject: "Chemistry", teacher: "Dr. Martin", room: "Lab 2" },
        { subject: "Lunch", teacher: "", room: "" },
        { subject: "Physical Education", teacher: "Mr. Johnson", room: "Gym" },
      ],
      Thursday: [
        { subject: "History", teacher: "Mrs. Davis", room: "103" },
        { subject: "English", teacher: "Mr. Thompson", room: "102" },
        { subject: "Mathematics", teacher: "Dr. Anderson", room: "101" },
        { subject: "Break", teacher: "", room: "" },
        { subject: "Physics", teacher: "Prof. Wilson", room: "Lab 1" },
        { subject: "Chemistry", teacher: "Dr. Martin", room: "Lab 2" },
        { subject: "Lunch", teacher: "", room: "" },
        { subject: "Art", teacher: "Ms. Roberts", room: "Art Studio" },
      ],
      Friday: [
        { subject: "Computer Science", teacher: "Dr. Martin", room: "Lab 3" },
        { subject: "History", teacher: "Mrs. Davis", room: "103" },
        { subject: "English", teacher: "Mr. Thompson", room: "102" },
        { subject: "Break", teacher: "", room: "" },
        { subject: "Mathematics", teacher: "Dr. Anderson", room: "101" },
        { subject: "Physics", teacher: "Prof. Wilson", room: "Lab 1" },
        { subject: "Lunch", teacher: "", room: "" },
        { subject: "Chemistry", teacher: "Dr. Martin", room: "Lab 2" },
      ],
    },
  }

  // Get timetable for current class
  const classTimetable = timetableData[currentClass] || {}

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Class Timetable</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          <Edit className="w-4 h-4 mr-2" />
          Edit Timetable
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={currentClass}
            onChange={(e) => setCurrentClass(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>

          <div className="flex items-center">
            <button className="p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <select
              className="border-y border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 focus:outline-none"
              value={currentWeek}
              onChange={(e) => setCurrentWeek(e.target.value)}
            >
              {weeks.map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>
            <button className="p-2 rounded-r-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800 text-left">Time</th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800 text-center min-w-[150px]"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, index) => (
                <tr key={period}>
                  <td className="border dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <div>
                        <div className="font-medium">Period {period}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{timeSlots[index]}</div>
                      </div>
                    </div>
                  </td>
                  {days.map((day) => {
                    const slot = classTimetable[day]?.[index] || { subject: "Free", teacher: "", room: "" }
                    const isBreak = slot.subject === "Break" || slot.subject === "Lunch"

                    return (
                      <td
                        key={`${day}-${period}`}
                        className={`border dark:border-gray-700 p-2 ${
                          isBreak ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-800"
                        }`}
                      >
                        {isBreak ? (
                          <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                            {slot.subject}
                          </div>
                        ) : (
                          <div>
                            <div className="font-medium">{slot.subject}</div>
                            {slot.teacher && (
                              <div className="text-xs text-gray-500 dark:text-gray-400">{slot.teacher}</div>
                            )}
                            {slot.room && (
                              <div className="text-xs text-gray-500 dark:text-gray-400">Room: {slot.room}</div>
                            )}
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Timetable
