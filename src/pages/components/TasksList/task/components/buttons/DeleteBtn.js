import React from 'react'
import { classes } from '../../../../../../utils/classes'

const DeleteBtn = ({ handleDelete, task }) => {
    const deleteTask = (e) => {
        e.stopPropagation();
        handleDelete(task)
    }

    return (
        <button className = 'flex items-center text-rose-500 font-bold w-full hover p-1' onClick = {deleteTask}>
            <div className = {classes.iconButton}>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            Delete task
        </button>
    )
}

export default DeleteBtn