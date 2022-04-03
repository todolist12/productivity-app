import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import useWindowSize from '../../../../hooks/useWindowSize'
import SidebarBody from './components/SidebarBody';

const Sidebar = ({drawerOpen, setDrawerOpen}) => {
    const {width, height} = useWindowSize();

    if(width <= 800) {
        return (
            <Drawer open={drawerOpen} onClose={e => setDrawerOpen(false)}>
                <SidebarBody />
            </Drawer>
        )
    } 
    else {
        return (
            <SidebarBody />
        )
    }
}

export default Sidebar