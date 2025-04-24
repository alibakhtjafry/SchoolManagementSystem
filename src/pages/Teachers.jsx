"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react"
import Card from "../components/Card"

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const teachers = [
    {
      id: 1,
      name: "Dr. Robert Anderson",
      subject: "Mathematics",
      employeeId: "T001",
      qualification: "Ph.D.",
      email: "r.anderson@school.edu",
      phone: "(555) 123-4567",
      joinDate: "01/15/2018",
    },
    {
      id: 2,
      name: "Prof. Jennifer Wilson",
      subject: "Science",
      employeeId: "T002",
      qualification: "M.Sc.",
      email: "j.wilson@school.edu",
      phone: "(555) 234-5678",
      joinDate: "03/22/2019",
    },
    {
      id: 3,
      name: "Mr. Michael Thompson",
      subject: "English",
      employeeId: "T003",
      qualification: "M.A.",
      email: "m.thompson@school.edu",
      phone: "(555) 345-6789",
      joinDate: "08/10/2017",
    },
    {
      id: 4,
      name: "Mrs. Sarah Davis",
      subject: "History",
      employeeId: "T004",
      qualification: "M.A.",
      email: "s.davis@school.edu",
      phone: "(555) 456-7890",
      joinDate: "05/05/2020",
    },
    {
      id: 5,
      name: "Dr. James Martin",
      subject: "Computer Science",
      employeeId: "T005",
      qualification: "Ph.D.",
      email: "j.martin@school.edu",
      phone: "(555) 567-8901",
      joinDate: "11/30/2018",
    },
  ]

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Teachers</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          <Plus className="w-4 h-4 mr-2" />
          Add New Teacher
        </button>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search by name, subject, ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Employee ID</th>
                <th className="px-4 py-3">Qualification</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Join Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={`https://ui-avatars.com/api/?name=${teacher.name}&background=6366f1&color=fff`}
                          alt=""
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{teacher.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{teacher.subject}</td>
                  <td className="px-4 py-3 text-sm">{teacher.employeeId}</td>
                  <td className="px-4 py-3 text-sm">{teacher.qualification}</td>
                  <td className="px-4 py-3 text-sm">{teacher.email}</td>
                  <td className="px-4 py-3 text-sm">{teacher.phone}</td>
                  <td className="px-4 py-3 text-sm">{teacher.joinDate}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
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

export default Teachers
