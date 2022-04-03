import React, { useEffect, useState } from 'react';
import TodosPage from "@/pages/TodosPage";
import AboutPage from "@/pages/AboutPage";
import { Route, Routes, Link } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";

export const App: React.FC<{}> = () => {

    return <>
        <h1>Hello React !</h1>
        <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>Topics</Link></li>
        </div>
        <div className="container">
            <Routes>
                <Route path='*' element={<NotFoundPage />} />
                <Route path="/" element={<TodosPage />}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </div>
    </>;
};