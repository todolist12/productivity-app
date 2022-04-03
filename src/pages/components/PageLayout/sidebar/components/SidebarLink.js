import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

const SidebarLink = ({ item }) => {
    return (
        <Link to={item.url} className = "flex items-center p-1 link link-sidebar rounded">
            <div className = "p-1 text-xl flex items-center">
                {item.icon ? parse(item.icon): undefined}
            </div>  
            <div className = "p-1 overflow-x-hidden">
                {item.name}
            </div>
        </Link>
    )
}

export default SidebarLink