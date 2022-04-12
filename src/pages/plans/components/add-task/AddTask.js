import React, { useState } from 'react'
import AddTaskButton from './components/AddTaskButton'
import AddTaskForm from './components/AddTaskForm'

const AddTask = ({children, getPath}) => {
    const [formOpen, setFormOpen] = useState(false)

    return (
        <div className = 'w-full'>
            {
                formOpen 
                    ? 
                    <AddTaskForm setFormOpen = {setFormOpen} getPath = {getPath} />
                    : 
                    <div className = 'flex items-center'>
                        <AddTaskButton setFormOpen = {setFormOpen} children = {children} />
                    </div>
            }
        </div>
    )
}

export default AddTask