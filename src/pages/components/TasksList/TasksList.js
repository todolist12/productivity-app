import React from 'react'
import { classes } from '../../../utils/classes'
import Task from './task/Task'

const TasksList = ({ 
        tasks, 
        handleDeleteTask, 
        handleAddTask,
        handleEditTask, 
        handleToggleComplete, 
        handleAssignPeriod,
        handleAssignDueDate,
    }) => {

    return (
        <div className = {classes.tasksListContainer}>
            {
                tasks && tasks.length && 
                    tasks.map(task => {
                        return (
                            <div key = {task.id}>
                                <Task 
                                    task = {task} 
                                    handleDelete = {handleDeleteTask}
                                    handleAddTask = {handleAddTask}
                                    handleEditTask = {handleEditTask}
                                    handleToggleComplete = {handleToggleComplete}
                                    handleAssignPeriod = {handleAssignPeriod}
                                    handleAssignDueDate = {handleAssignDueDate}
                                />
                            </div>
                        )
                    })
            }
            
        </div>
    )
}

export default TasksList