import React, { useState } from 'react'
import { classes } from '../../../utils/classes'
import AddTaskButton from './add-task/AddTaskButton'
import AddTaskForm from './add-task/AddTaskForm'
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

    const [addTaskFormVisible, setAddTaskFormVisible] = useState(false)

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
            <AddTaskButton 
                visible = {!addTaskFormVisible} 
                onClick = {() => setAddTaskFormVisible(true)}
            >
                <div className = "flex items-center text-color-5 hover">
                    <div className = "flex items-center text-xl">
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div>
                        Add Task
                    </div>
                </div>
            </AddTaskButton>
            {   
                addTaskFormVisible &&
                <AddTaskForm 
                    handleAddTask = {handleAddTask}
                    setVisible = {setAddTaskFormVisible}
                />
            }
        </div>
    )
}

export default TasksList