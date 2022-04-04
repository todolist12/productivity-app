import React, { useContext } from 'react'
import { PlanContext } from '../../../providers/PlanProvider'
import Box from '../../components/Box'

const PlanHeader = () => {
    const { plan, planLoading } = useContext(PlanContext)

    return (
        <Box className = 'items-center justify-between mt-4 ml-4 mr-4 '>
            <div className = 'text-2xl font-bold'>
                {plan.name}
            </div>
            <div>
                Settings
            </div>
        </Box>
    )
}

export default PlanHeader