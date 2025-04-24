"use client"

import { useState } from "react"
import { Search, Plus, Download, DollarSign, CreditCard, CheckCircle, AlertCircle, Edit } from 'lucide-react'
import Card from "../components/Card"

const FeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("All Classes")
  const [selectedStatus, setSelectedStatus] = useState("All")

  // Mock data
  const classes = ["All Classes", "10-A", "10-B", "10-C", "11-A", "11-B", "12-A", "12-B"]
  const statuses = ["All", "Paid", "Pending", "Overdue"]

  const feeRecords = [
    {
      id: 1,
      studentName: "John Smith",
      studentId: "1001",
      class: "10-A",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "paid",
      paymentDate: "2023-05-10",
      paymentMethod: "Credit Card",
    },
    {
      id: 2,
      studentName: "Sarah Johnson",
      studentId: "1002",
      class: "10-A",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "pending",
      paymentDate: null,
      paymentMethod: null,
    },
    {
      id: 3,
      studentName: "David Williams",
      studentId: "1003",
      class: "10-B",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "overdue",
      paymentDate: null,
      paymentMethod: null,
    },
    {
      id: 4,
      studentName: "Emily Davis",
      studentId: "1004",
      class: "10-B",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "paid",
      paymentDate: "2023-05-12",
      paymentMethod: "Bank Transfer",
    },
    {
      id: 5,
      studentName: "Michael Brown",
      studentId: "1005",
      class: "10-C",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "paid",
      paymentDate: "2023-05-08",
      paymentMethod: "Cash",
    },
    {
      id: 6,
      studentName: "Jessica Miller",
      studentId: "1006",
      class: "10-C",
      feeType: "Tuition Fee",
      amount: 5000,
      dueDate: "2023-05-15",
      status: "pending",
      paymentDate: null,
      paymentMethod: null,
    },
  ]

  const filteredRecords = feeRecords.filter(
    (record) =>
      (record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.studentId.includes(searchTerm)) &&
      (selectedClass === "All Classes" || record.class === selectedClass) &&
      (selectedStatus === "All" || record.status.toLowerCase() === selectedStatus.toLowerCase())
  )

  // Calculate summary
  const summary = {
    total: filteredRecords.length,
    totalAmount: filteredRecords.reduce((sum, record) => sum + record.amount, 0),
    paid: filteredRecords.filter((record) => record.status === "paid").length,
    paidAmount: filteredRecords
      .filter((record) => record.status === "paid")
      .reduce((sum, record) => sum + record.amount, 0),
    pending: filteredRecords.filter((record) => record.status === "pending").length,
    pendingAmount: filteredRecords
      .filter((record) => record.status === "pending")
      .reduce((sum, record) => sum + record.amount, 0),
    overdue: filteredRecords.filter((record) => record.status === "overdue").length,
    overdueAmount: filteredRecords
      .filter((record) => record.status === "overdue")
      .reduce((sum, record) => sum + record.amount, 0),
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Fee Management</h2>
        <div className="flex space-x-2">
          <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-700 hover:bg-primary-700 focus:outline-none focus:shadow-outline-purple">
            <Plus className="w-4 h-4 mr-2" />
            Add Fee Record
          </button>
          <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500/20">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total Fees</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                ${summary.totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500/20">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Paid</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                ${summary.paidAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500/20">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                ${summary.pendingAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500/20">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Overdue</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                ${summary.overdueAmount.toLocaleString()}
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
                  {cls}
                </option>
              ))}
            </select>

            <select
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
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
              placeholder="Search by name, ID..."
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
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Fee Type</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Payment Date</th>
                <th className="px-4 py-3">Payment Method</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={`https://ui-avatars.com/api/?name=${record.studentName}&background=6366f1&color=fff`}
                          alt=""
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{record.studentName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{record.studentId}</td>
                  <td className="px-4 py-3 text-sm">{record.class}</td>
                  <td className="px-4 py-3 text-sm">{record.feeType}</td>
                  <td className="px-4 py-3 text-sm">${record.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-sm">{record.dueDate}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                        record.status === "paid"
                          ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                          : record.status === "pending"
                          ? "text-yellow-700 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100"
                          : "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100"
                      }`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{record.paymentDate || "-"}</td>
                  <td className="px-4 py-3 text-sm">{record.paymentMethod || "-"}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-blue-300">
                        <CreditCard className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-primary rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
                        <Edit className="w-5 h-5" />
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

export default FeeManagement
