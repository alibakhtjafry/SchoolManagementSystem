"use client"

import { useState } from "react"
import { Search, Edit, Download, BarChart2 } from 'lucide-react'
import Card from "../components/Card"

const Gradebook = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("10-A")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")

  // Mock data
  const classes = ["10-A", "10-B", "10-C", "11-A", "11-B", "12-A", "12-B"]
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

  const students = [
    {
      id: 1,
      name: "John Smith",
      rollNo: "1001",
      grades: {
        Mathematics: { midterm: 85, final: 92, assignments: 88, overall: 89 },
        Physics: { midterm: 78, final: 85, assignments: 80, overall: 82 },
        Chemistry: { midterm: 90, final: 88, assignments: 92, overall: 90 },
        English: { midterm: 82, final: 85, assignments: 90, overall: 86 },
        History: { midterm: 75, final: 80, assignments: 85, overall: 80 },
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rollNo: "1002",
      grades: {
        Mathematics: { midterm: 92, final: 95, assignments: 90, overall: 93 },
        Physics: { midterm: 85, final: 88, assignments: 82, overall: 85 },
        Chemistry: { midterm: 78, final: 82, assignments: 80, overall: 80 },
        English: { midterm: 90, final: 92, assignments: 95, overall: 92 },
        History: { midterm: 88, final: 85, assignments: 90, overall: 88 },
      },
    },
    {
      id: 3,
      name: "David Williams",
      rollNo: "1003",
      grades: {
        Mathematics: { midterm: 75, final: 78, assignments: 80, overall: 78 },
        Physics: { midterm: 70, final: 75, assignments: 72, overall: 73 },
        Chemistry: { midterm: 65, final: 70, assignments: 75, overall: 70 },
        English: { midterm: 80, final: 82, assignments: 85, overall: 82 },
        History: { midterm: 85, final: 88, assignments: 90, overall: 88 },
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      rollNo: "1004",
      grades: {
        Mathematics: { midterm: 88, final: 90, assignments: 92, overall: 90 },
        Physics: { midterm: 82, final: 85, assignments: 80, overall: 83 },
        Chemistry: { midterm: 90, final: 92, assignments: 88, overall: 90 },
        English: { midterm: 95, final: 98, assignments: 96, overall: 97 },
        History: { midterm: 85, final: 88, assignments: 90, overall: 88 },
      },
    },
    {
      id: 5,
      name: "Michael Brown",
      rollNo: "1005",
      grades: {
        Mathematics: { midterm: 90, final: 92, assignments: 88, overall: 90 },
        Physics: { midterm: 85, final: 88, assignments: 82, overall: 85 },
        Chemistry: { midterm: 78, final: 80, assignments: 75, overall: 78 },
        English: { midterm: 82, final: 85, assignments: 80, overall: 83 },
        History: { midterm: 90, final: 92, assignments: 88, overall: 90 },
      },
    },
  ]

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.rollNo.includes(searchTerm)
  )

  // Get all subjects for the selected class
  const getSubjectsForClass = () => {
    return subjects.filter((subject) => subject === "All Subjects" || Object.keys(students[0].grades).includes(subject))
  }

  // Get grades for the selected subject or all subjects
  const getGradesForSubject = (student) => {
    if (selectedSubject === "All Subjects") {
      return Object.entries(student.grades).map(([subject, grades]) => ({
        subject,
        ...grades,
      }))
    } else {
      return [
        {
          subject: selectedSubject,
          ...student.grades[selectedSubject],
        },
      ]
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Gradebook</h2>
        <div className="flex space-x-2">
          <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
            <Edit className="w-4 h-4 mr-2" />
            Edit Grades
          </button>
          <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
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

            <select
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {getSubjectsForClass().map((subject) => (
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
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Roll No</th>
                {selectedSubject === "All Subjects" ? (
                  <>
                    <th className="px-4 py-3">Subject</th>
                    <th className="px-4 py-3">Midterm</th>
                    <th className="px-4 py-3">Final</th>
                    <th className="px-4 py-3">Assignments</th>
                    <th className="px-4 py-3">Overall</th>
                  </>
                ) : (
                  <>
                    <th className="px-4 py-3">Midterm</th>
                    <th className="px-4 py-3">Final</th>
                    <th className="px-4 py-3">Assignments</th>
                    <th className="px-4 py-3">Overall</th>
                    <th className="px-4 py-3">Grade</th>
                  </>
                )}
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredStudents.map((student) => {
                const gradesForSubject = getGradesForSubject(student)

                return gradesForSubject.map((grade, index) => (
                  <tr
                    key={`${student.id}-${grade.subject}`}
                    className="text-gray-700 dark:text-gray-400"
                  >
                    {index === 0 && (
                      <>
                        <td
                          className="px-4 py-3"
                          rowSpan={selectedSubject === "All Subjects" ? gradesForSubject.length : 1}
                        >
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
                        <td
                          className="px-4 py-3 text-sm"
                          rowSpan={selectedSubject === "All Subjects" ? gradesForSubject.length : 1}
                        >
                          {student.rollNo}
                        </td>
                      </>
                    )}
                    {selectedSubject === "All Subjects" && <td className="px-4 py-3 text-sm">{grade.subject}</td>}
                    <td className="px-4 py-3 text-sm">{grade.midterm}</td>
                    <td className="px-4 py-3 text-sm">{grade.final}</td>
                    <td className="px-4 py-3 text-sm">{grade.assignments}</td>
                    <td className="px-4 py-3 text-sm font-medium">{grade.overall}</td>
                    {selectedSubject !== "All Subjects" && (
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                            grade.overall >= 90
                              ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                              : grade.overall >= 80
                              ? "text-blue-700 bg-blue-100 dark:bg-blue-700 dark:text-blue-100"
                              : grade.overall >= 70
                              ? "text-yellow-700 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100"
                              : "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100"
                          }`}
                        >
                          {grade.overall >= 90
                            ? "A"
                            : grade.overall >= 80
                            ? "B"
                            : grade.overall >= 70
                            ? "C"
                            : "D"}
                        </span>
                      </td>
                    )}
                    <td className="px-4 py-3 text-sm">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-blue-300">
                          <BarChart2 className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-primary rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Gradebook
