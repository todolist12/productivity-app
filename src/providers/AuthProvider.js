import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import useLocalStorage from '../hooks/UseLocalStorage';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
    const [loading, setLoading] = useState(true);

    const readDocument = async (uid) => {
        try {
            const userDocRef = doc(db, `users/${uid}`);

            const plansCollectionsRef = collection(db, `users/${uid}/plans`)
            const plansQuery = query(plansCollectionsRef)
            const plansSnaphot = await getDocs(plansQuery);

            const mindmapsCollectionsRef = collection(db, `users/${uid}/mindmaps`)
            const mindmapsQuery = query(mindmapsCollectionsRef)
            const mindmapsSnaphot = await getDocs(mindmapsQuery);

            const projectsCollectionsRef = collection(db, `users/${uid}/projects`)
            const projectsQuery = query(projectsCollectionsRef)
            const projectsSnaphot = await getDocs(projectsQuery);

            const daysCollectionsRef = collection(db, `users/${uid}/days`)
            const daysQuery = query(daysCollectionsRef)
            const daysSnaphot = await getDocs(daysQuery);

            const userDocSnapshot = await getDoc(userDocRef);

            let plansObjects = {};
            let mindmapsObjects = {};
            let projectsObjects = {};
            let daysObjects = {};

            daysSnaphot.forEach(day => {
                daysObjects = {...daysObjects, [day.id]: day.data()}
            })

            plansSnaphot.forEach(plan => {
                plansObjects = {...plansObjects, [plan.id]: plan.data()}
            })

            mindmapsSnaphot.forEach(mindmap => {
                mindmapsObjects = {...mindmapsObjects, [mindmap.id]: mindmap.data()}
            })

            projectsSnaphot.forEach(project => {
                projectsObjects = {...projectsObjects, [project.id]: project.data()}
            })

            if(userDocSnapshot.exists()) {
                const docData = {
                    ...userDocSnapshot.data(), 
                    id: uid, 
                    plans: plansObjects, 
                    projects: projectsObjects, 
                    mindmaps: mindmapsObjects, 
                    days: daysObjects
                };
                setCurrentUser(docData);
                setLoading(false);
            }
        } 
        catch (err) {
            console.log(err.message)
        }
    }

    useEffect (() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                readDocument(currentUser.uid);
            }
            else {
                setCurrentUser(null)
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