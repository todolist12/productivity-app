import React, { useContext, useState } from 'react'
import { deleteField, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import { PlanContext } from '../../../../providers/PlanProvider'
import AddTask from '../add-task/AddTask'
import { getByPlaceholderText } from '@testing-library/react'

const TaskChild = ({ task, getPath, plan, handleAddChild, handleDelete, handleCheck, handleEdit}) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false)

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
                <div className = 'flex items-center'>                
                    <button onClick = {handleCheck} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </button>
                    <button onClick = {handleEdit} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <AddTask getPath = {getPath}>
                        <div className = 'text-color-5 flex items-center justify-between hover text-2xl'>
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                    </AddTask>
                    <button onClick = {handleDelete} className = 'hover flex items-center justify-between text-red-400 text-2xl'>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>
            {descriptionOpen && 
                <div className = 'text-sm opacity-90 break-all mt-3'>
                    {task.description} 
                </div>
            }
            
        </div>
    )
}

export default TaskChild