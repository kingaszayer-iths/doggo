import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="header">
            <Link to="/" className="logo" onClick={closeMenu}>
                Doggo
            </Link>

            <button
                className="menu-button"
                type="button"
                aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            <nav
                id="main-navigation"
                className={`nav ${isMenuOpen ? "nav-open" : ""}`}
                aria-label="Huvudmeny"
            >
                <NavLink to="/" onClick={closeMenu}>
                    Hem
                </NavLink>
                <NavLink to="/activities" onClick={closeMenu}>
                    Aktiviteter
                </NavLink>
                <NavLink to="/tips" onClick={closeMenu}>
                    Tips & inspiration
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;