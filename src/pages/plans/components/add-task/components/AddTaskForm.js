import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../../../../firebase-config';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { PlanContext } from '../../../../../providers/PlanProvider';
import { classes } from '../../../../../utils/classes'
import { createUid } from '../../../../../utils/functions';
import Box from '../../../../components/Box';

const AddTaskForm = ({ setFormOpen }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { currentUser } = useContext(AuthContext)
    const { plan } = useContext(PlanContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const taskId = createUid();
            const docRef = doc(db, `/users/${currentUser.id}/plans/${plan.id}`)
            const path = 'tasks.' + taskId
            const docData = {
                [path] : {
                    name: name,
                    description: description,
                }
            }
            await updateDoc(docRef, docData);
            setName('');
            setDescription('');
            setFormOpen(false)
        }  
        catch (e) {
            console.log(e.message)
        } 
    }
    
    return (
        <Box className = 'border-1'>
            <form onSubmit = {handleSubmit} className = 'flex flex-col grow'>
                <div className = 'pb-3 text-lg font-bold ml-1'>
                    Add Task
                </div>
                <input required onChange = {e => setName(e.target.value)} value = {name} className = {classes.inputPrimary} placeholder = 'Name'/>
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