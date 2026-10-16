
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">
                    Computer<span>Shop</span>
                </NavLink>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                ☰
            </button>

            <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                <ul className="navbar-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/content">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

                <NavLink to="/login" className="login-btn">
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
