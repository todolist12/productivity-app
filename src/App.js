import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import TodoListBoardPage from './pages/TodoListBoardPage';
import PlanningPage from './pages/PlanningPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import MindmapPage from './pages/MindmapPage';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/login" element = {<Login />} />
                    <Route path = "/register" element = {<Register />} />
                    <Route path = "/planning/:planningId" element = {<PlanningPage />} />
                    <Route path = "/todo-list-board/:todoListBoardId" element = {<TodoListBoardPage />} />
                    <Route path = "/dashboard" element = {<Dashboard />} />
                    <Route path = "/profile" element = {<Profile />} />
                    <Route path = "/settings" element = {<Settings />} />
                    <Route path = "/mindmap/:mindmapId" element = {<MindmapPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
