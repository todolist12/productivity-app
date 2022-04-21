import React, { useEffect, useState } from 'react'
import { classes } from '../../../utils/classes'
import AddSectionButton from './add-section/AddSectionButton'
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
        <div>
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

                </AddSectionButton>
            </div>
        </div>
    )
}

export default TasksList