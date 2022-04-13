import React, { useContext, useState } from 'react'
import AddChildButton from './components/buttons/AddChildButton'
import DeleteTaskButton from './components/buttons/DeleteTaskButton'
import EditTaskButton from './components/buttons/EditTaskButton'
import ToggleCompleteButton from './components/buttons/ToggleCompleteButton'
import useLocalStorage from '../../../../hooks/UseLocalStorage'
import { Transition } from '@mantine/core';

const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
};

const Task = ({ task, plan }) => {

    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const [showChilds, setShowChilds] = useLocalStorage('showChilds-' + task.id, false);
    const tasks = task ? task.children ? Object.values(task.children) : [] : []

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen)
    }

    return (
        <div className = 'duration-100 task transition'>
            <div className = 'text-color-1 p-3 bg-1 mt-2 rounded-lg'>
                <div className = 'flex justify-between items-center'>     
                    <div className = 'w-4/6 flex'>
                        {!(JSON.stringify(task.children) === '{}') && 
                            <button onClick={e => setShowChilds(!showChilds)}>
                                show childs
                            </button>
                        }
                        <div className = {`cursor-pointer text-xl break-all h-7 box-border overflow-hidden ${task.completed && 'complete'}`} onClick = {toggleDescription}>
                            {task.name}
                        </div>
                    </div>
                    <div className = 'flex items-center'>
                        <ToggleCompleteButton task = {task} plan = {plan} />                
                        <EditTaskButton task = {task} plan = {plan} />
                        <AddChildButton task = {task} />
                        <DeleteTaskButton task = {task} plan = {plan} />
                    </div>
                </div>
                {descriptionOpen && 
                    <div className = 'text-sm opacity-90 break-all mt-3'>
                        {task.description} 
                    </div>
                }
                <Transition mounted = {(showChilds === true)} transition={scaleY} duration={500} timingFunction="ease">
                        {(styles) => {
                            if(showChilds) {
                            return (
                            <div style={{...styles}}>
                                {
                                    tasks.map(task => {
                                        return (
                                            <div key = {task.id}>
                                                <Task task = {task} plan = {plan} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )}}}
                </Transition>
            </div>
        </div>
    )
}

export default Task