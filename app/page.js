import React from 'react'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log("Failed to fetch tickets", error);
  }
}

const Dashboard = async () => {

  const tickets = await getTickets();

  const uniqueCategories = [...new Set(tickets.map((ticket) => ticket.category))] 

  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard
