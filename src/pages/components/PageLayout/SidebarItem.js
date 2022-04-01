import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ item, setSidebarItems }) => {
    const [drawerOpen, setDrawerOpen] = useState();

    const handleToggleDrawer = () => {
        setDrawerOpen(prev => !prev);
    }

    const handleAddChild = (e) => {
        setDrawerOpen(prev => !prev);
        console.log('haldljkfda')
        setSidebarItems(prev => ({...prev, [item.id] : {...item, children: [...item.children, {name: 'newItem', url: '/hello', icon: ''}]}}))
    }

    return ( 
        <>
            {
                item ? 
                    !item.children ? 
                        <Link to={item.url} className = "flex items-center p-1 link link-sidebar rounded">
                            <div className = "p-1 text-xl flex items-center">
                                <ion-icon name={item.icon}></ion-icon>
                            </div>  
                            <div className = "p-1">
                                {item.name}
                            </div>
                        </Link> 
                    : 
                    <div className = 'flex flex-col transition-sidebar-item'>
                        <div className = "flex items-center p-1 link rounded justify-between" onClick={handleToggleDrawer}>
                            <div className = "flex items-center">
                                <div className = "p-1 text-lg flex items-center rotate-90">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </div>  
                                <div className = "p-1 font-bold">
                                    {item.name}
                                </div>
                            </div>
                            {
                                item.addChildren ?
                                    <button className = "p-1 text-lg flex items-center hover" onClick={handleAddChild}>
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
                                                <SidebarItem item = {child}/>
                                            );
                                        })
                                    }
                                </div>
                            : undefined
                        }
                    </div>
                : undefined
            }
        </>
    )
}

export default SidebarItem