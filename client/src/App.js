// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import OrderForm from './components/OrderForm';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<OrderForm />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

// Ensure there is only one export default statement here
export default App;

