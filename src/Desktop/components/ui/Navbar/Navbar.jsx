import React from 'react'
import { Link }  from 'react-router-dom'
import { MenuHamburguesa } from '../../../../Desktop/components/ui/MenuHamburguesa/MenuHamburguesa'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
        <Link className='link' to='/'>Página de inicio</Link>
        {/* <Link className='link' to='/contenido'>Contenido</Link> */}
        <Link className='link' to='/SobreNosotros'>Sobre Nosotros</Link>
        <Link className='log' to='/LogIn'>Iniciar Sesión</Link>
        </div>
        <MenuHamburguesa/>
    </nav>
  )
}
