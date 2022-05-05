import React, { useContext, useEffect } from 'react'
import { db } from '../../../../firebase-config'
import { AuthContext } from '../../../../providers/AuthProvider'
import TasksList from '../../../components/TasksList/TasksList'

const DayTasksList = ({ date, day, month, year, sections, setSections }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)

    return (
        <TasksList 
            sections = {sections}
            setSections = {setSections}
            date = {day + '-' + month + '-'+ year} 
        />
    )
}

export default DayTasksList