import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import { createUid } from '../../../../utils/functions'
import TasksList from '../../../components/TasksList/TasksList'

const DayTasksList = ({ date, day, month, year, tasks }) => {
    const { currentUser } = useContext(AuthContext)

    const handleAddTask = async (
        e, 
        titleInput, 
        descriptionInput,
        labelInput, 
        priorityInput,
        dueDateInput, 
        path, ) => {
        const taskId = createUid();
        const newPath = path + taskId;
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-'+ year}`);
        const docData = {
            [newPath]: {
                title: titleInput,
                description: descriptionInput,
                label: labelInput,
                priority: priorityInput,
                dueDate: dueDateInput,
                children: {},
                path: newPath,
                id: taskId,
                completed: false,
            }
        }
        try {
            await updateDoc(docRef, docData)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TasksList 
            tasks = {tasks} 
            handleAddTask = {handleAddTask} 
            date = {day + '-' + month + '-'+ year} 
        />
    )
}

export default DayTasksList