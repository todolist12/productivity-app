import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const PageLayout = ({children}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className = "flex w-full overflow-x-hidden">
            <Header drawerOpen = {drawerOpen} setDrawerOpen = {setDrawerOpen}/>
            <div className = "flex w-full">
                <Sidebar drawerOpen = {drawerOpen} setDrawerOpen = {setDrawerOpen}/>
                <div className= 'min-h-screen bg-2 grow'>  
                    <div className = 'mt-14 ml-72'>
                        {children}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default PageLayout