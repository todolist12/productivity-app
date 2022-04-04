import React from 'react'

const Box = ({ children, className }) => {
    return (
        <div className = {`p-4 bg-1 rounded-lg flex ${className}`} >
            {children}
        </div>
    )
}

export default Box