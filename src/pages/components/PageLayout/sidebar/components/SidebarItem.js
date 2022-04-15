import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarChild from './SidebarChild';
import SidebarLink from './SidebarLink';
import SidebarParent from './SidebarParent';

const SidebarItem = ({ item, setSidebarItems, color, isChild }) => {

    return ( 
        <>
            {
                item ? 
                    isChild ?
                        <SidebarChild item = {item} color = {color} />
                    : !item.children ? 
                        <SidebarLink item = {item} color = {color} />
                    :
                        <SidebarParent item = {item} setSidebarItems = {setSidebarItems}/>
                : undefined
            }
        </>
    )
}

export default SidebarItem