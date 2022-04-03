import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate('/login');
        logout();
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <button onClick = {handleLogout} className = "header-btn text-2xl flex items-center justify-center btn-hover text-white">
            <ion-icon name="log-out-outline"></ion-icon>
        </button>
    )
}

export default LogoutButton