import React from 'react'
import useLocalStorage from '../../../../hooks/UseLocalStorage'
import { Transition } from '@mantine/core';
import { classes } from '../../../../utils/classes';

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
    handleEdit, 
    handleAddTask, 
    handleToggleComplete, 
    handleAssignDueDate,
    }) => {
        const [descriptionOpen, setDescriptionOpen] = useLocalStorage('showDescription-' + task.id, false)
        const [showChilds, setShowChilds] = useLocalStorage('showChilds-' + task.id, true);
        const tasks = task ? task.children ? Object.values(task.children) : [] : []
    
        const toggleDescription = () => {
            setDescriptionOpen(!descriptionOpen)
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
                            <button className = {classes.iconButton + ' text-xl text-color-5'} onClick={e => handleToggleComplete(e, task)}>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
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
                        <div className = 'flex items-center'>
                            
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