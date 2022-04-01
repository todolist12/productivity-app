import { Avatar, Drawer } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize'

const Sidebar = ({drawerOpen, setDrawerOpen}) => {
    const {width, height} = useWindowSize();
    const sidebarElements = [
        {
            name: 'Dashboard',
            icon: "home-outline",
            url: '/dashboard'
        }, 
        {
            name: 'My Plans',
            icon: "book-outline", 
            url: '/my-plans'
        },
        {
            name: 'My TodoLists',
            icon: "list-outline",
            url: '/my-todolists'
        }, 
        {
            name: 'My Mindmaps',
            icon: "git-branch-outline",
            url: '/my-todolists'
        }, 
        {
            name: 'My Goals',
            icon: "trophy-outline",
            url: '/my-todolists'
        }, 
        {
            name: 'Profile',
            icon: "person-outline",
            url: '/profile'
        },
    ]

    if(width <= 800) {
        return (
            <Drawer open={drawerOpen} onClose={e => setDrawerOpen(false)}>
                <div className = "w-56 h-screen p-4 bg-1 text-color-1 sticky">
                    <div className = "flex items-center pb-10">
                        <Avatar />
                        <div className = "p-2 text-xl">Tilica Mihail</div>
                    </div>
                    <div>
                        {sidebarElements.map(elem => {
                            return (   
                                <a href={elem.url} key = {elem.name} className = "flex items-center p-1 link link-sidebar rounded">
                                    <div className = "p-1 text-xl">
                                        <ion-icon name={elem.icon}></ion-icon>
                                    </div>  
                                    <div className = "p-1">
                                        {elem.name}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </Drawer>
        )
    } 
    else {
        return (
            <div className = "w-56 p-4 bg-1 text-color-1 pt-16 fixed h-full">
                <div className = "flex flex-col items-center pb-10 pt-7">
                    <Avatar sx={{ width: 66, height: 66 }} />
                    <div className = "p-2 text-xl">Tilica Mihail</div>
                </div>
                <div>
                    {sidebarElements.map(elem => {
                        return (   
                            <Link to={elem.url} key = {elem.name} className = "flex items-center p-1 link link-sidebar rounded">
                                <div className = "p-1 text-xl">
                                    <ion-icon name={elem.icon}></ion-icon>
                                </div>  
                                <div className = "p-1">
                                    {elem.name}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Sidebar