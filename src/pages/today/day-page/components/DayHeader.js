import React from 'react'
import { classes } from '../../../../utils/classes'
import Box from '../../../components/Box'

const DayHeader = ({ date, day, month, year }) => {
    return (
        <Box className = {classes.headerContainer}>
            <div className = {classes.headerTitle}>
                {day + '-' + month + '-' + year}
            </div>
            <div>
                Settings
            </div>
        </Box>
    )
}

export default DayHeader