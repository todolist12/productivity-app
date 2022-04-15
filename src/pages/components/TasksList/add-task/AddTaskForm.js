import React from 'react'
import { useState } from 'react'
import { classes } from '../../../../utils/classes'
import SetDueDate from './components/SetDueDate'
import SetLabel from './components/SetLabel'
import SetPriority from './components/SetPriority'

const AddTaskForm = ({ 
    visible, 
    setVisible, 
    handleAddchild, 
}) => {
    const [titleInput, setTitleInput] = useState();
    const [descriptionInput, setDescriptionInput] = useState();
    const [label, setLabel] = useState();
    const [priority, setPriority] = useState();
    const [dueDate, setDueDate] = useState();
    
    return (
        <>
            {
                visible && 
                <div className = 'flex flex-col bg-1 rounded-xl p-2 text-color-1'>
                    <div className = 'flex w-full flex-col'>
                        <input 
                            value = {titleInput} 
                            onChange = {e => setTitleInput(e.target.value)} 
                            className = {classes.addTaskFormInput + 'font-bold text-lg'} 
                            placeholder = 'Task name'
                        />
                        <input 
                            value = {descriptionInput}
                            onChange = {e => setDescriptionInput(e.target.value)}
                            className = {classes.addTaskFormInput + 'text-sm text-color-3'}
                            placeholder = 'Description'
                        />
                    </div>
                    <div className = 'flex items-center justify-between mt-2'>  
                        <div className = 'flex items-center'>
                            {
                                typeof setLabel === 'function' && 
                                <SetLabel 
                                    label = {label} 
                                    setLabel = {setLabel} 
                                />
                            }
                            {   
                                typeof setPriority === 'function' && 
                                <SetPriority 
                                    priority = {priority} 
                                    setPriority = {setPriority} 
                                />
                            }
                            {
                                typeof setDueDate === 'function' && 
                                <SetDueDate 
                                    dueDate = {dueDate} 
                                    setDueDate = {setDueDate} 
                                />
                            }
                        </div>
                        <div>                    
                            <button 
                                className = {classes.btnSecondary}
                                onClick = {e => {
                                    e.stopPropagation()
                                    setVisible(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button 
                                className = {classes.btnPrimary + 'ml-3'}
                                onClick = {e => {
                                    handleAddchild(
                                        e, 
                                        titleInput, 
                                        descriptionInput,
                                        label, 
                                        priority,
                                        dueDate
                                    );
                                }}
                            >
                                Add Task
                            </button>
                        </div>
                    </div> 
                </div>
            }
        </>
    )
}

export default AddTaskForm