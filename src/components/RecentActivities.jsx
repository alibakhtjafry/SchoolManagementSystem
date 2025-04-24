import { Clock } from "lucide-react"
import Card from "./Card"

const RecentActivities = () => {
  // Mock data
  const activities = [
    { id: 1, user: "John Smith", action: "submitted an assignment", subject: "Mathematics", time: "2 hours ago" },
    { id: 2, user: "Sarah Johnson", action: "marked attendance", subject: "Science Class", time: "3 hours ago" },
    { id: 3, user: "Robert Williams", action: "updated grades", subject: "English Literature", time: "5 hours ago" },
    { id: 4, user: "Emily Davis", action: "scheduled an event", subject: "Annual Sports Day", time: "Yesterday" },
    { id: 5, user: "Michael Brown", action: "added a new student", subject: "Class 10-A", time: "Yesterday" },
  ]

  return (
    <Card title="Recent Activities">
      <div className="max-h-64 overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {activities.map((activity) => (
            <li key={activity.id} className="py-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.subject}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default RecentActivities
