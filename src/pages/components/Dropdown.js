import React from 'react'
import { Transition } from '@mantine/core';

const Dropdown = ({children, open, setOpen, position}) => {
    if(!open) return ;
    if(position === 'top') {
        return (
            <div className = {`absolute -left-5 -top-9 z-10`}>
                <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                    {(styles) => 
                        <div style={styles} className = 'border-2 bg-1 shadow-lg rounded'>
                            {children}
                        </div>
                    }
                </Transition>
            </div>
        )
    } else if(position === 'left') {
        return (
            <div className = {`absolute -left-44 -top-0 z-10`}>
                <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                    {(styles) => 
                        <div style={styles} className = 'border-2 bg-1 shadow-lg rounded'>
                            {children}
                        </div>
                    }
                </Transition>
            </div>
        )
    }
    return (
        <div className = {`absolute -left-5 top-7 z-1000`}>
            <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                {(styles) => 
                    <div style={styles} className = 'border-2 bg-1 shadow-lg rounded'>
                        {children}
                    </div>
                }
            </Transition>
        </div>
    )
}

export default Dropdown