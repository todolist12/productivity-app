import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Loading from 'react-loading'
import { db } from '../../../firebase-config'
import { AuthContext } from '../../../providers/AuthProvider'
import DayHeader from './components/DayHeader'
import DayTaskBoard from './components/DayTaskBoard'
import DayTasksList from './components/DayTasksList'
import * as immutable from 'object-path-immutable'
import TaskListProvider from '../../../providers/TaskListProvider'
import { createUid } from '../../../utils/functions'
import { deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

const DayPage = ({ date, day, month, year }) => {
    const { currentUser, loading, setCurrentUser } = useContext(AuthContext)
    const [sections, setSections] = useState([])
    const [view, setView] = useState('list')

    useEffect(() => {
        if(!loading) {
            if(currentUser.days[day + '-' + month + '-' + year])
                if(currentUser.days[day + '-' + month + '-' + year]){
                    if(currentUser.days[day + '-' + month + '-' + year].sections) {
                        setSections(Object.values(currentUser.days[day + '-' + month + '-' + year].sections))
                    }
                }
        }
    }, [currentUser])

    useEffect(() => {
        const handleInializeDay = async () => {
            const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`);
            try {
                const snapshot = await getDoc(docRef)
                if(snapshot.exists()) {
                    return ;
                } else {
                    await initializeDay();
                }
            } catch (e) {
                console.log(e)
            }
        }
        handleInializeDay();
    }, [])

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
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`)
        const docData = {
            [task.path + '.completed'] : !task.completed
        }
        try {
            await setCurrentUser(immutable.set(currentUser, `days.${day + '-' + month + '-' + year}.${task.path}.completed`, !task.completed))
            await updateDoc(docRef, docData);
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
                creationTime: task.creationTime,
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
                creationTime: task.creationTime,
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

    const handleDeleteSection = async (section) => {
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`);
        const docData = {
            ['sections.' + section.id] : deleteField()
        }
        try {
            await updateDoc(docRef, docData)
            setCurrentUser(immutable.del(currentUser, `days.${day + '-' + month + '-' + year}.` + 'sections.' + section.id))
        } catch (e) {
            console.log(e)
        }
    }

    const updateSectionName = async(newName, section) => {
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`);
        const docData = {
            ['sections.' + section.id + '.name']: newName,
        }
        try {
            await updateDoc(docRef, docData)
        } catch (e) {
            console.log(e)
        }
    }

    const initializeDay = async () => {
        const docRef = doc(db, `users/${currentUser.id}/days/${day + '-' + month + '-' + year}`);
        const docData = {
            sections: {
                todo: {
                    creationTime: Number(1),
                    id: 'todo',
                    name: 'todo',
                    tasks: {},
                },
                done: {
                    creationTime: Number(2),
                    id: 'done',
                    name: 'done',
                    tasks: {},
                },
                overdue: {
                    creationTime: Number(3),
                    id: 'overdue',
                    name: 'overdue',
                    tasks: {},
                },
                thisweek: {
                    creationTime: Number(4),
                    id: 'thisweek',
                    name: 'thisweek',
                    tasks: {},
                },
                nextweek: {
                    creationTime: Number(5),
                    id: 'nextweek',
                    name: 'nextweek',
                    tasks: {},
                },
                later: {
                    creationTime: Number(6),
                    id: 'later',
                    name: 'later',
                    tasks: {},
                }
            }
        }
        try {
            await setDoc(docRef, docData) 
            setCurrentUser(immutable.set(currentUser, `days.${day + '-' + month + '-' + year}`, docData))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>  
            {
                !loading ? 
                    <>
                        <DayHeader 
                            listView = {view}
                            setListView = {setView}
                            date = {date} 
                            day = {day} 
                            month = {month} 
                            year = {year}
                        />
                        {
                            <TaskListProvider 
                                sections = {sections}
                                setSections = {setSections}
                                handleAddSection = {handleAddSection}
                                handleDeleteSection = {handleDeleteSection}
                                handleAddTask = {handleAddTask} 
                                handleEditTask = {hanldeEditTask}
                                handleToggleComplete = {handleToggleComplete}
                                handleDeleteTask = {handleDeleteTask}
                                updateSectionName = {updateSectionName}
                                date = {day + '-' + month + '-'+ year} 
                            >
                                {view === 'list' ? <DayTasksList
                                    date = {date} 
                                    day = {day} 
                                    month = {month} 
                                    year = {year}
                                    sections = {sections}
                                    setSections = {setSections}
                                /> : 
                                <DayTaskBoard />
                            }
                            </TaskListProvider>
                        }
                    </>
                :
                    <Loading />
            }   
        </>
    )
}

export default DayPage