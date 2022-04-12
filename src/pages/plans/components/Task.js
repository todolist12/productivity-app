import React, { useContext, useState } from 'react'
import { deleteField, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase-config'
import { AuthContext } from '../../../providers/AuthProvider'

const Task = ({ task, plan }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const { currentUser } = useContext(AuthContext)

    const handleCheck = () => {

    }

    const handleAddChild = () => {

    }

    const handleDelete = () => {
        const docRef = doc(db, `users/${currentUser.id}/plans/${plan.id}`)
        const docData = {
            [`tasks.${task.id}`]: deleteField()
        }
        updateDoc(docRef, docData);
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