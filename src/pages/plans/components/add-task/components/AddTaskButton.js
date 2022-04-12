import React from 'react'

// export const handleAddTask = ({ setFormOpen }) => {
//     setFormOpen(true);
// }

const AddTaskButton = ({ setFormOpen, children }) => {
    const handleAddTask = () => {

    }

    return (
        <button onClick = {e => setFormOpen(true)}>
            {/* <div className = 'flex items-center text-xl'>
                <ion-icon name="add-outline"></ion-icon>
            </div>
            <div>
                Add Task
            </div> */}
            {children}
        </button>
    )
}

export default AddTaskButton