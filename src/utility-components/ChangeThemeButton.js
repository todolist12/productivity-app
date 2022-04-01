import React, { useState } from 'react'

const ChangeThemeButton = () => {
    const [theme, setTheme] = useState('light');

    const themeColors = {
        dark: {
            'bg-color-1' : '#0f172a',
            'bg-color-2' : '#1f2937',
            'bg-color-3' : '#374151',
            'bg-color-4' : '#047857',
            'text-color-1' : '#e5e7eb',
            'text-color-2' : '#f3f4f6',
            'text-color-3' : '#a3a3a3',
            'text-color-4' : '#ffffff',
        },
        light: {
            'bg-color-1' : '#ffffff',
            'bg-color-2' : '#ebedf0',
            'bg-color-3' : '#d1d5db',
            'bg-color-4' : '#15803d',
            'text-color-1' : '#111827',
            'text-color-2' : '#1f2937',
            'text-color-3' : '#3f3f46',
            'text-color-4' : '#ffffff',
        }
    }

    const handleChangeTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
            document.documentElement.style.setProperty('--bg-color-1', themeColors.dark['bg-color-1'])
            document.documentElement.style.setProperty('--bg-color-2', themeColors.dark['bg-color-2'])
            document.documentElement.style.setProperty('--bg-color-3', themeColors.dark['bg-color-3'])
            document.documentElement.style.setProperty('--bg-color-4', themeColors.dark['bg-color-4'])
            document.documentElement.style.setProperty('--text-color-1', themeColors.dark['text-color-1'])
            document.documentElement.style.setProperty('--text-color-2', themeColors.dark['text-color-2'])
            document.documentElement.style.setProperty('--text-color-3', themeColors.dark['text-color-3'])
        } else {
            setTheme('light')
            document.documentElement.style.setProperty('--bg-color-1', themeColors.light['bg-color-1'])
            document.documentElement.style.setProperty('--bg-color-2', themeColors.light['bg-color-2'])
            document.documentElement.style.setProperty('--bg-color-3', themeColors.light['bg-color-3'])
            document.documentElement.style.setProperty('--bg-color-4', themeColors.light['bg-color-4'])
            document.documentElement.style.setProperty('--text-color-1', themeColors.light['text-color-1'])
            document.documentElement.style.setProperty('--text-color-2', themeColors.light['text-color-2'])
            document.documentElement.style.setProperty('--text-color-3', themeColors.light['text-color-3'])
        }
    }

    return (
        <button className = "p-0 m-3 border-0 text-2xl" onClick = {handleChangeTheme}>
                {
                    theme === 'light' ?
                        <div className = "theme-btn flex items-center justify-center hover">
                            <ion-icon name="sunny-outline"></ion-icon> 
                        </div>
                    : 
                        <div className = "theme-btn flex items-center justify-center hover">
                            <ion-icon name="moon-outline"></ion-icon>
                        </div>
                }
        </button>
    )
}

export default ChangeThemeButton