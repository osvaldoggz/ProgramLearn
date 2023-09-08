import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../Img/logo.png';
function NavBar() {
  return (
    <nav className='flex items-center w-full font-light'>
        <ul className='flex items-center gap-12'>
            <li>
                <NavLink 
                    to='/'>
                    <img className='w-40 h-40' src={logo} alt="Logo"/>
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'>
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/contenido'>
                    Contenido
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/nosotros'>
                    Nosotros
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/iniciar-sesion'>
                    Iniciar Sesión
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar