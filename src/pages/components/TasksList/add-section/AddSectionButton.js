import React from 'react'

const AddSectionButton = ({ 
        visible, 
        setVisible,
        children,
        className,
    }) => {

    return (
        <>
            {
                visible &&
                <button onClick = {e => setVisible(prev => !prev)} className = {className}>
                    {children}
                </button>
            }
        </>
    )
}

export default AddSectionButton