import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home';

// COMPONENTS
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
