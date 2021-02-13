import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarForDevOnly = () => {
  return (
    <nav className="pl-5 navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro">
              Registro
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recuperar-pass">
              Recuperar Contraseña
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/404">
              404
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/404">
              ONLY FOR DEV AND JOB!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
