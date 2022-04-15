import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { db } from '../../../firebase-config'
import { AuthContext } from '../../../providers/AuthProvider'
import DayHeader from './components/DayHeader'
import DayTasksList from './components/DayTasksList'

const DayPage = ({ date, day, month, year }) => {
    const { currentUser, loading } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if(!loading) {
            if(currentUser.days[day + '-' + month + '-' + year])
                setTasks(currentUser.days[day + '-' + month + '-' + year].tasks)
        }
    }, [currentUser])

    return (
        <>
            <DayHeader 
                date = {date} 
                day = {day} 
                month = {month} 
                year = {year}
            />
            <DayTasksList
                date = {date} 
                day = {day} 
                month = {month} 
                year = {year}
                tasks = {tasks}
            />
        </>
    )
}

export default DayPage