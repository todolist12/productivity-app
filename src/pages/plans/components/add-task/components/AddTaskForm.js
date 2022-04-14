import { Modal } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../../../../firebase-config';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { PlanContext } from '../../../../../providers/PlanProvider';
import { classes } from '../../../../../utils/classes'
import { createUid } from '../../../../../utils/functions';
import Box from '../../../../components/Box';
import TasksList from '../../TasksList';
import * as immutable from 'object-path-immutable'


const AddTaskForm = ({ setFormOpen, getPath }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const { plan, setPlan } = useContext(PlanContext)

    const handleSubmit = async (e) => {
        const [path, taskId] = getPath();
        e.preventDefault();
        try {
            const docRef = doc(db, `/users/${currentUser.id}/plans/${plan.id}`)
            const docData = {
                [path] : {
                    name: name,
                    description: description,
                    id: taskId,
                    children: {},
                    completed: false,
                    path: path
                }
            }
            await updateDoc(docRef, docData);
            setName('');
            setDescription('');
            setFormOpen(false)
            const modifiedPlan = immutable.set(plan, path, {
                name: name,
                description: description,
                id: taskId,
                children: {},
                completed: false,
                path: path
            })
            const modifiedUser = immutable.set(currentUser, `plans.${plan.id}.` + path,  {
                name: name,
                description: description,
                id: taskId,
                children: {},
                completed: false,
                path: path
            })
            setPlan(modifiedPlan)
            setCurrentUser(modifiedUser)
        }  
        catch (e) {
            console.log(e.message)
        } 
    }
    
    return (
        <Modal open = {true} className = 'flex items-center justify-center'>
            <div className = ' w-1/2'>
                <Box className = 'text-color-1'>
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
            </div>
        </Modal>
    )
}

export default AddTaskForm