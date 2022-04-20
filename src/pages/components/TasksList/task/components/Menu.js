import { ClickAwayListener } from '@mui/material'
import React from 'react'
import { classes } from '../../../../../utils/classes'
import Dropdown from '../../../Dropdown'
import AddChild from './buttons/AddChild'
import DeleteBtn from './buttons/DeleteBtn'
import DueDateBtn from './buttons/DueDateBtn'
import EditBtn from './buttons/EditBtn'
import LabelBtn from './buttons/LabelBtn'
import PriorityBtn from './buttons/PriorityBtn'

const Menu = ({
        open, 
        setOpen,
        handleAddChild,
        handleDelete,
        handleEdit,
        handleAssignDueDate,
        task,
    }) => {
    return (
        <ClickAwayListener onClickAway={e => setOpen(false)} >
            <div className = 'relative'>
                <button className = {classes.iconButton} onClick = {e => setOpen(prev => !prev)}>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </button>
                <Dropdown open = {open} setOpen = {setOpen} position={'left'}>
                    <div className = 'w-44'>
                        <AddChild />
                        <EditBtn />
                        <DueDateBtn />
                        <LabelBtn />
                        <PriorityBtn />
                        <DeleteBtn task = {task} handleDelete = {handleDelete}/>
                    </div>
                </Dropdown>
            </div>
        </ClickAwayListener>
    )
}

export default Menu