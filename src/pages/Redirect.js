import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { AuthContext } from '../providers/AuthProvider'

const Redirect = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            navigate('/dashboard')
        } else if(!auth.currentUser) {
            navigate('/')
        }
    }, [currentUser])
    
    return (
        <div>
            
        </div>
    )
}

export default Redirect