import React from 'react'
import { useState } from 'react'
import { classes } from '../../../../utils/classes'
import SetDueDate from './components/SetDueDate'
import SetLabel from './components/SetLabel'
import SetPriority from './components/SetPriority'

const AddTaskForm = ({ 
    setVisible, 
    handleAddchild,
    handleEditTask,
    editTask,
    title, 
    description,
    label,
    priority,
    dueDate, 
}) => {
    const [titleInput, setTitleInput] = useState(title ? title : '');
    const [descriptionInput, setDescriptionInput] = useState(description ? description : '');
    const [labelInput, setLabelInput] = useState(label);
    const [priorityInput, setPriorityInput] = useState(priority);
    const [dueDateInput, setDueDateInput] = useState(dueDate);
    
    return (
        <>
            <div
                className = 'flex flex-col bg-1 rounded-xl p-2 text-color-1'
            >
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
                            typeof setLabelInput === 'function' && 
                            <SetLabel 
                                label = {labelInput} 
                                setLabel = {setLabelInput} 
                            />
                        }
                        {   
                            typeof setPriorityInput === 'function' && 
                            <SetPriority 
                                priority = {priorityInput} 
                                setPriority = {setPriorityInput} 
                            />
                        }
                        {
                            typeof setDueDateInput === 'function' && 
                            <SetDueDate 
                                dueDate = {dueDateInput} 
                                setDueDate = {setDueDateInput} 
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
                            className = {`${classes.btnPrimary + 'ml-3 '} ${((titleInput === '') && classes.disabled)}`}
                            disabled = {(titleInput === '')}
                            onClick = {e => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(11111111111)
                                if(!editTask) {
                                    handleAddchild(
                                        e, 
                                        titleInput, 
                                        descriptionInput,
                                        labelInput, 
                                        priorityInput,
                                        dueDateInput,
                                    );
                                } else {
                                    handleEditTask(
                                        e,
                                        titleInput, 
                                        descriptionInput,
                                        labelInput, 
                                        priorityInput,
                                        dueDateInput,
                                    )
                                }
                            }}
                        >
                            Add Task
                        </button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default AddTaskForm