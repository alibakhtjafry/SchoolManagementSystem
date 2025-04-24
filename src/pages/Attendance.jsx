"use client"

import { useState } from "react"
import { CalendarIcon, Check, Search, X } from 'lucide-react'
import Card from "../components/Card"

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState("10-A")
  const [selectedDate, setSelectedDate] = useState("2023-05-15")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const classes = ["10-A", "10-B", "10-C", "11-A", "11-B", "12-A", "12-B"]
  
  const students = [
    { id: 1, name: "John Smith", rollNo: "1001", status: "present" },
    { id: 2, name: "Sarah Johnson", rollNo: "1002", status: "present" },
    { id: 3, name: "David Williams", rollNo: "1003", status: "absent" },
    { id: 4, name: "Emily Davis", rollNo: "1004", status: "present" },
    { id: 5, name: "Michael Brown", rollNo: "1005", status: "late" },
    { id: 6, name: "Jessica Miller", rollNo: "1006", status: "present" },
    { id: 7, name: "Daniel Wilson", rollNo: "1007", status: "present" },
    { id: 8, name: "Olivia Moore", rollNo: "1008", status: "absent" },
    { id: 9, name: "James Taylor", rollNo: "1009", status: "present" },
    { id: 10, name: "Sophia Anderson", rollNo: "1010", status: "present" },
    { id: 11, name: "Benjamin Thomas", rollNo: "1011", status: "late" },
    { id: 12, name: "Ava Jackson", rollNo: "1012", status: "present" },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.includes(searchTerm)
  )

  const attendanceSummary = {
    total: students.length,
    present: students.filter((s) => s.status === "present").length,
    absent: students.filter((s) => s.status === "absent").length,
    late: students.filter((s) => s.status === "late").length,
  }

  const handleStatusChange = (studentId, newStatus) => {
    // In a real app, this would update the state and make an API call
    console.log(`Changed status of student ${studentId} to ${newStatus}`)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Attendance</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          Save Attendance
        </button>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500/20">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Present</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {attendanceSummary.present} / {attendanceSummary.total}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500/20">
              <X className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Absent</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {attendanceSummary.absent} / {attendanceSummary.total}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500/20">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Late</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {attendanceSummary.late} / {attendanceSummary.total}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500/20">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Attendance Rate</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {Math.round((attendanceSummary.present / attendanceSummary.total) * 100)}%
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="date"
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search by name, roll no..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Roll No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3 text-sm">{student.rollNo}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={`https://ui-avatars.com/api/?name=${student.name}&background=6366f1&color=fff`}
                          alt=""
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{student.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                        student.status === "present"
                          ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                          : student.status === "absent"
                          ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100"
                          : "text-yellow-700 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100"
                      }`}
                    >
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(student.id, "present")}
                        className={`px-2 py-1 rounded ${
                          student.status === "present"
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => handleStatusChange(student.id, "absent")}
                        className={`px-2 py-1 rounded ${
                          student.status === "absent"
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Absent
                      </button>
                      <button
                        onClick={() => handleStatusChange(student.id, "late")}
                        className={`px-2 py-1 rounded ${
                          student.status === "late"
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Late
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Attendance
