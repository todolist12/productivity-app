import React, { useContext } from 'react'
import { PlanContext } from '../../../providers/PlanProvider'
import Box from '../../components/Box'
import AddTask from './add-task/AddTask'
import Task from './Task'

const TasksList = () => {
    const { plan } = useContext(PlanContext)
    const tasks = Object.values(plan.tasks)

    return (
        <Box className = 'mt-4 ml-4 mr-4 flex-col'>
            {
                tasks.map(task => {
                    return (
                        <div key = {task.id}>
                            <Task task = {task}/>
                        </div>
                    )
                })
            }
            <AddTask />
        </Box>
    )
}

export default TasksList