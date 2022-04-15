import React from 'react'
import { classes } from '../../../../../utils/classes'

const SetDueDate = ({ dueDate, setDueDate }) => {
    return (
        <button className = {classes.iconButton}>
            <ion-icon name="calendar-clear-outline"></ion-icon>
        </button>
    )
}

export default SetDueDate