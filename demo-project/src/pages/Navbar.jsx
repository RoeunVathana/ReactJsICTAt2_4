
import { NavLink } from "react-router-dom";
import "./style/Navbar.css";
import { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "Contact", path: "/content" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="navbar">
            <a href="" className="navbar-logo">
               <NavLink to="/"> Computer<span>Shop</span></NavLink>
            </a>

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
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                // href={link.path}
                                // onClick={() => setMenuOpen(false)}
                            >
                                <NavLink to={link.path}>{link.name}</NavLink>
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="/login" className="login-btn">
                    Login
                </a>
            </div>
        </nav>
    );
};

export default Navbar;