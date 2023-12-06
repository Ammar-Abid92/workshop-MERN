import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;