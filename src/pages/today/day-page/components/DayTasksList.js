import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import { createUid } from '../../../../utils/functions'
import TasksList from '../../../components/TasksList/TasksList'
import * as immutable from 'object-path-immutable'

const DayTasksList = ({ date, day, month, year, tasks, setTasks }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)

    const handleAddTask = async (
        e, 
        nameInput, 
        descriptionInput,
        labelInput, 
        priorityInput,
        dueDateInput, 
        path, ) => {
        const taskId = createUid();
        const newPath = path + taskId;
        const docRef = doc(db, `users/${currentUser.id}/days/${dueDateInput}`);
        const docData = {
            [newPath]: {
                name: nameInput,
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

        const docData1 = {
            tasks : {}
        }

        try {
            try {
                await updateDoc(docRef, docData)
            } catch (e) {
                await setDoc(docRef, docData1, { merge: true })
                await updateDoc(docRef, docData)
            }
            setCurrentUser(immutable.set(currentUser, `days.${dueDateInput}.${newPath}`, {
                name: nameInput,
                description: descriptionInput,
                label: labelInput,
                priority: priorityInput,
                dueDate: dueDateInput,
                children: {},
                path: newPath,
                id: taskId,
                completed: false,
            }))
        } catch (e) {
            console.log(e);
        }
    }

    const handleToggleComplete = async (e, task) => {
        e.stopPropagation();
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`)
        const docData = {
            [task.path + '.completed'] : !task.completed
        }
        try {
        updateDoc(docRef, docData);
        setCurrentUser(immutable.set(currentUser, `days.${day + '-' + month + '-' + year}.${task.path}.completed`, !task.completed))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <TasksList 
            tasks = {tasks} 
            setTasks = {setTasks}
            handleAddTask = {handleAddTask} 
            handleToggleComplete = {handleToggleComplete}
            date = {day + '-' + month + '-'+ year} 
        />
    )
}

export default DayTasksList