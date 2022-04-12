import React, { useContext, useState } from 'react'
import { deleteField, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import { PlanContext } from '../../../../providers/PlanProvider'
import TaskChild from './TaskChild'
import TaskParent from './TaskParent'
import { createUid } from '../../../../utils/functions'
import AddTaskButton from '../add-task/components/AddTaskButton'

const Task = ({ task, plan }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const { setPlan } = useContext(PlanContext)

    const handleCheck = () => {

    }

    const getPath = () => {
        const childId = createUid();
        console.log(`tasks.${task.id}.children.${childId}`)
        return [`tasks.${task.id}.children.${childId}`, childId]
    }

    const handleDelete = () => {
        const docRef = doc(db, `users/${currentUser.id}/plans/${plan.id}`)
        const docData = {
            [`tasks.${task.id}`]: deleteField()
        }
        updateDoc(docRef, docData);
        delete plan.tasks[task.id]
        setPlan({...plan})
    }

    const handleEdit = () => {

    }
    
    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen)
    }

    if(task.children.length === 0) {
        return (
            <TaskChild getPath = {getPath} task = {task} plan = {plan} handleEdit = {handleEdit} handleCheck = {handleCheck} handleDelete = {handleDelete} />
        ) 
    } else {
        return (
            <TaskParent getPath = {getPath} task = {task} plan = {plan} handleEdit = {handleEdit} handleCheck = {handleCheck} handleDelete = {handleDelete} />
        )
    }
}

export default Task