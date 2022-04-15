import React, { useContext } from 'react'
import { PlanContext } from '../../../providers/PlanProvider'
import { classes } from '../../../utils/classes'
import Box from '../../components/Box'

const PlanHeader = () => {
    const { plan, planLoading } = useContext(PlanContext)

    return (
        <Box className = {classes.headerContainer}>
            <div className = {classes.headerTitle}>
                {plan.name}
            </div>
            <div>
                Settings
            </div>
        </Box>
    )
}

export default PlanHeader