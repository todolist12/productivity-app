import React, { useContext } from 'react'
import { auth } from '../../firebase-config'
import PageLayout from '../components/PageLayout/PageLayout'
import { AuthContext } from '../../providers/AuthProvider'

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            <PageLayout>
                <div className = ''>
                        
                </div>
            </PageLayout>    
        </div>
    )
}

export default Dashboard