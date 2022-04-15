import React from 'react'
import { classes } from '../../../../../utils/classes'

const SetPriority = ({ children, label, setLabel }) => {
    return (
        <button className = {classes.iconButton}>
            <ion-icon name="flag-outline"></ion-icon>
        </button>
    )
}

export default SetPriority