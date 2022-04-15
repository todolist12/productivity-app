import React from 'react'

const AddTaskButton = ({ children, visible, onClick}) => {
    return (
        <button className = {`${!visible && 'hidden'} mt-2 grow-0`} onClick = {onClick}>
            {children}
        </button>
    )
}

export default AddTaskButton