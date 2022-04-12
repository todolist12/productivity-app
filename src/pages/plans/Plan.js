import React, { useContext } from 'react'
import { PlanContext } from '../../providers/PlanProvider'
import Loading from '../components/Loading'
import PlanHeader from './components/PlanHeader'
import TasksList from './components/TasksList'

const Plan = () => {
    const { planLoading } = useContext(PlanContext)

    return (
        <div className = 'w-full h-full'>
        {
            !planLoading ? 
                <div className=' bg-2 text-color-1 h-full flex flex-col'>
                    <PlanHeader />
                    <TasksList />
                </div> 
                : 
                <Loading />
        }
        </div>
    )    
}

export default Plan