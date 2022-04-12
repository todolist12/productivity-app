import React, { useState } from 'react'
import Box from '../../components/Box'

const Task = ({ task }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false)

    const handleCheck = () => {

    }

    const handleAddChild = () => {

    }

    const handleDelete = () => {
        
    }

    const handleEdit = () => {

    }
    
    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen)
    }

    return (
        <div className = 'text-color-1 p-3 bg-1 mt-2 mb-2 rounded-lg'>
            <div className = 'flex justify-between items-center'>     
                <div className = 'w-4/6'>
                    <div className = 'cursor-pointer text-xl break-all h-7  box-border overflow-hidden' onClick = {toggleDescription}>
                        {task.name}
                    </div>
                </div>
                <div className = 'flex'>                
                    <button onClick = {handleCheck} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </button>
                    <button onClick = {handleEdit} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button onClick = {handleAddChild} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                    <button onClick = {handleDelete} className = 'hover flex items-center justify-between text-red-400 text-2xl'>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>
            {descriptionOpen && 
                <div className = 'text-sm opacity-90 break-all'>
                    {task.description} 
                </div>
            }
            
        </div>
    )
}

export default Task