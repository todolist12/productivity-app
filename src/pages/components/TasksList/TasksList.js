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
        handleAddSection,
        handleEditSection,
        handleDeleteSection,
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
        <div className = {''}>
            {
                sections && sections.length ?
                sections.sort(function(a, b) {
                    return a.creationTime - b.creationTime;
                }).map(section => {
                    console.log(section.tasks)
                    return (
                        <div key = {section?.id}>
                            <TaskListSection
                                tasks={Object.values(section?.tasks)}
                                handleDeleteTask = {handleDeleteTask}
                                handleAddTask = {handleAddTask}
                                handleEditTask = {handleEditTask}
                                handleToggleComplete = {handleToggleComplete}
                                handleAssignPeriod = {handleAssignPeriod}
                                handleAssignDueDate = {handleAssignDueDate}
                                date = {date}
                                section = {section}
                            />
                        </div>
                    )
                }) :
                undefined
            }
            <div className = {classes.tasksListContainer}>
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
                    handleAddSection = {handleAddSection}
                    visible = {!addSectionButtonVisible}
                    setVisible = {setAddSectionButtonVisible}
                />
            </div>
        </div>
    )
}

export default TasksList