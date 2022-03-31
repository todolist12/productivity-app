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
                    <Route path = "/" exact element = {<Home />} />
                    <Route path = "/login" exact element = {<Login />} />
                    <Route path = "/register" exact element = {<Register />} />
                    <Route path = "/planning/:planningId" exact element = {<PlanningPage />} />
                    <Route path = "/todo-list-board/:todoListBoardId" exact element = {<TodoListBoardPage />} />
                    <Route path = "/dashboard" exact element = {<Dashboard />} />
                    <Route path = "/profile" exact element = {<Profile />} />
                    <Route path = "/settings" exact element = {<Settings />} />
                    <Route path = "/mindmap/:mindmapId" exact element = {<MindmapPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
