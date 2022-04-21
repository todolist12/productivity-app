import React from 'react'

const AddSectionButton = ({ 
        visible, 
        setVisible,
        children,
    }) => {

    return (
        <button onClick = {e => setVisible(prev => !prev)}>
            {children}
        </button>
    )
}

export default AddSectionButton