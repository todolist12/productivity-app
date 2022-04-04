import React, { useState } from 'react'
import { classes } from '../../../../../utils/classes'
import Box from '../../../../components/Box';

const AddTaskForm = ({ setFormOpen }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    
    return (
        <Box className = 'border-1'>
            <form onSubmit = {handleSubmit} className = 'flex flex-col grow'>
                <input onChange = {e => setName(e.target.value)} value = {name} className = {classes.inputPrimary} placeholder = 'Name'/>
                <input onChange = {e => setDescription(e.target.value)} value = {description} className = {classes.inputPrimary} placeholder = 'Description'/>
                <div className = 'flex items-center justify-end'>
                    <button className={classes.btnPrimary + 'ml-0'} type='submit'>
                        Add
                    </button>
                    <button className={classes.btnSecondary} onClick = {e => setFormOpen(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </Box>
    )
}

export default AddTaskForm