"use client"

import { useState } from "react"
import { Search, Plus, FileText, Upload, Eye, Calendar, Clock } from 'lucide-react'
import Card from "../components/Card"

const Assignments = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("All Classes")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")

  // Mock data
  const classes = ["All Classes", "10-A", "10-B", "10-C", "11-A", "11-B", "12-A", "12-B"]
  const subjects = [
    "All Subjects",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Computer Science",
  ]

  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      class: "10-A",
      assignedDate: "2023-05-10",
      dueDate: "2023-05-17",
      status: "active",
      submissions: 18,
      totalStudents: 25,
    },
    {
      id: 2,
      title: "Essay on Shakespeare's Hamlet",
      subject: "English",
      class: "11-A",
      assignedDate: "2023-05-08",
      dueDate: "2023-05-15",
      status: "active",
      submissions: 15,
      totalStudents: 22,
    },
    {
      id: 3,
      title: "Chemical Reactions Lab Report",
      subject: "Chemistry",
      class: "10-B",
      assignedDate: "2023-05-05",
      dueDate: "2023-05-12",
      status: "closed",
      submissions: 24,
      totalStudents: 24,
    },
    {
      id: 4,
      title: "Python Programming Assignment",
      subject: "Computer Science",
      class: "12-A",
      assignedDate: "2023-05-12",
      dueDate: "2023-05-19",
      status: "active",
      submissions: 10,
      totalStudents: 20,
    },
    {
      id: 5,
      title: "World War II Research Paper",
      subject: "History",
      class: "11-B",
      assignedDate: "2023-05-01",
      dueDate: "2023-05-15",
      status: "active",
      submissions: 18,
      totalStudents: 23,
    },
    {
      id: 6,
      title: "Mechanics Problem Set",
      subject: "Physics",
      class: "12-B",
      assignedDate: "2023-04-28",
      dueDate: "2023-05-05",
      status: "closed",
      submissions: 21,
      totalStudents: 21,
    },
  ]

  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedClass === "All Classes" || assignment.class === selectedClass) &&
      (selectedSubject === "All Subjects" || assignment.subject === selectedSubject)
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Assignments</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          <Plus className="w-4 h-4 mr-2" />
          Create Assignment
        </button>
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
                  {cls}
                </option>
              ))}
            </select>

            <select
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Submissions</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredAssignments.map((assignment) => (
                <tr key={assignment.id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <div className="absolute inset-0 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                          <FileText className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">{assignment.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Assigned: {assignment.assignedDate}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{assignment.subject}</td>
                  <td className="px-4 py-3 text-sm">{assignment.class}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                      {assignment.dueDate}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                        assignment.status === "active"
                          ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                          : "text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
                      }`}
                    >
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center">
                      <Upload className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                      {assignment.submissions} / {assignment.totalStudents}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-blue-300">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-green-600 rounded-full hover:bg-green-100 dark:hover:bg-green-700 dark:text-green-300">
                        <Upload className="w-5 h-5" />
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

export default Assignments
