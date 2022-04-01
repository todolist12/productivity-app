import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import useLocalStorage from '../hooks/UseLocalStorage';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser',{});
    const [loading, setLoading] = useState(true);

    const readDocument = async (uid) => {
        const ref = doc(db, `users/${uid}`)
        const mySnapshot = await getDoc(ref);
        if(mySnapshot.exists()) {
            const docData = {...mySnapshot.data(), id: uid};
            setCurrentUser(docData);
            setLoading(false);
        }
    }

    useEffect (() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                readDocument(currentUser.uid);
            }
        })  
    }, [])


    return (
        <AuthContext.Provider value={{currentUser, loading, setCurrentUser, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider