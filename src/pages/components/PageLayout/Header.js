import { Menu } from '@mui/icons-material'
import React from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import ChangeThemeButton from '../../../utility-components/ChangeThemeButton'

const Header = ({drawerOpen, setDrawerOpen}) => {
    const {width, height} = useWindowSize();

    return (
        <div className = 'bg-4 flex justify-between p-2 items-center h-14 text-color-4 fixed w-full z-20'>
            <div className = "flex items-center font-bold">
                {width < 800 ? 
                <>
                    <button onClick = {e => setDrawerOpen(true)} >
                        <Menu />
                    </button>
                    <div className = "text-2xl font-bold pl-2">
                        TodoList
                    </div> 
                </> :
                <div className = "text-2xl font-bold pl-12">
                    TodoList
                </div>}
                
            </div>
            <div>
                <ChangeThemeButton />
            </div>
        </div>
    )
}

export default Header