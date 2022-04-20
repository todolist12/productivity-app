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
    }) => {
    const [descriptionOpen, setDescriptionOpen] = useLocalStorage('showDescription-' + task.id, false)
    const [showChilds, setShowChilds] = useLocalStorage('showChilds-' + task.id, true);
    const tasks = task ? task.children ? Object.values(task.children) : [] : [];
    const [menuOpen, setMenuOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const handleOpenEdit = () => { setEditOpen(true); setMenuOpen(false)}

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen)
    }

    if(editOpen) {
        return (
            <>
                <AddTaskForm 
                    setVisible={setEditOpen}
                    editTask = {true}
                    handleEditTask = {handleEditTask}
                    title = {task.name}
                    description = {task.description}
                    path = {task.path}
                    priority = {task.priority}
                    dueDate = {task.dueDate}
                    label = {task.label}
                />
            </>
        )
    }

    return (
        <div className = {`duration-100 task transition bg-1 rounded ${(isChild) && 'pl-6 pr-1'}`}>
            <div className = {`text-color-1 ${(isChild) && 'p-1 pr-3 pb-3'} ${(!isChild) && 'mt-2 p-2'}`}>
                <div className = 'flex justify-between items-center'>     
                    <div className = 'w-4/6 flex items-center'>
                        {!(JSON.stringify(task.children) === '{}') && 
                            <button onClick={e => setShowChilds(!showChilds)} className = {`pr-2 text-xl flex items-end parent${showChilds} ${task.completed && 'complete'}`}>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </button>
                        }
                        <button className = {classes.iconButton + ' text-xl text-color-5'} onClick={e => handleToggleComplete(e, task)} style = {{color : PRIORITY_COLORS.find(c => c.value === task.priority).label}}>
                            <ion-icon name={`ellipse-outline`}></ion-icon>
                            {
                                    <div className = {`absolute hover-block ${!task.completed && 'opacity-0'} text-sm text-color-1 flex items-center justify-center pl-1`}>
                                        <ion-icon name={`checkmark-outline`}></ion-icon>
                                    </div>
                            }
                        </button>
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
                        <Menu 
                            open = {menuOpen}
                            setOpen = {setMenuOpen}
                            task = {task}
                            isChild = {isChild}
                            handleDelete = {handleDelete}
                            handleAddTask = {handleAddTask}
                            handleAssignDueDate = {handleAssignDueDate}
                            handleEdit = {handleOpenEdit}
                        />
                    </div>
                </div>
            </div>
            <Transition mounted = {(showChilds === true)} transition={scaleY} duration={500} timingFunction="ease">
                    {(styles) => {
                        if(showChilds) {
                        return (
                        <div style={{...styles}}>
                            {
                                tasks.map(task => {
                                    return (
                                        <div key = {task.id}>
                                            <Task task = {task} isChild = {true}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}}}
            </Transition>
        </div>
    )
}

export default Task