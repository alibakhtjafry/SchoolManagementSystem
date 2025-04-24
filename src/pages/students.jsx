"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react"
import Card from "../components/Card"

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const students = [
    {
      id: 1,
      name: "John Smith",
      class: "10-A",
      rollNo: "1001",
      gender: "Male",
      parentName: "Robert Smith",
      contactNo: "(555) 123-4567",
      address: "123 Main St, Anytown",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      class: "10-A",
      rollNo: "1002",
      gender: "Female",
      parentName: "Michael Johnson",
      contactNo: "(555) 234-5678",
      address: "456 Oak Ave, Anytown",
    },
    {
      id: 3,
      name: "David Williams",
      class: "10-B",
      rollNo: "1003",
      gender: "Male",
      parentName: "James Williams",
      contactNo: "(555) 345-6789",
      address: "789 Pine Rd, Anytown",
    },
    {
      id: 4,
      name: "Emily Davis",
      class: "10-B",
      rollNo: "1004",
      gender: "Female",
      parentName: "Richard Davis",
      contactNo: "(555) 456-7890",
      address: "101 Elm St, Anytown",
    },
    {
      id: 5,
      name: "Michael Brown",
      class: "10-C",
      rollNo: "1005",
      gender: "Male",
      parentName: "Thomas Brown",
      contactNo: "(555) 567-8901",
      address: "202 Maple Dr, Anytown",
    },
    {
      id: 6,
      name: "Jessica Miller",
      class: "10-C",
      rollNo: "1006",
      gender: "Female",
      parentName: "Charles Miller",
      contactNo: "(555) 678-9012",
      address: "303 Cedar Ln, Anytown",
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.includes(searchTerm) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Students</h2>
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
          <Plus className="w-4 h-4 mr-2" />
          Add New Student
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
              placeholder="Search by name, roll no, class..."
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
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Roll No</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Parent Name</th>
                <th className="px-4 py-3">Contact No</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="text-gray-700 dark:text-gray-400">
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
                  <td className="px-4 py-3 text-sm">{student.class}</td>
                  <td className="px-4 py-3 text-sm">{student.rollNo}</td>
                  <td className="px-4 py-3 text-sm">{student.gender}</td>
                  <td className="px-4 py-3 text-sm">{student.parentName}</td>
                  <td className="px-4 py-3 text-sm">{student.contactNo}</td>
                  <td className="px-4 py-3 text-sm">{student.address}</td>
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

export default Students
