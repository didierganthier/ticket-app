import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    
    if(!res.ok) {
      throw new Error('Faled to get Ticket');
    }
  
    return res.json();
}

let updateTicketData = {};
const TicketPage = async ({params}) => {

  const EDITMODE = params.id === 'new' ? false : true;

  if (EDITMODE) {
    console.log('EDIT MODE');
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    console.log(updateTicketData);
  } else {
    updateTicketData = {
      _id: 'new'
    }
    console.log("TicketData", updateTicketData);
    console.log('NOT EDIT MODE');
  }

  return (
    <TicketForm ticket={updateTicketData} />
  )
}

export default TicketPage
