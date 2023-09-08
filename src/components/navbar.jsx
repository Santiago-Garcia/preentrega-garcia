import React from 'react';
import CartWidget from './carrito';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img alt="logoempresa" src="../Fotos/logo_evn.jpg" height="100" /></a>
          <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="../index.html">Inicio</a>
              <a className="nav-link" href="#">Catalogo</a>
              <a className="nav-link" href="contacto.html">Contacto</a>
              <a className="nav-link" href="acerca_de.html">Acerca De</a>
              <a className="nav-link" href="vision.html">Equipo</a>
            </div>
            <a className="nav-link" href="checkout.html">
              <CartWidget />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;