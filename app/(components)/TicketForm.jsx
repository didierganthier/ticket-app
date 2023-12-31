"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TicketForm = ({ticket}) => {

    const EDITMODE = ticket._id === 'new' ? false : true;
    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((preState) => ({
            ...preState,
            [name]: value,
          }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (EDITMODE) {
          const res = await fetch(`/api/Tickets/${ticket._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ formData }),
          });
          if (!res.ok) {
            throw new Error("Failed to update ticket");
          }
        } else {
          const res = await fetch("/api/Tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            //@ts-ignore
            "Content-Type": "application/json",
          });
          if (!res.ok) {
            throw new Error("Failed to create ticket");
          }
        }
    
        router.push("/");
        router.refresh();
      };

    const startingTicketData = {
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: 'open',
        category: 'bug'
    }

    if(EDITMODE) {
        startingTicketData.title = ticket.title;
        startingTicketData.description = ticket.description;
        startingTicketData.priority = ticket.priority;
        startingTicketData.progress = ticket.progress;
        startingTicketData.status = ticket.status;
        startingTicketData.category = ticket.category;
    }

    const [formData, setFormData] = useState(startingTicketData)

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='POST' onSubmit={handleSubmit}>
        {EDITMODE? <h3>Update Your Ticket</h3> : <h3>Create Your Ticket</h3>}
        <label>Title</label>
        <input type='text' id='title' name='title' value={formData.title} onChange={handleChange} required={true} />
        <label>Description</label> 
        <textarea type='text' id='description' name='description' value={formData.description} onChange={handleChange} required={true} rows={5} />
        <label>Category</label>
        <select id='category' name='category' value={formData.category} onChange={handleChange}>
            <option value='bug'>Bug</option>
            <option value='feature'>Feature</option>
            <option value='other'>Other</option>
        </select>
        <label>Priority</label>
        <div>
            <input type='radio' id='priority-1' name='priority' value={1} onChange={handleChange} checked={formData.priority == 1} />
            <label>1</label>
            <input type='radio' id='priority-2' name='priority' value={2} onChange={handleChange} checked={formData.priority == 2} />
            <label>2</label>
            <input type='radio' id='priority-3' name='priority' value={3} onChange={handleChange} checked={formData.priority == 3} />
            <label>3</label>
            <input type='radio' id='priority-4' name='priority' value={4} onChange={handleChange} checked={formData.priority == 4} />
            <label>4</label>
            <input type='radio' id='priority-5' name='priority' value={5} onChange={handleChange} checked={formData.priority == 5} />
            <label>5</label>
        </div>
        <label>Progress</label>
        <input type='range' id='progress' name='progress' value={formData.progress} onChange={handleChange} min={0} max={100} />
        <label>Status</label>
        <select id='status' name='status' value={formData.status} onChange={handleChange}>
            <option value='open'>Open</option>
            <option value='in-progress'>In Progress</option>
            <option value='closed'>Closed</option>
        </select>
        <input type='submit' className='btn' value={EDITMODE? 'Update Ticket' : 'Create Ticket'} />
        </form>
    </div>
  )
}

export default TicketForm
