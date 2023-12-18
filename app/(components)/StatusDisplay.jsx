import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-200'
      case 'In Progress':
        return 'bg-yellow-200'
      case 'Closed':
        return 'bg-red-200'
      default:
        return 'bg-green-200'
    }
  }


  return (
    <div className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </div>
  )
}

export default StatusDisplay
