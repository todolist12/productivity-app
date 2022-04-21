import React, { useEffect, useState } from 'react'
import { classes } from '../../../utils/classes'
import AddSectionButton from './add-section/AddSectionButton'
import AddSectionForm from './add-section/AddSectionForm'
import AddTaskButton from './add-task/AddTaskButton'
import AddTaskForm from './add-task/AddTaskForm'
import Task from './task/Task'
import TaskListSection from './TaskListSection'

const TasksList = ({ 
        sections,
        setSections,
        handleDeleteTask, 
        handleAddTask,
        handleEditTask, 
        handleToggleComplete, 
        handleAssignPeriod,
        handleAssignDueDate,
        date,
    }) => {

    const [addSectionButtonVisible, setAddSectionButtonVisible] = useState(true)

    return (
        <div className = {classes.tasksListContainer + ' //overflow-hidden'}>
            {
                sections && sections.length && 
                sections.map(section => {
                    <TaskListSection
                        tasks={section.tasks}
                        handleDeleteTask = {handleDeleteTask}
                        handleAddTask = {handleAddTask}
                        handleEditTask = {handleEditTask}
                        handleToggleComplete = {handleToggleComplete}
                        handleAssignPeriod = {handleAssignPeriod}
                        handleAssignDueDate = {handleAssignDueDate}
                        date = {date}
                    />
                })
            }
            <div>
                <AddSectionButton 
                    visible = {addSectionButtonVisible}
                    setVisible = {setAddSectionButtonVisible}
                >
                    <div className = "flex w-28 items-center text-color-5 hover">
                        <div className = "flex items-center text-xl">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                        <div>
                            Add Section
                        </div>
                    </div>
                </AddSectionButton>
                <AddSectionForm 
                    visible = {!addSectionButtonVisible}
                    setVisible = {setAddSectionButtonVisible}
                />
            </div>
        </div>
    )
}

export default TasksList