import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
  };

  const internalLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" }
  ];

  const externalLinks = [
    { label: "GitHub", href: "https://github.com/DylanLiesenfelt" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dylanliesenfelt/" }
  ];

  return (
    <>
      <header>
        <img src="/icons/logo.png" alt="logo" id="logo" onClick={goHome} />
        <h1 onClick={goHome}>Liesenfelt.net</h1>
        <button
          id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            {internalLinks.map(({ label, to }) => (
              <li key={label} onClick={() => setMenuOpen(false)}>
                <a href={to}>{label}</a>
              </li>
            ))}
            {externalLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
