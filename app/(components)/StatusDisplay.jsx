import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <div className='inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200'>
      {status}
    </div>
  )
}

export default StatusDisplay
