import React, { useContext } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../../firebase-config'
import { AuthContext } from '../../../../../../providers/AuthProvider'

const ToggleCompleteButton = ({ task, plan }) => {
    const { currentUser } = useContext(AuthContext)

    const handleToggleComplete = () => {
        const docRef = doc(db, `users/${currentUser.id}/plans/${plan.id}`)
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