"use client";

import React, { useState } from 'react'

const TicketForm = () => {

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setTicketData({
            ...ticketData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(ticketData);
    } 

    const startingTicketData = {
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: 'open',
        category: 'bug'
    }

    const [ticketData, setTicketData] = useState(startingTicketData)

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='POST' onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input type='text' id='title' name='title' value={ticketData.title} onChange={handleChange} required={true} />
        <label>Description</label> 
        <textarea type='text' id='description' name='description' value={ticketData.description} onChange={handleChange} required={true} rows={5} />
        <label>Category</label>
        <select id='category' name='category' value={ticketData.category} onChange={handleChange}>
            <option value='bug'>Bug</option>
            <option value='feature'>Feature</option>
            <option value='other'>Other</option>
        </select>
        <label>Priority</label>
        <div>
            <input type='radio' id='priority-1' name='priority' value={1} onChange={handleChange} checked={ticketData.priority == 1} />
            <label>1</label>
            <input type='radio' id='priority-2' name='priority' value={2} onChange={handleChange} checked={ticketData.priority == 2} />
            <label>2</label>
            <input type='radio' id='priority-3' name='priority' value={3} onChange={handleChange} checked={ticketData.priority == 3} />
            <label>3</label>
            <input type='radio' id='priority-4' name='priority' value={4} onChange={handleChange} checked={ticketData.priority == 4} />
            <label>4</label>
            <input type='radio' id='priority-5' name='priority' value={5} onChange={handleChange} checked={ticketData.priority == 5} />
            <label>5</label>
        </div>
        <label>Progress</label>
        <input type='range' id='progress' name='progress' value={ticketData.progress} onChange={handleChange} min={0} max={100} />
        <label>Status</label>
        <select id='status' name='status' value={ticketData.status} onChange={handleChange}>
            <option value='open'>Open</option>
            <option value='in-progress'>In Progress</option>
            <option value='closed'>Closed</option>
        </select>
        <input type='submit' className='btn' value='Create Ticket' />
      </form>
    </div>
  )
}

export default TicketForm
