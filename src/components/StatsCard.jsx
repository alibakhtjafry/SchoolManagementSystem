import { ArrowUp, ArrowDown } from "lucide-react"

const StatsCard = ({ title, value, icon: Icon, change, changeType }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 mr-4 text-primary bg-primary/10 rounded-full dark:text-primary-100 dark:bg-primary/20">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        {change && (
          <div className="flex items-center text-xs mt-1">
            {changeType === "increase" ? (
              <ArrowUp className="w-3 h-3 text-green-500" />
            ) : (
              <ArrowDown className="w-3 h-3 text-red-500" />
            )}
            <span className={`ml-1 ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>{change}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatsCard
