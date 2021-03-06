import React, { useContext } from 'react'
import { deleteField, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../../firebase-config'
import { AuthContext } from '../../../../../../providers/AuthProvider'
import { PlanContext } from '../../../../../../providers/PlanProvider'
import * as immutable from 'object-path-immutable'

const DeleteTaskButton = ({ task, plan }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const { setPlan } = useContext(PlanContext)

    const handleDelete = (e) => {
        const docRef = doc(db, `users/${currentUser.id}/plans/${plan.id}`)
        const docData = {
            [task.path]: deleteField()
        }
        updateDoc(docRef, docData);
        delete plan.tasks[task.id]
        const updatedPlan = immutable.del(plan, task.path)
        const updatedUser = immutable.del(currentUser, `plans.${plan.id}.` + task.path)
        setPlan(updatedPlan)
        setCurrentUser(updatedUser)
    }

    return (
        <button onClick = {handleDelete} className = 'hover flex items-center justify-between text-red-400 text-2xl'>
            <ion-icon name="trash-outline"></ion-icon>
        </button>
    )
}

export default DeleteTaskButton