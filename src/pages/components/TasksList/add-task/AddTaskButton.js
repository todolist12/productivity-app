import React from 'react'

const AddTaskButton = ({ children, visible, onClick}) => {
    return (
        <button className = {`${!visible && 'hidden'}`} onClick = {onClick}>
            {children}
        </button>
    )
}

export default AddTaskButton