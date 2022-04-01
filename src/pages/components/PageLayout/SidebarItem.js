import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ item }) => {
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
                    <div className = "flex items-center p-1 link rounded" onClick={e => console.log('hello')}>
                        <div className = "p-1 text-lg flex items-center">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </div>  
                        <div className = "p-1 font-bold">
                            {item.name}
                        </div>
                    </div> 
                : undefined
            }
        </>
    )
}

export default SidebarItem