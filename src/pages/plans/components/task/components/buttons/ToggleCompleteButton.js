import React, { useContext } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../../firebase-config'
import { AuthContext } from '../../../../../../providers/AuthProvider'
import { PlanContext } from '../../../../../../providers/PlanProvider'
import * as immutable from 'object-path-immutable'

const ToggleCompleteButton = ({ task, plan }) => {
    const { currentUser } = useContext(AuthContext)
    const { setPlan } = useContext(PlanContext) 

    const handleToggleComplete = () => {
        const docRef = doc(db, `users/${currentUser.id}/plans/${plan.id}`)
        const docData = {
            [task.path + '.completed'] : !task.completed
        }
        try {
            updateDoc(docRef, docData);
            const modifiedPlan = immutable.set(plan, task.path + '.completed', !task.completed)
            setPlan(modifiedPlan)
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