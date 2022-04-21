import React, { useEffect, useState } from 'react'
import { classes } from '../../../../../utils/classes'
import { DatePicker } from '@mantine/dates';


const SetDueDate = ({ dueDate, setDueDate, currentDate }) => {
    const [dueDateInput, setDueDateInput] = useState();

    useEffect(() => {
        if(dueDateInput)
            setDueDate(dueDateInput.getDate() + '-' + (dueDateInput.getMonth() + 1) + '-' + dueDateInput.getFullYear())
        else if (currentDate)
            setDueDate(currentDate)
    }, [dueDateInput])
    
    return (
        <div className = ''>
            <DatePicker 
                value = {dueDateInput} 
                onChange = {setDueDateInput} 
                classNames = {{
                    input: 'bg-1 rounded border-0 w-36 text-color-1 text-xs font-bold',
                    wrapper: 'bg-1 font-bold',
                    dropdown: 'bg-1 border-0 text-color-1 hover:bg-2',
                    calendarHeaderControl: 'bg-1 border-0 text-color-1 hover:bg-2',
                    arrow: 'hidden',
                    rightSection: 'hidden',
                    calendarHeader: 'bg-1 border-0 text-color-1 hover:bg-2',
                    calendarHeaderLevel: 'bg-1 border-0 text-color-1 hover:bg-2',
                }}
                icon = {<InputBtn />}
            />
        </div>
    )
}

const InputBtn = () => {
    return (
        <button className = {classes.iconButton + ' font-bold text-color-1'}>
            <ion-icon name="calendar-clear-outline"></ion-icon>
        </button>
    );
}

export default SetDueDate