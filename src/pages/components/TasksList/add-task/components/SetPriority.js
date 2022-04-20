import React, { useState } from 'react'
import { classes } from '../../../../../utils/classes'
import { Transition } from '@mantine/core';
import { Slider } from '@mantine/core';
import { ClickAwayListener } from '@mui/material';

const MARKS = [
    { value: 0, label: 'priority 1' },
    { value: 25, label: 'priority 2' },
    { value: 50, label: 'priority 3' },
    { value: 75, label: 'priority 4' },
    { value: 100, label: 'priority 5' },
];

const COLORS = [
    { value: 0, label: 'gray' },
    { value: 25, label: 'teal' },
    { value: 50, label: 'green' },
    { value: 75, label: 'orange' },
    { value: 100, label: 'red' },
]

const SetPriority = ({ children, priority, setPriority, open, setOpen}) => {

    return (
        <ClickAwayListener onClickAway={e => setOpen(false)}>
            <div className = 'relative'>
                <button className = {classes.iconButton} onClick = {e => setOpen(prev => !prev)} style={{color: COLORS.find((mark) => mark.value === priority).label}}>
                    <ion-icon name="flag"></ion-icon>
                </button>
                <div className = {`absolute -left-5 top-7`}>
                    <Transition mounted={open} transition="pop" duration={400} timingFunction="ease">
                        {(styles) => 
                            <div style={styles} className = ' bg-1 shadow-lg p-2 rounded'>
                                <div className = 'text-center text-lg'>
                                    Chose Priority
                                    <div className = 'w-40'>
                                        <Slider
                                            size="lg"
                                            radius="md"
                                            color = {COLORS.find(mark => mark.value === priority).label}
                                            label={(val) => MARKS.find((mark) => mark.value === val).label}
                                            value = {priority}
                                            onChange = {setPriority}
                                            step = {25}
                                            marks={MARKS}
                                            styles={{ markLabel: { display: 'none' } }}
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </Transition>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default SetPriority