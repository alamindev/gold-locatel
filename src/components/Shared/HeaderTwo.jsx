import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderTwo() {
  const [humberOpen, setHumberOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-content">
          <div className="lg-logo">
            <Link to="/">
              <img src="/logo/logo.png" alt="Logo" />
            </Link>
          </div>

          <nav className="lg-navbar">
            <ul className={`${isOpenMenu ? "showMenu" : ""}`}>
              <li>
                <a href="#beneficios">Beneficios</a>
              </li>
              <li>
                <a href="#locatel">¿Cómo funciona?</a>
              </li>
              <li>
                <a href="#planes">Planes</a>
              </li>
            </ul>
          </nav>

          <div
            onClick={() => {
              setOpenMenu(!isOpenMenu);
            }}
            className="mobile-menu-icon"
          >
            <div
              onClick={() => {
                setHumberOpen(!humberOpen);
              }}
              className={`all-p-humber ${humberOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
