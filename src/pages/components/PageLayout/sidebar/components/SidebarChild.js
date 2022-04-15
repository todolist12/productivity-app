import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { Menu, MenuItem } from '@mui/material'

const SidebarChild = ({item, color}) => {
    const [anchor, setAnchor] = useState(null)
    const [open, setOpen] = useState(false)

    return (
        <div className = 'flex items-center p-1 link link-sidebar rounded show-btn-on-hover'>
            <Link to={item.url} className = "grow flex items-center ">
                <div className = "p-1 text-xl flex items-center" style={{color: color}}>
                    {item.icon ? parse(item.icon): undefined}
                </div>  
                <div className = "p-1 overflow-x-hidden">
                    {item.name}
                </div>
            </Link>
            <button 
                className = 'p-1 text-color-1 flex items-center mr-2 hidden'
                onClick = {e => {e.stopPropagation(); setAnchor(e.target.value); setOpen(!open)}}
      
            >
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </button>
            <Menu 
                anchorEl = {anchor}
                open = {open}
                onClose = {e => setOpen(false)}
            >
                <MenuItem>
                    Profile
                </MenuItem>
                <MenuItem>
                    My acount
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SidebarChild