import React from 'react'
import "../css/game.css";

const NavBar = () => {
  return (
       <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Juegos</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>

  )
}

export default NavBar