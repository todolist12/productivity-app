import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarLink from './SidebarLink';
import SidebarParent from './SidebarParent';

const SidebarItem = ({ item, setSidebarItems }) => {

    return ( 
        <>
            {
                item ? 
                    !item.children ? 
                        <SidebarLink item = {item} />
                    : 
                        <SidebarParent item = {item} setSidebarItems = {setSidebarItems}/>
                : undefined
            }
        </>
    )
}

export default SidebarItem