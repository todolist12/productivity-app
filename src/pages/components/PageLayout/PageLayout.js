import React, { useState } from 'react'
import useWindowSize from '../../../hooks/useWindowSize';
import Header from './Header'
import Sidebar from './sidebar/Sidebar'

const PageLayout = ({children}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { width, height } = useWindowSize()

    return (
        <div className = "flex w-full overflow-x-hidden">
            <Header drawerOpen = {drawerOpen} setDrawerOpen = {setDrawerOpen}/>
            <div className = "flex w-full">
                <Sidebar drawerOpen = {drawerOpen} setDrawerOpen = {setDrawerOpen}/>
                <div className= 'min-h-screen bg-2 grow'> 
                    {
                        width > 800 
                            ? 
                            <div className = 'mt-14 ml-72'>
                                {children}
                            </div> 
                            : 
                            <div className = 'mt-14'>
                                {children}
                            </div>
                    } 
                    
                </div>
            </div>
        </div>
    )
}

export default PageLayout