import './App.css';
import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import TodoListBoardPage from './pages/boards/TodoListBoardPage';
import PlanningPage from './pages/plans/PlanningPage';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import MindmapPage from './pages/mindmaps/MindmapPage';
import { auth } from './firebase-config';
import TodayPage from './pages/today/TodayPage';
import Redirect from './pages/Redirect';
import { AuthContext } from './providers/AuthProvider';

function App() {
    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            <BrowserRouter>
                <Routes> 
                    {
                        !currentUser ? 
                            <>
                                <Route path = "/" exact element = {<Home />} />
                                <Route path = "/login" exact element = {<Login />} />
                                <Route path = "/register" exact element = {<Register />} />
                                <Route path = "/todo-list-board/:todoListBoardId" exact element = {<TodoListBoardPage />} />
                            </>
                        : 
                            <>
                                <Route path = "/planning/:planningId" exact element = {<PlanningPage />} />
                                <Route path = "/todo-list-board/:todoListBoardId" exact element = {<TodoListBoardPage />} />
                                <Route path = "/dashboard" exact element = {<Dashboard />} />
                                <Route path = "/profile" exact element = {<Profile />} />
                                <Route path = "/settings" exact element = {<Settings />} />
                                <Route path = "/mindmap/:mindmapId" exact element = {<MindmapPage />} />
                                <Route path = "/today" exact element = {<TodayPage />} />
                            </>
                    }
                    <Route path = '*' element = {<Redirect />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
