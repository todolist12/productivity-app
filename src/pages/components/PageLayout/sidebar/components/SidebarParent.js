import React, { useContext, useState } from 'react'
import SidebarItem from './SidebarItem';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import { createUid } from '../../../../../utils/functions';
import { AuthContext } from '../../../../../providers/AuthProvider'
import AddChildModal from './AddChildModal';

const SidebarParent = ({ item, setSidebarItems }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { currentUser, setCurrentUser } = useContext(AuthContext)

    const handleToggleDrawer = () => {
        setDrawerOpen(prev => !prev);
    }

    const handleAddChild = (e, section, name, color, board) => {
        e.stopPropagation();
        e.preventDefault();
        setDrawerOpen(true);
        try {
            const uid = createUid()
            const docRef = doc(db, `users/${currentUser.id}/${section.toLowerCase()}/${uid}`)
            const docData = {
                name: name,
                url: `/plans/${uid}`,
                icon: '<ion-icon name="ellipse"></ion-icon>',
                id: uid,
                color: color,
                board: Boolean(board)
            }
            setDoc(docRef, docData)
            setSidebarItems(prev => ({...prev, [item.id] : {...item, children: [...item.children, {...docData}]}}))
            setCurrentUser(prev => ({...prev, [section.toLowerCase()] : {...currentUser[section.toLowerCase()], [uid]: docData}}))
        } 
        catch(err) {
            console.log(err)
        }
    }

    const handleOpenModal = (e) => {
        e.stopPropagation()
        setModalOpen(true)
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
                        <div className = 'flex'>
                            <button className = {`p-1 text-lg flex items-center hover`} onClick={handleOpenModal}>
                                <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <AddChildModal modalOpen={modalOpen} setModalOpen={setModalOpen} section = {item} handleAddChild = {handleAddChild} />
                        </div>
                    : undefined
                }
            </div> 
            {
                drawerOpen ?
                    <div className = "pl-6">
                        {
                            item.children.map(child => {
                                return (
                                    <div key = {child.id} >
                                        <SidebarItem item = {child} color = {child.color}/>
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