import React from 'react'

export const TaskListContext = React.createContext({})

const TaskListProvider = ({
    children,
    sections,
    setSections,
    handleAddSection,
    handleDeleteSection,
    handleDeleteTask, 
    handleAddTask,
    handleEditTask, 
    handleToggleComplete, 
    handleAssignPeriod,
    handleAssignDueDate,
    updateSectionName,
    date,
}) => {
    return (
        <TaskListContext.Provider value = {{
            sections,
            setSections,
            handleAddSection,
            handleDeleteSection,
            handleDeleteTask, 
            handleAddTask,
            handleEditTask, 
            handleToggleComplete, 
            handleAssignPeriod,
            handleAssignDueDate,
            updateSectionName,
            date,
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider