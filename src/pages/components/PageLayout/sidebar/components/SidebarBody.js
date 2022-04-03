import React, { useContext, useState } from 'react'
import SidebarItem from '../components/SidebarItem';
import useLocalStorage from '../../../../../hooks/UseLocalStorage';
import { Avatar } from '@mui/material';
import { AuthContext } from '../../../../../providers/AuthProvider';

const SidebarBody = () => {
    const { currentUser } = useContext(AuthContext)

    const [sidebarItems, setSidebarItems] = useState({
        today: {
            name: 'Today',
            icon: '<ion-icon name="sunny-outline"></ion-icon>',
            url: '/today',
            id: 'today',
        }, 
        upcoming: {
            name: 'Upcoming',
            icon: '<ion-icon name="calendar-outline"></ion-icon>',
            url: '/upcoming',
            id: 'upcoming',
        },
        goals: {
            name: 'Goals',
            icon: '<ion-icon name="trophy-outline"></ion-icon>',
            url: '/goals',
            id: 'goals',
        }, 
        timers: {
            name: 'Timers',
            icon: '<ion-icon name="alarm-outline"></ion-icon>',
            url: '/timers',
            id: 'timers',
        },
        profile: {
            name: 'Profile',
            icon: '<ion-icon name="person-outline"></ion-icon>',
            url: '/profile',
            id: 'profile',
        }, 
        plans: {
            name: 'Plans',
            icon: '<ion-icon name="list-outline"></ion-icon>', 
            url: '/plans',
            id: 'plans',
            children: Object.values(currentUser.plans),
            addChildren: true,
        },
        mindmaps: {
            name: 'Mindmaps',
            icon: '<ion-icon name="git-branch-outline"></ion-icon>',
            url: '/mindmaps',
            id: 'mindmaps',
            children: Object.values(currentUser.mindmaps),
            addChildren: true,
        }, 
        projects: {
            name: 'Projects',
            url: '/projects',
            id: 'projects',
            children: Object.values(currentUser.projects), 
            addChildren: true,
        }, 
    });

    return (
        <div className = "w-72 p-4 bg-1 text-color-1 pt-16 sticky h-full overflow-y-auto max-h-screen">
            <div className = "flex flex-col items-center pb-10 pt-7">
                <Avatar sx={{ width: 66, height: 66 }} />
                <div className = "p-2 text-xl">Tilica Mihail</div>
            </div>
            <div>
                {Object.values(sidebarItems).map(item => {
                    return (   
                        <SidebarItem item = {item} key = {item.id} setSidebarItems = {setSidebarItems}/>
                    )
                })}
            </div>
        </div> 
    )
}

export default SidebarBody