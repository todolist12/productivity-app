import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUserDoc = async ( uid ) => {
        const newUserRef = doc(db, `users/${uid}`)
        const docData = {
            name: registerUsername,
            email: registerEmail,
            todoLists: {},
            mindMaps: {},
            todoListBoards: {},
            plans: {},
            id: uid,
        }
        try {
            await setDoc(newUserRef, docData, {merge: true})
            navigate('/dashboard')
            window.location.reload(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const register = async (e) => {
        e.preventDefault();
        setError('');
        try{
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            );
            createUserDoc(user.user.uid)
            }
            catch (error) {
                setError(error.message);
            }
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gray-100'>
            <form className='flex h-90 flex-col items-center bg-white shadow-lg rounded-lg p-3' onSubmit={register}>
                <h1 className='text-3xl p-3 font-bold mb-8'>Register</h1>
                <input placeholder='Username...' className='p-2 m-2 rounded w-80 border-2 border-gray-500' onChange={(e) => setRegisterUsername(e.target.value)} required />
                <input placeholder='Email Address...' className='p-2 m-2 rounded w-80 border-2 border-gray-500' onChange={(e) => setRegisterEmail(e.target.value)} required />
                <input type="password" placeholder='Password...' className='p-2 m-2 rounded w-80 border-2 border-gray-500' onChange={(e) => setRegisterPassword(e.target.value)} required />
                <div className='text-lg'>
                            Already have an account? 
                            <Link to="/login" className = 'text-blue-500 hover'>
                                Login
                            </Link>
                </div>
                {error}
                <button className={'hover p-2 bg-green-400 rounded-3xl m-2 w-40 text-white font-bold mt-6'} type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register