import React, { useState } from 'react'

const ChangeThemeButton = () => {
    const [theme, setTheme] = useState('light');

    const handleChangeTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
            document.documentElement.style.setProperty('--bg-color-1', '#ffffff')
            document.documentElement.style.setProperty('--bg-color-2', '#000000')
            document.documentElement.style.setProperty('--bg-color-3', '#000000')
            document.documentElement.style.setProperty('--text-color-1', '#000000')
            document.documentElement.style.setProperty('--text-color-2', '#000000')
            document.documentElement.style.setProperty('--text-color-3', '#000000')
        } else {
            setTheme('light')
            document.documentElement.style.setProperty('--bg-color-1', '#000000')
            document.documentElement.style.setProperty('--bg-color-2', '#000000')
            document.documentElement.style.setProperty('--bg-color-3', '#000000')
            document.documentElement.style.setProperty('--text-color-1', '#ffffff')
            document.documentElement.style.setProperty('--text-color-2', '#000000')
            document.documentElement.style.setProperty('--text-color-3', '#000000')
        }
    }

    return (
        <button className = "p-0 m-3 border-0 text-2xl" onClick = {handleChangeTheme}>
                {
                    theme === 'light' ?
                        <div className = "theme-btn">
                            <ion-icon name="sunny-outline"></ion-icon> 
                        </div>
                    : 
                        <div className = "theme-btn">
                            <ion-icon name="moon-outline"></ion-icon>
                        </div>
                }
        </button>
    )
}

export default ChangeThemeButton