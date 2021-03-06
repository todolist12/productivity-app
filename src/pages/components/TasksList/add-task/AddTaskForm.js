import { ClickAwayListener } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { classes } from '../../../../utils/classes'
import SetDueDate from './components/SetDueDate'
import SetLabel from './components/SetLabel'
import SetPriority from './components/SetPriority'
import { TaskListContext } from '../../../../providers/TaskListProvider'

const AddTaskForm = ({ 
    setVisible, 
    editTask,
    task,
    title, 
    description,
    label,
    priority,
    dueDate, 
    date,
    path,
}) => {

    const [nameInput, setNameInput] = useState(title ? title : '');
    const [descriptionInput, setDescriptionInput] = useState(description ? description : '');
    const [labelInput, setLabelInput] = useState(label ? label : ['not started']);
    const [priorityInput, setPriorityInput] = useState(priority ? priority : Number(0));
    const [dueDateInput, setDueDateInput] = useState(
        dueDate ? 
            dueDate : 
            date ? date : 
            task ? task.dueDate : 
            path
        );
    const [priorityBtnOpen, setPriorityBtnOpen] = useState(false)

    const { handleEditTask, handleAddTask } = useContext(TaskListContext)
    
    return (
        <>
            <div
                className = 'flex flex-col bg-1 rounded p-2 text-color-1 mt-2'
            >
                <div className = 'flex w-full flex-col'>
                    <input 
                        value = {nameInput} 
                        onChange = {e => setNameInput(e.target.value)} 
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
                                open = {priorityBtnOpen}
                                setOpen = {setPriorityBtnOpen}
                            />
                        }
                        {
                            typeof setDueDateInput === 'function' && 
                            <SetDueDate 
                                dueDate = {dueDateInput} 
                                setDueDate = {setDueDateInput} 
                                currentDate = {date}
                            />
                        }
                    </div>
                    <div className = 'flex wrap-0'>                    
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
                            className = {`${classes.btnPrimary + 'ml-3'} ${((nameInput === '') && classes.disabled)}`}
                            disabled = {(nameInput === '')}
                            onClick = {e => {
                                e.preventDefault();
                                e.stopPropagation();
                                if(!editTask) {
                                    handleAddTask(
                                        e, 
                                        nameInput, 
                                        descriptionInput,
                                        labelInput, 
                                        priorityInput,
                                        dueDateInput,
                                        path,
                                    );
                                    setNameInput('')
                                    setPriorityBtnOpen(false)
                                    setDescriptionInput('')
                                } else {
                                    handleEditTask(
                                        e,
                                        task,
                                        nameInput, 
                                        descriptionInput,
                                        labelInput, 
                                        priorityInput,
                                        dueDateInput,
                                        path,
                                    )
                                    setVisible(false)
                                }
                            }}
                        >
                            {!editTask ? 
                                'Add Task'
                            : 'Done'}
                        </button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default AddTaskForm