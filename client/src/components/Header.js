// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Petrol Refill App</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/order">Order Petrol</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </header>
    );
};

export default Header;



