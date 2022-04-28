import React, { useEffect, useState } from 'react'
import { classes } from '../../../utils/classes'
import AddTaskButton from './add-task/AddTaskButton'
import AddTaskForm from './add-task/AddTaskForm'
import Task from './task/Task'

const TaskListSection = ({
        tasks, 
        setTasks,
        handleDeleteTask, 
        handleAddTask,
        handleEditTask, 
        handleToggleComplete, 
        handleAssignPeriod,
        handleAssignDueDate,
        date,
        section,
    }) => {

    const [addTaskFormVisible, setAddTaskFormVisible] = useState(false)

    return (
        <div className = {classes.tasksListContainer + ' //overflow-hidden'}>
                <div className = 'flex justify-between items-center border-b border-1'>
                    <div className = 'text-color-1 font-bold'>
                        {section && section.name}
                    </div>
                    <div className = {classes.iconButton + ' text-color-1'}>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                </div>
                {
                    tasks && tasks.length ? 
                        tasks.sort(function(a, b) {
                            if(!(b.priority - a.priority)) {
                                return b.creationTime - a.creationTime
                            }
                            return b.priority - a.priority
                        }).map(task => {
                            return (
                                <div key = {task.id}>
                                    <Task 
                                        date = {date}
                                        task = {task} 
                                        handleDelete = {handleDeleteTask}
                                        handleAddTask = {handleAddTask}
                                        handleEditTask = {handleEditTask}
                                        handleToggleComplete = {handleToggleComplete}
                                        handleAssignDueDate = {handleAssignDueDate}
                                    />
                                </div>
                            )
                        })
                    : undefined
                }
            <AddTaskButton 
                visible = {!addTaskFormVisible} 
                onClick = {() => setAddTaskFormVisible(true)}
            >
                <div className = "flex w-24 items-center text-color-5 hover">
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
                    date = {date}
                    path = {`sections.${section.id}.tasks.`}
                />
            }
        </div>
    )
}

export default TaskListSection