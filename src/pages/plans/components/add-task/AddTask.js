import React, { useState } from 'react'
import AddTaskButton from './components/AddTaskButton'
import AddTaskForm from './components/AddTaskForm'

const AddTask = () => {
    const [formOpen, setFormOpen] = useState(false)

    return (
        <div className = 'w-full'>
            {
                formOpen 
                    ? 
                    <AddTaskForm setFormOpen = {setFormOpen} />
                    : 
                    <AddTaskButton setFormOpen = {setFormOpen} />
            }
        </div>
    )
}

export default AddTask