const Card = ({ title, children }) => {
    return (
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        {title && <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">{title}</h4>}
        {children}
      </div>
    )
  }
  
  export default Card
