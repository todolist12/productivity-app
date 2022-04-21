import React from 'react'
import useLocalStorage from '../../../../hooks/UseLocalStorage'
import { Transition } from '@mantine/core';
import { classes } from '../../../../utils/classes';
import { PRIORITY_COLORS } from '../add-task/components/SetPriority';
import Menu from './components/Menu';
import { useState } from 'react';
import AddTaskForm from '../add-task/AddTaskForm';

const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
};

const Task = ({ 
        task, 
        isChild,
        handleDelete, 
        handleEditTask, 
        handleAddTask, 
        handleToggleComplete, 
        handleAssignDueDate,
        date,
    }) => {
    const [descriptionOpen, setDescriptionOpen] = useLocalStorage('showDescription-' + task.id, false)
    const [showChilds, setShowChilds] = useLocalStorage('showChilds-' + task.id, true);
    const tasks = task ? task.children ? Object.values(task.children) : [] : [];
    const [menuOpen, setMenuOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [addChildOpen, setAddChildOpen] = useState(false)

    const handleOpenEdit = () => { setEditOpen(true); setMenuOpen(false)}

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen)
    }

    const toggleAddChild = () => { setAddChildOpen(true); setMenuOpen(false)}

    if(editOpen) {
        return (
            <div className = {`${isChild && 'pl-4'}`}>
                <AddTaskForm 
                    setVisible={setEditOpen}
                    editTask = {true}
                    task = {task}
                    handleEditTask = {handleEditTask}
                    title = {task.name}
                    description = {task.description}
                    path = {task.path}
                    priority = {task.priority}
                    dueDate = {task.dueDate}
                    label = {task.label}
                />
            </div>
        )
    }

    return (
        <div className = {`duration-100 task transition bg-1 rounded ${(isChild) && 'pl-6 pr-1'}`}>
            <div className = {`text-color-1 ${(isChild) && 'p-1 pr-3 pb-3'} ${(!isChild) && 'mt-2 p-2'}`}>
                <div className = 'flex justify-between items-center'>     
                    <div className = 'w-4/6 flex items-center'>
                        <button className = {classes.iconButton + 'rounded-full w-5 h-5 p-1 border-3 text-xl text-color-5 flex items-center justify-center'} onClick={e => handleToggleComplete(e, task)} style = {{borderColor : PRIORITY_COLORS.find(c => c.value === task.priority).label}}>
                            {/* <ion-icon name={`ellipse-outline`}></ion-icon> */}
                            {
                                    <div className = {`hover-block ${!task.completed && 'opacity-0'} text-sm text-color-1 flex items-center justify-center`}>
                                        <ion-icon name={`checkmark-outline`}></ion-icon>
                                    </div>
                            }
                        </button>
                        {!(JSON.stringify(task.children) === '{}') && 
                            <button onClick={e => setShowChilds(!showChilds)} className = {`pr-1 text-xl flex items-end parent${showChilds} ${task.completed && 'complete'}`}>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </button>
                        }
                        <div className = 'flex flex-col justify-center'>
                            <div className = {`cursor-pointer hover text-lg break-all box-border overflow-hidden ${task.completed && 'complete'}`} onClick = {toggleDescription}>
                                {task.name}
                            </div>
                            {descriptionOpen && 
                                <div className = {`text-sm opacity-90 break-all ${task.completed && 'complete'}`}>
                                    {task.description} 
                                </div>
                            }
                        </div>
                    </div>
                    <div className = {`flex items-center show-btn `}>
                        
                        {   
                            
                            <Menu 
                                open = {menuOpen}
                                setOpen = {setMenuOpen}
                                task = {task}
                                isChild = {isChild}
                                handleDelete = {handleDelete}
                                handleAddChild = {toggleAddChild}
                                handleAssignDueDate = {handleAssignDueDate}
                                handleEdit = {handleOpenEdit}
                            />  
                        }
                    </div>
                </div>
            </div>
            <Transition mounted = {(showChilds === true)} transition={scaleY} duration={500} timingFunction="ease">
                    {(styles) => {
                        if(showChilds) {
                        return (
                        <div style={{...styles}}>
                            {
                                tasks.sort(function(a, b) {
                                    if(!(b.priority - a.priority)) {
                                        return a.name < b.name ? -1 : 1
                                    }
                                    return b.priority - a.priority
                                }).map(task => {
                                    return (
                                        <div key = {task.id}>
                                            <Task 
                                                date = {date}
                                                task = {task} 
                                                isChild = {true}
                                                handleDelete = {handleDelete}
                                                handleAddTask = {handleAddTask}
                                                handleEditTask = {handleEditTask}
                                                handleToggleComplete = {handleToggleComplete}
                                                handleAssignDueDate = {handleAssignDueDate}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}}}
            </Transition>
            {
                addChildOpen &&
                <div className = 'pl-4'>
                    <AddTaskForm 
                        setVisible={setAddChildOpen}
                        handleAddTask = {handleAddTask}
                        path = {task.path + '.children.'}
                        date = {date}
                    />
                </div>
            }
        </div>
    )
}

export default Task