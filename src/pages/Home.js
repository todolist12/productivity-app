import React from 'react'
import HomeHeader from './components/HomeHeader'

const Home = () => {
    return (
        <div className='flex min-h-screen bg-1 flex-col'>
            <div className = "flex w-full fixed z-0">
                <HomeHeader />
            </div>
            <div className='home-bg-img w-screen h-screen flex items-center justify-center'>
                <div className = "p-3 max-w-lg text-center bg-1 rounded-xl shadow">
                    <div className = "text-5xl font-bold">
                        Organize it all with TodoList
                    </div>
                    <div className = "mt-6">
                        Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).
                    </div>
                    <button className = 'p-2 bg-4 mt-6 text-white rounded-lg btn-hover font-bold'>
                        <a href="/register">
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home