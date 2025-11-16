import React from "react";
import "../Styles/FooterMinimal.css";
import { NavLink } from "react-router-dom";

const FooterMinimal = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-container">

        <h3 className="footer-logo">Zenith Digital</h3>

        <nav className="footer-links">
          <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to={'/servicos'} className={({isActive})=>isActive ? 'active-link' : ''}>Serviços</NavLink>
        </nav>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} — Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};

export default FooterMinimal;
