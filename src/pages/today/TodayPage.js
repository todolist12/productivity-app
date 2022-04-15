import React from 'react'
import PageLayout from '../components/PageLayout/PageLayout'
import DayHeader from './day-page/components/DayHeader';
import DayPage from './day-page/DayPage'

const TodayPage = () => {
    const currentDate = new Date();

    return (
        <PageLayout>
            <DayPage 
                date = {currentDate} 
                day = {currentDate.getDate()} 
                month = {currentDate.getMonth() + 1} 
                year = {currentDate.getFullYear()}
            />
        </PageLayout>
    )
}

export default TodayPage