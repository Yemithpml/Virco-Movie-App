import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        <Link to="/">Virco App</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movie" className="nav-link">Movies</Link>
        <Link to="/favourite" className="nav-link">Favourites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
