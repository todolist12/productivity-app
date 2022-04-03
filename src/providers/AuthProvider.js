import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import useLocalStorage from '../hooks/UseLocalStorage';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser',{});
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

            const userDocSnapshot = await getDoc(userDocRef);

            let plansObjects = {};
            let mindmapsObjects = {};
            let projectsObjects = {};

            plansSnaphot.forEach(plan => {
                plansObjects = {...plansObjects, [plan.id]: plan.data()}
            })

            mindmapsSnaphot.forEach(mindmap => {
                mindmapsObjects = {...mindmapsObjects, [mindmap.id]: mindmap.data()}
            })

            projectsSnaphot.forEach(project => {
                projectsObjects = {...projectsObjects, [project.id]: project.data()}
                // console.log(project.id)
            })

            if(userDocSnapshot.exists()) {
                const docData = {...userDocSnapshot.data(), id: uid, plans: plansObjects, projects: projectsObjects, mindmaps: mindmapsObjects};
                setCurrentUser(docData);
                setLoading(false);
            }
            // console.log(currentUser)
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