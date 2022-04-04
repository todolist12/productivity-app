import React from 'react'
import PlanProvider from '../../providers/PlanProvider'
import PageLayout from '../components/PageLayout/PageLayout'
import PlanHeader from './components/PlanHeader'
import TasksList from './components/TasksList'
import Plan from './Plan'

const PlanPage = () => {

    return (
        <PageLayout>
            <PlanProvider>
                <Plan />
            </PlanProvider>
        </PageLayout>
    )    
}

export default PlanPage