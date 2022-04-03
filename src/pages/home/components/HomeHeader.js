import React from 'react'
import ChangeThemeButton from '../../../utility-components/ChangeThemeButton'

const HomeHeader = () => {
    return (
        <div className = "h-14 flex-grow bg-white flex items-center justify-between">
            <div className = 'text-3xl font-bold text-black p-2 pl-3'>
                TodoList
            </div>
            <div className = "flex items-center">
                <a href = "/planning/anonymus-plan" className='p-3 mr-3 text-lg header-btn-hover cursor-pointer'>
                    New TodoList
                </a>
                <a href = "/login" className='p-3 mr-3 text-lg header-btn-hover cursor-pointer'>
                    Login
                </a>
                <a href = "/register" className='p-3 mr-3 text-lg header-btn-hover cursor-pointer'>
                    Register
                </a>
            </div>
        </div>
    )
}

export default HomeHeader