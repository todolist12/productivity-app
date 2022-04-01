import { Avatar, Drawer } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize'
import SidebarItem from './SidebarItem';

const SidebarElement = () => {
    const sidebarItems = [
        {
            name: 'Dashboard',
            icon: "home-outline",
            url: '/dashboard'
        }, 
        {
            name: 'Today',
            icon: "sunny-outline",
            url: '/my-todolists'
        }, 
        {
            name: 'Upcoming',
            icon: "calendar-outline",
            url: '/my-todolists'
        },
        {
            name: 'Goals',
            icon: "trophy-outline",
            url: '/my-todolists'
        }, 
        {
            name: 'Timers',
            icon: "alarm-outline",
            url: '/my-todolists'
        },
        {
            name: 'Profile',
            icon: "person-outline",
            url: '/profile'
        }, 
        {
            name: 'Plans',
            icon: "list-outline", 
            url: '/my-plans',
            children: [
                {
                    name: 'Today',
                    icon: "calendar-number-outline",
                    url: '/my-todolists'
                }, 
                {
                    name: 'Upcoming',
                    icon: "calendar-outline",
                    url: '/my-todolists'
                },
            ],
            addChildren: true,
        },
        {
            name: 'Mindmaps',
            icon: "git-branch-outline",
            url: '/my-todolists',
            children: [
                {
                    name: 'Today',
                    icon: "calendar-number-outline",
                    url: '/my-todolists'
                }, 
                {
                    name: 'Upcoming',
                    icon: "calendar-outline",
                    url: '/my-todolists'
                },
            ],
            addChildren: true,
        }, 
        {
            name: 'Projects',
            icon: "git-branch-outline",
            url: '/my-todolists',
            children: [
                {
                    name: 'Today',
                    icon: "calendar-number-outline",
                    url: '/my-todolists'
                }, 
                {
                    name: 'Upcoming',
                    icon: "calendar-outline",
                    url: '/my-todolists'
                },
            ], 
            addChildren: true,
        }, 
    ]

    return (
        <div className = "w-72 p-4 bg-1 text-color-1 pt-16 sticky h-full overflow-y-auto">
            <div className = "flex flex-col items-center pb-10 pt-7">
                <Avatar sx={{ width: 66, height: 66 }} />
                <div className = "p-2 text-xl">Tilica Mihail</div>
            </div>
            <div>
                {sidebarItems.map(item => {
                    return (   
                        <SidebarItem item = {item} key = {item.name}/>
                    )
                })}
            </div>
        </div> 
    )
}

const Sidebar = ({drawerOpen, setDrawerOpen}) => {
    const {width, height} = useWindowSize();

    if(width <= 800) {
        return (
            <Drawer open={drawerOpen} onClose={e => setDrawerOpen(false)}>
                <SidebarElement />
            </Drawer>
        )
    } 
    else {
        return (
            <SidebarElement />
        )
    }
}

export default Sidebar