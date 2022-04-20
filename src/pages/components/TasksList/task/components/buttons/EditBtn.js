import React from 'react'
import { classes } from '../../../../../../utils/classes'

const EditBtn = ({ task, handleEdit }) => {
    return (
        <button className = 'flex items-center font-bold w-full hover p-1' onClick = {handleEdit}>
            <div className = {classes.iconButton}>
                <ion-icon name="pencil-outline"></ion-icon>
            </div>
            Edit task
        </button>
    )
}

export default EditBtn