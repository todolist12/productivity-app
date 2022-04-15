import React from 'react'
import { classes } from '../../../../../utils/classes'

const SetLabel = ({ children, label, setLabel}) => {
    return (
        <button className = {classes.iconButton}>
            <ion-icon name="pricetag-outline"></ion-icon>
        </button>
    )
}

export default SetLabel