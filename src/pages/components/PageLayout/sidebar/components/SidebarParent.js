import React, { useContext, useState } from 'react'
import SidebarItem from './SidebarItem';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import { createUid } from '../../../../../utils/functions';
import { AuthContext } from '../../../../../providers/AuthProvider'

const SidebarParent = ({ item, setSidebarItems }) => {
    const [drawerOpen, setDrawerOpen] = useState();
    const { currentUser } = useContext(AuthContext)

    const handleToggleDrawer = () => {
        setDrawerOpen(prev => !prev);
    }

    const handleAddChild = (section) => {
        setDrawerOpen(false);
        try {
            const uid = createUid()
            const collectionRef = collection(db, `users/${currentUser.id}/${section.toLowerCase()}`)
            const docData = {
                name: uid.slice(0, 5),
                url: '/profile',
                icon: '<ion-icon name="ellipse"></ion-icon>',
            }
            addDoc(collectionRef, docData)
            setSidebarItems(prev => ({...prev, [item.id] : {...item, children: [...item.children, {...docData}]}}))
        } 
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className = 'flex flex-col transition-sidebar-item'>
            <div className = "flex items-center p-1 link rounded justify-between" onClick={handleToggleDrawer}>
                <div className = "flex items-center">
                    <div className = {`p-1 text-lg flex items-center parent${drawerOpen}`} >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>  
                    <div className = "p-1 font-bold">
                        {item.name}
                    </div>
                </div>
                {
                    item.addChildren ?
                        <button className = {`p-1 text-lg flex items-center hover`} onClick={e => handleAddChild(item.name)}>
                            <ion-icon name="add-outline"></ion-icon>
                        </button>
                    : undefined
                }
            </div> 
            {
                drawerOpen ?
                    <div className = "pl-6">
                        {
                            item.children.map(child => {
                                return (
                                    <div key = {child.name} >
                                        <SidebarItem item = {child}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                : undefined
            }
        </div>
    )
}

export default SidebarParent