import React from 'react'

const AddTaskButton = ({ setFormOpen }) => {

    return (
        <button className = 'text-color-5 flex items-center hover p-1' onClick = {e => setFormOpen(true)}>
            <div className = 'flex items-center text-xl'>
                <ion-icon name="add-outline"></ion-icon>
            </div>
            <div>
                Add Task
            </div>
        </button>
    )
}

export default AddTaskButton