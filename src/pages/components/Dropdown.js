import React from 'react'
import { Transition } from '@mantine/core';

const Dropdown = ({children, open, setOpen, position}) => {
    if(position === 'top') {
        return (
            <div className = {`absolute -left-5 -top-9`}>
                <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                    {(styles) => 
                        <div style={styles} className = ' bg-1 shadow-lg p-2 rounded'>
                            {children}
                        </div>
                    }
                </Transition>
            </div>
        )
    } else if(position === 'left') {
        return (
            <div className = {`absolute -left-48 -top-2`}>
                <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                    {(styles) => 
                        <div style={styles} className = 'bg-1 shadow-lg p-2 rounded'>
                            {children}
                        </div>
                    }
                </Transition>
            </div>
        )
    }
    return (
        <div className = {`absolute -left-5 top-7`}>
            <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                {(styles) => 
                    <div style={styles} className = ' bg-1 shadow-lg p-2 rounded'>
                        {children}
                    </div>
                }
            </Transition>
        </div>
    )
}

export default Dropdown