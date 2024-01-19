import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/registrar">Registrar</Link>
        </li>
        <li className="nav-item">
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
