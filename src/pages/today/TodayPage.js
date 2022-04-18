import React from 'react'
import PageLayout from '../components/PageLayout/PageLayout'
import DayHeader from './day-page/components/DayHeader';
import DayPage from './day-page/DayPage'

const TodayPage = () => {
    const currentDate = new Date();

    return (
        <PageLayout>
            <div className = 'flex justify-center'>
            <div className = 'max-w w-full'>
                <DayPage 
                    date = {currentDate} 
                    day = {currentDate.getDate()} 
                    month = {currentDate.getMonth() + 1} 
                    year = {currentDate.getFullYear()}
                />
            </div>
            </div>
        </PageLayout>
    )
}

export default TodayPage