import React from 'react'
import { Link }  from 'react-router-dom'


export const NavbarA = () => {
  return (
    <nav className='navbar'>
        <Link className='link' to='/'>Pagina de inicio</Link>
        <Link className='link' to='/contenido'>Contenido</Link>
        {/* <Link className='link' to='/administrador'>Administrador</Link> */}
        <Link className='log' to='/LogIn'>Iniciar Sesión</Link>
    </nav>
  )
}
