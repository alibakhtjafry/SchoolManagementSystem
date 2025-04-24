import { Calendar } from "lucide-react"
import Card from "./Card"

const UpcomingEvents = () => {
  // Mock data
  const events = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      date: "May 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
    },
    { id: 2, title: "Science Exhibition", date: "May 20, 2023", time: "9:00 AM - 4:00 PM", location: "School Hall" },
    { id: 3, title: "Annual Sports Day", date: "May 25, 2023", time: "All Day", location: "School Grounds" },
    { id: 4, title: "Final Exams Begin", date: "June 5, 2023", time: "9:00 AM", location: "Examination Halls" },
  ]

  return (
    <Card title="Upcoming Events">
      <div className="max-h-64 overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {events.map((event) => (
            <li key={event.id} className="py-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{event.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date} • {event.time}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{event.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default UpcomingEvents
