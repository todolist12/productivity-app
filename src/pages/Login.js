import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault()
        setError('');
        try{
            await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            navigate('/dashboard')
            window.location.reload(false)
        }
        catch (error) {
                setError(error.message);
        }
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gray-100'>
            <form className='flex h-90 flex-col items-center bg-white shadow-lg rounded-lg p-3' onSubmit={login} >
                <h1 className='text-3xl p-3 font-bold mb-8'>Login</h1>
                <input placeholder='Email Address...' className='p-2 m-2 rounded w-80 border-2 border-gray-500' onChange={(e) => setLoginEmail(e.target.value)}/>
                <input type="password" placeholder='Password...' className='p-2 m-2 rounded w-80 border-2 border-gray-500' onChange={(e) => setLoginPassword(e.target.value)}/>
                <div className='text-lg'>
                            Don't have an account? 
                            <Link to="/register" className = 'text-blue-500 hover'>
                                Register
                            </Link>
                </div>
                {error}
                <button className={'hover p-2 bg-green-400 rounded-3xl m-2 w-40 text-white font-bold mt-6'} type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login