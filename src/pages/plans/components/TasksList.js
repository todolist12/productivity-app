import React, { useContext } from 'react'
import { PlanContext } from '../../../providers/PlanProvider'
import Box from '../../components/Box'
import AddTask from './add-task/AddTask'
import Task from './Task'

const TasksList = () => {
    const { plan } = useContext(PlanContext)
    const tasks = Object.values(plan.tasks)

    return (
        <>
        <div className = 'mt-4 ml-4 mr-4 flex-col h-full mb-4 bg-2'>
            <div className = 'mb-2'>
                {
                    tasks.map(task => {
                        return (
                            <div key = {task.id}>
                                <Task task = {task} plan = {plan} />
                            </div>
                        )
                    })
                }
            </div>
            <AddTask />
        </div>
        </>
    )
}

export default TasksList