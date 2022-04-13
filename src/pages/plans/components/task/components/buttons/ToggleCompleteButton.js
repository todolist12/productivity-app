import React from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../../firebase-config'

const ToggleCompleteButton = ({ task, plan }) => {
    const handleToggleComplete = () => {
        const docRef = doc(db, plan.id)
        const docData = {
            [task.path + '.completed'] : !task.completed
        }
        try {
            updateDoc(docRef, docData);
            
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <button onClick = {handleToggleComplete} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
        </button>
    )
}

export default ToggleCompleteButton