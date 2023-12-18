import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-green-200'
      case 'in-progress':
        return 'bg-yellow-200'
      case 'closed':
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
