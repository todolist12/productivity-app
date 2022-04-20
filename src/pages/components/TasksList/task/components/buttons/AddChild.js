import React from 'react'
import { classes } from '../../../../../../utils/classes'

const AddChild = ({ handleAddChild }) => {
    return (
        <button className = 'flex items-center font-bold w-full hover p-1 text-color-5' onClick = {handleAddChild}>
            <div className = {classes.iconButton}>
                <ion-icon name="add-outline"></ion-icon>
            </div>
            Add subtask
        </button>
    )
}

export default AddChild