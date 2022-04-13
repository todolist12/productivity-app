import React from 'react'
import { createUid } from '../../../../../../utils/functions'
import AddTask from '../../../add-task/AddTask'

const AddChildButton = ({ task }) => {
    const getPath = () => {
        const childId = createUid();
        return [task.path + '.children.' + childId, childId]
    }

    return (
        <AddTask getPath = {getPath}>
            <div className = 'text-color-5 flex items-center justify-between hover text-2xl'>
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </AddTask>
    )
}

export default AddChildButton