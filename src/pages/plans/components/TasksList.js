import React, { useContext, useEffect } from 'react'
import { PlanContext } from '../../../providers/PlanProvider'
import { createUid } from '../../../utils/functions'
import Box from '../../components/Box'
import AddTask from './add-task/AddTask'
import Task from './task/Task'

const TasksList = () => {
    const { plan, setPlan } = useContext(PlanContext)
    const tasks = plan ? plan.tasks ? Object.values(plan.tasks) : [] : []

    const getPath = () => {
        const taskId = createUid();
        return ['tasks.' + taskId, taskId]
    }


    return (
        <>
        <div className = 'mt-4 ml-4 mr-4 flex-col h-full mb-4 bg-2'>
            <div className = 'mb-2'>
                {
                    tasks.map(task => {
                        console.log(task.id)
                        return (
                            <div key = {task.id}>
                                <Task task = {task} plan = {plan} />
                            </div>
                        )
                    })
                }
            </div>
            <AddTask getPath = {getPath}>
                <div className = 'text-color-5 flex items-center justify-center hover p-1 ' >
                    <div className = 'flex items-center text-xl'>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div>
                        Add Task
                    </div>
                </div>
            </AddTask> 
        </div>
        </>
    )
}

export default TasksList