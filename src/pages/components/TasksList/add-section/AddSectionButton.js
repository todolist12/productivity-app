import React from 'react'

const AddSectionButton = ({ 
        visible, 
        setVisible,
        children,
    }) => {

    return (
        <>
            {
                visible &&
                <button onClick = {e => setVisible(prev => !prev)}>
                    {children}
                </button>
            }
        </>
    )
}

export default AddSectionButton