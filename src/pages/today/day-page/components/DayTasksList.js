import { createUserWithEmailAndPassword } from 'firebase/auth'
import { deleteField, doc, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import { createUid } from '../../../../utils/functions'
import TasksList from '../../../components/TasksList/TasksList'
import * as immutable from 'object-path-immutable'

const DayTasksList = ({ date, day, month, year, sections, setSections }) => {
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
                creationTime: date.getTime(),
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
                creationTime: date.getTime(),
            }))
        } catch (e) {
            console.log(e);
        }
    }

    const handleToggleComplete = async (e, task) => {
        // e.stopPropagation();
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`)
        const docData = {
            [task.path + '.completed'] : !task.completed
        }
        try {
            await updateDoc(docRef, docData);
            await setCurrentUser(immutable.set(currentUser, `days.${day + '-' + month + '-' + year}.${task.path}.completed`, !task.completed))
            // Object.values(task.children).forEach(child => {
            //     handleToggleComplete(e, child)
            // })
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteTask = async (task) => {
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`)
        const docData = {
            [task.path] : deleteField()
        }
        try {
            await updateDoc(docRef, docData);
            setCurrentUser(immutable.del(currentUser, `days.${day + '-' + month + '-' + year}.${task.path}`))
        } catch (e) {
            console.log(e)
        }
    }

    const hanldeEditTask = async (
        e, 
        task,
        nameInput, 
        descriptionInput,
        labelInput, 
        priorityInput,
        dueDateInput, 
        path,
    ) => {
        e.stopPropagation()
        const docRef = doc(db, `users/${currentUser.id}/days/${dueDateInput}`)
        const docData = {
            [path]: {
                name: nameInput,
                description: descriptionInput,
                label: labelInput,
                priority: priorityInput,
                dueDate: dueDateInput,
                children: task.children,
                path: path,
                id: task.id,
                completed: task.completed,
            }
        }

        const docRef2 = doc(db, `users/${currentUser.id}/days/${task.dueDate}`)

        const docData1 = {
            sections: {}
        }

        const docData2 = {
            [path]: deleteField()
        }

        try {
            try {
                await updateDoc(docRef2, docData2);
                await updateDoc(docRef, docData);
            } catch (e) {
                await updateDoc(docRef2, docData2);
                await setDoc(docRef, docData1);
                await updateDoc(docRef, docData);
            }
            setCurrentUser(immutable.set(
                    immutable.del(
                        currentUser, 
                        `days.${task.dueDate}.${path}`
                    ), `days.${dueDateInput}.${path}`, {
                name: nameInput,
                description: descriptionInput,
                label: labelInput,
                priority: priorityInput,
                dueDate: dueDateInput,
                children: task.children,
                path: path,
                id: task.id,
                completed: task.completed,
            }))
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddSection = async (name) => {
        const sectionId = createUid();
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`)
        const docData = {
            ['sections.' + sectionId] : {
                tasks: {},
                name: name,
                id: sectionId,
                creationTime: date.getTime()
            }
        }
        try {
            try {
                await updateDoc(docRef, docData);
            } catch (e) {
                await setDoc(docRef, {});
                await updateDoc(docRef, docData)
            }
            setCurrentUser(immutable.set(currentUser, `days.${day + '-' + month + '-' + year}.sections.${sectionId}`, {
                tasks: {},
                name: name,
                id: sectionId,
            }))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <TasksList 
            sections = {sections}
            setSections = {setSections}
            handleAddSection = {handleAddSection}
            handleAddTask = {handleAddTask} 
            handleEditTask = {hanldeEditTask}
            handleToggleComplete = {handleToggleComplete}
            handleDeleteTask = {handleDeleteTask}
            date = {day + '-' + month + '-'+ year} 
        />
    )
}

export default DayTasksList