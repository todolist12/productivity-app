import './App.css';
import React, { useState } from 'react'

function App() {
    const [theme, setTheme] = useState('light');

    const handleChangeTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
            document.documentElement.style.setProperty('--logo-color', )
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="app bg-color-1 tex-xl h-screen w-screen">
            <button className = "p-0 m-3 border-0" onClick = {handleChangeTheme}>
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
        </div>
    );
}

export default App;
