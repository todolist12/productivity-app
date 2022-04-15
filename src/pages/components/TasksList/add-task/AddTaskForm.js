import React from 'react'
import { classes } from '../../../../utils/classes'

const AddTaskForm = ({ 
    visible, 
    setVisible, 
    titleInput, 
    descriptionInput, 
    setTitleInput, 
    setDescriptionInput }) => {
    
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
                        <div>
                            
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