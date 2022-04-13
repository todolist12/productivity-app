import React from 'react'

const EditTaskButton = ({ task, plan }) => {
    const handleEdit = () => {

    }

    return (
        <button onClick = {handleEdit} className = 'hover flex items-center justify-between text-color-5 text-2xl'>
            <ion-icon name="create-outline"></ion-icon>
        </button>
    )
}

export default EditTaskButton