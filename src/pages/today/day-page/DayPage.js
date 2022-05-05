import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Loading from 'react-loading'
import { db } from '../../../firebase-config'
import { AuthContext } from '../../../providers/AuthProvider'
import DayHeader from './components/DayHeader'
import DayTasksList from './components/DayTasksList'

const DayPage = ({ date, day, month, year }) => {
    const { currentUser, loading } = useContext(AuthContext)
    const [sections, setSections] = useState([])
    const [view, setView] = useState('list')

    useEffect(() => {
        if(!loading) {
            if(currentUser.days[day + '-' + month + '-' + year])
                if(currentUser.days[day + '-' + month + '-' + year]){
                    if(currentUser.days[day + '-' + month + '-' + year].sections) {
                        setSections(Object.values(currentUser.days[day + '-' + month + '-' + year].sections))
                    }
                }
        }
    }, [currentUser])

    return (
        <>  
            {
                !loading ? 
                    <>
                        <DayHeader 
                            listView = {view}
                            setListView = {setView}
                            date = {date} 
                            day = {day} 
                            month = {month} 
                            year = {year}
                        />
                        {
                            view === 'list' ? <DayTasksList
                                date = {date} 
                                day = {day} 
                                month = {month} 
                                year = {year}
                                sections = {sections}
                                setSections = {setSections}
                            /> : 
                            <div>
                                asdf
                            </div>
                        }
                    </>
                :
                    <Loading />
            }   
        </>
    )
}

export default DayPage