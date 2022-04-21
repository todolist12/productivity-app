import React, { useState } from 'react'
import { classes } from '../../../../../utils/classes'
import { Slider } from '@mantine/core';
import { ClickAwayListener } from '@mui/material';
import Dropdown from '../../../Dropdown';

const MARKS = [
    { value: 0, label: 'priority 1' },
    { value: 25, label: 'priority 2' },
    { value: 50, label: 'priority 3' },
    { value: 75, label: 'priority 4' },
    { value: 100, label: 'priority 5' },
];

export const PRIORITY_COLORS = [
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
                <button className = {classes.iconButton} onClick = {e => setOpen(prev => !prev)} style={{color: PRIORITY_COLORS.find((mark) => mark.value === priority).label}}>
                    <ion-icon name="flag"></ion-icon>
                </button>
                <Dropdown open={open} setOpen={setOpen}>
                    <div className = 'text-center text-md p-2'>
                        Chose Priority
                        <br/>
                        <div className = 'w-40'>
                            <Slider
                                size="lg"
                                radius="md"
                                color = {PRIORITY_COLORS.find(mark => mark.value === priority).label}
                                label={null}
                                value = {priority}
                                onChange = {setPriority}
                                step = {25}
                                marks={MARKS}
                                styles={{ markLabel: { display: 'none' } }}
                            />
                        </div>
                    </div>
                </Dropdown>
            </div>
        </ClickAwayListener>
    )
}

export default SetPriority